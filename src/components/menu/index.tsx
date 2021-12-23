/*
 * @Author: your name
 * @Date: 2021-12-02 08:31:24
 * @LastEditTime: 2021-12-23 11:12:54
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

  const getIds = function (
    child: any,
    id: string,
    root: any,
    result: string[] = []
  ): string[] {
    for (let i = 0; i < child.length; i++) {
      child[i].props?.id && result.push(child[i].props?.id);

      if (child[i].props?.id === id) {
        console.log(root);
        console.log(child[i]);
        console.log("找到");
        break;
      } else {
        if (child[i].props?.children && child[i].props?.children.length > 0) {
          result = getIds(child[i].props.children, id, root, result);
          if (result[result.length - 1] === id) {
            break;
          }
        }
      }
    }
    return result;
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
            console.log(key, children);
            console.log(getIds(children, key, children));
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
