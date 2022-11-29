import Head from "next/head";
import About from "../component/About";
import Categories from "../component/Categories";
import Featured from "../component/Featured";
import HeroSection from "../component/HeroSection";

export default function Home() {
  return (
    <div>
      <Head>
        <title>SneakyLegs</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="./public/images/icon.png" />
      </Head>
      <div>
        <HeroSection />
        <About />
        <Categories />
        <Featured />
      </div>
    </div>
  );
}

// https://wallpaper.dog/large/17177044.jpg
