/*
 * @Author: your name
 * @Date: 2021-12-02 08:31:24
 * @LastEditTime: 2021-12-24 10:49:43
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
// import Style from "./index.module.scss";
import "./index.scss";
import classnames from "classnames";
import { Right, Bottom } from "../../Icons/icon/index";

interface IProps {
  children?: any;
  mode?: "vertical" | "horizontal" | "inline";
  style?: object;
  theme?: "light" | "dark";
  defaultSelectedKeys?: any[];
  defaultOpenKeys?: any[];

  onChange?: (val: string[]) => void;
}

interface MenuContextParam {
  onClick: Function;
  selectIdList: string[];
  theme: "light" | "dark";
  mode: "vertical" | "horizontal" | "inline";
  defaultOpenKeys: any[];
}

const defaultMenuContext: MenuContextParam = {
  onClick: () => {},
  selectIdList: [],
  theme: "light",
  mode: "vertical",
  defaultOpenKeys: [],
};

const MenuContext = createContext(defaultMenuContext);

function Menu(Props: IProps) {
  const {
    children,
    mode = "vertical",
    style,
    theme = "light",
    defaultSelectedKeys = [],
    defaultOpenKeys = [],
    onChange,
  } = Props;

  const [idList, setidList] = useState<Array<string>>([]);

  useEffect(() => {
    if (defaultSelectedKeys.length) {
      setidList(getCidList(children, defaultSelectedKeys[0]));
    }
  }, [defaultSelectedKeys, children]);

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
        width: mode !== "horizontal" ? 250 : "",
        ...style,
      }}
      className={classnames("n_menu", `n_menu_${mode}`, `n_menu_${theme}`)}
    >
      <MenuContext.Provider
        value={{
          onClick: (key: string) => {
            let keyList = getCidList(children, key);
            setidList(keyList);
            onChange?.(keyList);
          },
          selectIdList: idList,
          theme,
          mode,
          defaultOpenKeys,
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
  const [iconColor, seticonColor] = useState("#000");

  const { selectIdList, theme, mode, defaultOpenKeys } =
    useContext(MenuContext);

  const subMenuRef = useRef<HTMLDivElement>(null);
  const subMenuContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setisShow(defaultOpenKeys.includes(id));
  }, [id, defaultOpenKeys]);

  useEffect(() => {
    // if (mode === "vertical") {
    if (theme === "light") {
      seticonColor(selectIdList.includes(id) ? "#1890ff" : "#333");
    } else if (theme === "dark") {
      seticonColor("#fff");
    }
    // }
  }, [selectIdList, theme, id, mode]);

  useEffect(() => {
    if (mode === "vertical") {
      subMenuRef.current?.addEventListener("mouseover", () => {
        setisShow(true);
      });
      subMenuRef.current?.addEventListener("mouseleave", () => {
        setisShow(false);
      });
    } else {
      subMenuContentRef.current?.addEventListener("click", () => {
        setisShow(!isShow);
      });
    }
  }, [mode, isShow]);

  return (
    <div
      className={classnames(
        "n_submenu",
        `n_submenu_${theme}`,
        `n_submenu_${mode}`
      )}
      ref={subMenuRef}
    >
      <div className={classnames("n_submenu_content")} ref={subMenuContentRef}>
        <div
          className={classnames(
            "n_submenu_main",
            selectIdList.includes(id) ? "n_submenu_main_active" : ""
          )}
          style={
            {
              // color: isShow ? "#1890FF" : "",
            }
          }
        >
          {icon && <div>{icon}</div>}
          <div className={classnames("n_submenu_title")}>{title}</div>
        </div>
        {/* icon */}
        {mode === "vertical" && (
          <div>{children && <Right color={iconColor} />}</div>
        )}
        {mode === "inline" && (
          <div
            className={classnames("n_submenu_icon")}
            style={{
              transform: isShow ? `rotate(${-180}deg)` : "",
            }}
          >
            {children && <Bottom color={iconColor} />}
          </div>
        )}
        {mode === "horizontal" && isShow && (
          <div className={classnames("n_submenu_active_bar")}></div>
        )}
      </div>
      <div
        className={classnames("n_submenu_inner", `n_submenu_${theme}`)}
        style={{
          display: isShow ? "block" : "none",
          width:
            mode === "horizontal"
              ? Number(subMenuContentRef.current?.clientWidth || 0) + 20
              : "",
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

  const { mode } = useContext(MenuContext);

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
    <div className={classnames("n_itemgroup", `n_itemgroup_${mode}`)}>
      <div className={classnames("n_itemgroup_title")}>{title}</div>
      <div className={classnames("n_itemgroup_inner")}>{nowChild}</div>
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

  const { onClick, selectIdList, theme, mode } = useContext(MenuContext);

  const [hrefVal, sethrefVal] = useState("");

  useEffect(() => {
    if (children.props?.href) {
      sethrefVal(children.props.href);
    }
  }, [children]);

  /**
   * 点击
   */
  const handleClickItem = function (key: string) {
    onClick(key);
    if (hrefVal) {
      window.location.href = hrefVal;
    }
  };

  return (
    <div
      className={classnames(
        "n_item",
        `n_item_${mode}`,
        `n_item_${theme}`,
        selectIdList.includes(id) ? `n_item_${theme}_active` : ""
      )}
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
