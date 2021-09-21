import { Fragment } from "react";
import Layout from "../components/Layout";
import style from "../styles/Home.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <Fragment>
      <Layout pageTitle="Home page">
        {/* Image pada NextJS menggunakn lazyload, yang mana akan di panggil bila diperlukan */}
        <Image src="/instagram.png" width={200} height={200} alt="instagram" />
        <h1 className={style["title-homepage"]}>Welcome Acep Nurman Sidik</h1>
      </Layout>
    </Fragment>
  );
}
