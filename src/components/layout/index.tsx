import { useEffect, useState, ReactElement } from "react";

// import style from "./index.module.scss";
import "./index.scss";
import classnames from "classnames";

interface layoutProps {
  children: Array<ReactElement>;
}

export default function Layout(Props: layoutProps) {
  const { children } = Props;

  const [hasAside, sethasAside] = useState<boolean>(false);

  useEffect(() => {
    sethasAside(
      children.some((item) => item.type.toString() === Sider.toString())
    );
  }, [children]);

  return (
    <section
      className="n_layout"
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

  return <main className={classnames("n_layout_main")}>{children}</main>;
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

  return <header className={classnames("n_layout_header")}>{children}</header>;
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

  return <footer className={classnames("n_layout_footer")}>{children}</footer>;
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

  return <aside className={classnames("n_layout_aside")}>{children}</aside>;
}

Layout.Sider = Sider;
