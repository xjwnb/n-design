/*
 * @Author: your name
 * @Date: 2021-12-02 08:31:24
 * @LastEditTime: 2021-12-03 14:55:38
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \n-design\src\components\menu\index.tsx
 */
import {
  useState,
  useEffect,
  useRef,
  createContext,
  useContext,
  cloneElement,
} from "react";
// Style
import Style from "./index.module.scss";

interface IProps {
  children?: any;
  mode?: "vertical" | "horizontal" | "inline";
  style?: object;
}

interface MenuContextParam {
  onClick: Function;
}

const defaultMenuContext = {
  onClick: () => {},
};

const MenuContext = createContext<MenuContextParam>(defaultMenuContext);

function Menu(Props: IProps) {
  const { children, mode = "vertical", style } = Props;

  /**
   * 递归获取 id 数组
   */
  /* const getIds = function (
    child: any,
    arr: string[] = [],
    id: string
  ): string[] {
    for (let i = 0; i < child?.length; i++) {
      if (child[i].props?.id) {
        arr.push(child[i].props.id);
      }

      if (child[i].props?.id === id) return arr;

      if (child[i].props?.children instanceof Array) {
        return getIds(child[i].props?.children, arr, id);
      } else {
        arr.pop();
      }
    }
    return [];
  }; */

  const getIds = function (
    child: any,
    id: string,
    result: string[] = []
  ): string[] {
    for (let i = 0; i < child.length; i++) {
      child[i].props?.id && result.push(child[i].props?.id);
      if (child[i].props?.id === id) {
        break;
        // return result;
      } else {
        if (child[i].props?.children && child[i].props?.children.length > 0) {
          // result.push(...getIds(child[i].props.children, id, result));
          // console.log(getIds(child[i].props.children, id, result));
          result = getIds(child[i].props.children, id, result);
          if (result[result.length - 1] === id) {
            break;
          }
        } else {
          // child[i].props?.id && result.push(child[i].props?.id);
          // console.log(result);
          /* if (result[result.length - 1] !== id) {
            result = [];
          } */
          /* console.log(result);
          if (result[result.length - 1] !== id) {
            result.pop();
          } */
        }
      }
    }
    /* for (let i = 0; i < child.length; i++) {
      const currentChild = child[i];
      if (
        currentChild.props?.children &&
        currentChild.props?.children.length > 0
      ) {
        // result.push(currentChild.props?.id);
        result.push(getIds(currentChild.props?.children, id));
      } else {
        if (currentChild.props?.id === id) {
          result.push(currentChild.props?.id);
          break;
        }
        result.push(currentChild.props?.id);
      }
    } */
    return result;
  };

  // function getCidList(val: any, id: string) {
  //   let cid_list: string[] = [];
  //   val.forEach((item: any, index: number) => {
  //     if (item.props?.id === id) {
  //       cid_list = [item.props?.id];
  //       return false;
  //     } else {
  //       if (item.props?.children) {
  //         let newCid_list = [item.props?.id];
  //         let list: any[] = [];
  //         // if (item.props?.children instanceof Array) {
  //         list = nodefun(item.props?.children, id, newCid_list);
  //         // }
  //         if (list) {
  //           cid_list = list;
  //         }
  //       }
  //     }
  //   });
  //   // 递归函数
  //   function nodefun(
  //     newVal: any,
  //     newId: string,
  //     newCid_list: string[]
  //   ): string[] {
  //     let flag = false;
  //     // console.log(newVal);
  //     if (!(newVal instanceof Array)) return newCid_list;
  //     newVal?.forEach((j: any) => {
  //       // console.log(j)
  //       if (j.props?.id === newId) {
  //         newCid_list.push(j.props?.id);
  //         flag = true;
  //       } else {
  //         if (j.props?.children) {
  //           let cid_list = JSON.parse(JSON.stringify(newCid_list));
  //           cid_list.push(j.props?.id);
  //           let list = nodefun(j.props?.children, newId, cid_list);
  //           /* let list: any[] = [];
  //           if (j.props?.children instanceof Array) {
  //             list = nodefun(j.props?.children, newId, cid_list);
  //           } */
  //           if (list) {
  //             newCid_list = list;
  //             flag = true;
  //           }
  //         }
  //       }
  //     });
  //     if (flag) {
  //       return newCid_list;
  //     } else {
  //       return [];
  //     }
  //   }
  //   return cid_list;
  // }

  return (
    <div
      style={{
        width: 250,
        ...style,
      }}
      className={[Style.n_menu, Style[`n_menu_${mode}`]].join(" ")}
    >
      <MenuContext.Provider
        value={{
          onClick: (key: string) => {
            console.log(key, children);
            // let result = [];
            console.log(getIds(children, key));
            // console.log(getCidList(children, key));
            /* let keyArr: string[] = [];
            for (let i = 0; i < children.length; i++) {
              keyArr = getIds(children.slice(i), keyArr, key);
              if (keyArr.length) {
                break;
              }
              continue;
            }
            console.log(keyArr); */
          },
        }}
      >
        {children}
      </MenuContext.Provider>
    </div>
  );
}

/**
 * SubMenu
 */
interface submenuProps {
  children: any;
  title: string;
  icon?: React.ReactNode;
  id: string;
}

function SubMenu(Props: submenuProps) {
  const { children, icon, title } = Props;

  const [isShow, setisShow] = useState(false);

  const subMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    subMenuRef.current?.addEventListener("mouseover", () => {
      setisShow(true);
    });
    subMenuRef.current?.addEventListener("mouseleave", () => {
      setisShow(false);
    });
  }, []);

  return (
    <div className={[Style.n_submenu].join(" ")} ref={subMenuRef}>
      <div className={[Style.n_submenu_content].join(" ")}>
        <div
          className={[Style.n_submenu_main].join(" ")}
          style={{
            color: isShow ? "#1890FF" : "",
          }}
        >
          {icon && <div>{icon}</div>}
          <div className={[Style.n_submenu_title].join(" ")}>{title}</div>
        </div>
        {/* icon */}
      </div>
      <div
        className={[Style.n_submenu_inner].join(" ")}
        style={{
          display: isShow ? "block" : "none",
        }}
      >
        {children}
      </div>
    </div>
  );
}

/**
 * ItemGroup
 */
interface groupProps {
  children: any[];
  title: string;
}

function ItemGroup(Props: groupProps) {
  const { children, title } = Props;

  const [nowChild, setnowChild] = useState(children);

  useEffect(() => {
    const child: any[] = [];
    children.forEach((element: any, index: number) => {
      child.push(
        cloneElement(element, {
          key: index,
          style: {
            padding: "10px 40px",
          },
        })
      );
    });
    setnowChild(child);
  }, [children]);

  return (
    <div className={[Style.n_itemgroup].join(" ")}>
      <div className={[Style.n_itemgroup_title].join(" ")}>{title}</div>
      <div className={[Style.n_itemgroup_inner].join(" ")}>{nowChild}</div>
    </div>
  );
}

/**
 * Item
 */
interface itemProps {
  children: any;
  style?: object;
  id: string;
}

function Item(Props: itemProps) {
  const { children, style, id } = Props;

  const { onClick } = useContext(MenuContext);

  /**
   * 点击
   */
  const handleClickItem = function (key: string) {
    onClick(key);
  };

  return (
    <div
      className={[Style.n_item].join(" ")}
      style={{
        ...style,
      }}
      onClick={() => handleClickItem(id)}
    >
      {children}
    </div>
  );
}

Menu.SubMenu = SubMenu;
Menu.ItemGroup = ItemGroup;
Menu.Item = Item;

export default Menu;