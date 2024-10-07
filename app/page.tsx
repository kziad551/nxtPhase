import Image from "next/image";
import HomeHero from "./components/Home/HomeHero";
import ServicesHome from "./components/Home/ServicesHome";
import SolutionsHome from "./components/Home/SolutionsHome";
import CalendarHome from "./components/Home/CalendarHome";

export default function Home() {
  return (
    <div >
      <HomeHero/>
      <ServicesHome/>
      <SolutionsHome/>
      <CalendarHome/>
    </div>
  );
}
