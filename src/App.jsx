import Navbar from "./components/LandingPage/Navbar";
import BreathNatureal from "./components/LandingPage/BreathNatureal";
import TrendingPlants from "./components/LandingPage/TrendingPlants";
import { OurTrendyPlants } from "./utils/data";
import TopSelling from "./components/LandingPage/topSelling";
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
    </>
  );
}

export default App;
