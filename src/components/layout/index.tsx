import { useEffect, useState, ReactElement } from "react";

import style from "./index.module.scss";

interface layoutProps {
  children: Array<ReactElement>;
}

export default function Layout(Props: layoutProps) {
  const { children } = Props;

  const [hasAside, sethasAside] = useState<boolean>(false);

  useEffect(() => {
    console.log(children[0].type.toString() === Sider.toString())
    sethasAside(
      children.some((item) => item.type.toString() === Sider.toString())
    );
    console.log(hasAside)
  }, [children]);

  return (
    <section
      className={[`${style.n_layout}`].join(" ")}
      style={{
        flexDirection: hasAside ? "row" : "column",
      }}
    >
      {children}
    </section>
  );
}

/**
 * Content
 */
interface contentProps {
  children?: any;
}

function Content(Props: contentProps) {
  const { children } = Props;

  return <main className={style.n_layout_main}>{children}</main>;
}

Layout.Content = Content;

/**
 * Header
 */
interface headerProps {
  children?: any;
}

function Header(Props: headerProps) {
  const { children } = Props;

  return <header className={style.n_layout_header}>{children}</header>;
}

Layout.Header = Header;

/**
 * Footer
 */
interface footerProps {
  children?: any;
}

function Footer(Props: footerProps) {
  const { children } = Props;

  return <footer className={style.n_layout_footer}>{children}</footer>;
}

Layout.Footer = Footer;

/**
 * Aside
 */
interface asideProps {
  children?: any;
}

function Sider(Props: asideProps) {
  const { children } = Props;

  return <aside className={style.n_layout_aside}>{children}</aside>;
}

Layout.Sider = Sider;
