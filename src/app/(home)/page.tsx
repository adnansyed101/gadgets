import Banner from "./components/Banner";
import Categories from "./components/Categories";
import Featured from "./components/Featured";
import NewsletterSection from "./components/NewsletterSection";
import WhyChooseUs from "./components/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Banner />
      <Featured />
      <Categories />
      <WhyChooseUs />
      <NewsletterSection />
    </>
  );
}
