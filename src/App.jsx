import Navbar from "./components/LandingPage/Navbar";
import BreathNatureal from "./components/LandingPage/BreathNatureal";
import TrendingPlants from "./components/LandingPage/TrendingPlants";
import { OurTrendyPlants } from "./utils/data";
import TopSelling from "./components/LandingPage/topSelling";
import CustomerReview from "./components/LandingPage/CustomerReview";
import PlantsCollection from "./components/LandingPage/PlantsCollection";
import Footer from "./components/LandingPage/Footer";
function App() {
  return (
    <>
      <Navbar />
      <div className="bg_plant">
        <BreathNatureal />
        {OurTrendyPlants.map((data, ind) => (
          <TrendingPlants key={data.id} data={data} index={ind} />
        ))}
      </div>
      <TopSelling />
      <CustomerReview />
      <PlantsCollection />
      <Footer />
    </>
  );
}

export default App;
