/*
 * @Author: your name
 * @Date: 2021-12-02 08:31:24
 * @LastEditTime: 2021-12-02 11:15:26
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \n-design\src\components\menu\index.tsx
 */
import { useState, useEffect, useRef, cloneElement } from "react";
// Style
import Style from "./index.module.scss";

interface IProps {
  children?: any;
  mode?: "vertical" | "horizontal" | "inline";
  style?: object;
}

function Menu(Props: IProps) {
  const { children, mode = "vertical", style } = Props;

  return (
    <div
      style={{
        width: 250,
        ...style,
      }}
      className={[Style.n_menu, Style[`n_menu_${mode}`]].join(" ")}
    >
      {children}
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
}

function SubMenu(Props: submenuProps) {
  const { children, icon, title } = Props;

  const [isShow, setisShow] = useState(false);

  const subMenuRef = useRef<HTMLElement>(null);

  useEffect(() => {
    subMenuRef.current?.addEventListener("mouseover", () => {
      setisShow(true);
    });
    subMenuRef.current?.addEventListener("mouseleave", () => {
      setisShow(false);
    });
  }, []);

  return (
    <span className={[Style.n_submenu].join(" ")} ref={subMenuRef}>
      <div className={[Style.n_submenu_content].join(" ")}>
        <span
          className={[Style.n_submenu_main].join(" ")}
          style={{
            color: isShow ? "#1890FF" : "",
          }}
        >
          {icon && <div>{icon}</div>}
          <span className={[Style.n_submenu_title].join(" ")}>{title}</span>
        </span>
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
    </span>
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

  console.log(children);

  useEffect(() => {
    const child: any[] = [];
    children.forEach((element: any) => {
      child.push(
        cloneElement(element, {
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
}

function Item(Props: itemProps) {
  const { children, style } = Props;

  return (
    <div
      className={[Style.n_item].join(" ")}
      style={{
        ...style,
      }}
    >
      {children}
    </div>
  );
}

Menu.SubMenu = SubMenu;
Menu.ItemGroup = ItemGroup;
Menu.Item = Item;

export default Menu;
