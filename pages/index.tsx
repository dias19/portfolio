import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "~/styles/Home.module.css";
import styleHeader from "~/styles/Header.module.css";
import styleOrientation from '~/styles/Orientation.module.css';
import { Icon } from '@iconify/react';
import Header from "~/components/header";
import OrientationLeft from "~/components/orientation-left";
import OrientationRight from "~/components/orientation-right";
import Landing from "~/components/landing";
import AboutMe from "~/components/about";
import Projects from "~/components/projects/projects";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Dias Nurmukhambetov</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <OrientationLeft/>
      <OrientationRight/>
      <main className={styles.main}>
        <Landing/>
        <AboutMe/>
        <Projects/>
      </main>
    </>
  );
}
