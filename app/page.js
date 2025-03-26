import Banner from "./_components/Banner";
import BestSelling from "./_components/BestSelling";
import Explore from "./_components/Explore";
import Header from "./_components/Header";
import OrderCoffee from "./_components/OrderCoffee";

export default function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <Explore />
      <OrderCoffee />
      <BestSelling />
    </div>
  );
}
 