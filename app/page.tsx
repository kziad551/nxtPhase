import HomeHero from "./components/Home/HomeHero";
import ServicesHome from "./components/Home/ServicesHome";
import SolutionsHome from "./components/Home/SolutionsHome";



export default function Home() {
  return (
    <div >
      <HomeHero/>
      <ServicesHome/>
      <SolutionsHome/>
    </div>
  );
}
