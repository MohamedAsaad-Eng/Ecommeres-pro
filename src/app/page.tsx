
import CategorySlider from "./_components/CategorySlider";
import MainSlider from "./_components/MainSlider";

import FeaturedProducts from "./products/_components/FeaturedProducts";

export default function Home() {
  return (
    <div>
      <MainSlider/>
      <CategorySlider/>
      <FeaturedProducts/>
    </div>
  );
}
