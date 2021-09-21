import { Fragment, ReactNode } from "react";
import Footer from "../Footer";
import Header from "../Header";
import style from "./Layout.module.css";
import Head from "next/head";

interface LayoutPage {
  children: ReactNode;
  pageTitle: String;
}
export default function Layout(props: LayoutPage) {
  // untuk membungkus elemen yang mengunakna Layout
  // pageTitle akan menerima parameter yang nantinya di munculkan ke title
  const { children, pageTitle } = props;

  return (
    <Fragment>
      <Head>
        <title>NextJS | {pageTitle}</title>
      </Head>
      <div className={style.container}>
        <Header />
        <div className={style.content}>{children}</div>
        <Footer />
      </div>
    </Fragment>
  );
}
