/*
 * @Author: your name
 * @Date: 2021-12-02 08:31:24
 * @LastEditTime: 2021-12-23 16:14:16
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
import { Right } from "../../Icons/icon/index";

interface IProps {
  children?: any;
  mode?: "vertical" | "horizontal" | "inline";
  style?: object;

  onChange?: (val: string[]) => void;
}

interface MenuContextParam {
  onClick: Function;
  selectIdList: string[];
}

const defaultMenuContext: MenuContextParam = {
  onClick: () => {},
  selectIdList: [],
};

const MenuContext = createContext(defaultMenuContext);

function Menu(Props: IProps) {
  const { children, mode = "vertical", style, onChange } = Props;

  const [idList, setidList] = useState<Array<string>>([]);

  const getCidList = function (val: any, id: any) {
    let cid_list: any[] = [];
    val.forEach((item: any, index: number) => {
      if (item.props.id === id) {
        cid_list = [item.props.id];
        return false;
      } else {
        if (item.props.children) {
          let newCid_list = [item.props.id];
          let list = nodefun(item.props.children, id, newCid_list);
          if (list) {
            cid_list = list;
          }
        }
      }
    });
    // 递归函数
    function nodefun(newVal: any, newId: any, newCid_list: any) {
      let flag = false;
      if (newVal instanceof Array) {
        newVal?.forEach((j: any) => {
          // console.log(j)
          if (j.props.id === newId) {
            newCid_list.push(j.props.id);
            flag = true;
          } else {
            if (j.props.children) {
              let cid_list = JSON.parse(JSON.stringify(newCid_list));
              cid_list.push(j.props.id);
              let list = nodefun(j.props.children, newId, cid_list);
              if (list) {
                newCid_list = list;
                flag = true;
              }
            }
          }
        });
      }
      if (flag) {
        return newCid_list;
      }
    }
    return cid_list.filter((item) => !!item === true);
  };

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
            let keyList = getCidList(children, key);
            setidList(keyList);
            onChange?.(keyList);
          },
          selectIdList: idList,
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
  const { children, icon, title, id } = Props;

  const [isShow, setisShow] = useState(false);

  const { selectIdList } = useContext(MenuContext);

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
          className={[
            Style.n_submenu_main,
            selectIdList.includes(id) ? Style.n_submenu_main_active : "",
          ].join(" ")}
          style={{
            color: isShow ? "#1890FF" : "",
          }}
        >
          {icon && <div>{icon}</div>}
          <div className={[Style.n_submenu_title].join(" ")}>{title}</div>
        </div>
        {/* icon */}
        <div>
          {children && (
            <Right color={selectIdList.includes(id) ? "#1890ff" : "#333"} />
          )}
        </div>
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

  const { onClick, selectIdList } = useContext(MenuContext);

  /**
   * 点击
   */
  const handleClickItem = function (key: string) {
    onClick(key);
  };

  return (
    <div
      className={[
        Style.n_item,
        selectIdList.includes(id) ? Style.n_item_active : "",
      ].join(" ")}
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
