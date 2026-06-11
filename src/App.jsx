import Navbar from "./components/LandingPage/Navbar";
import BreathNatureal from "./components/LandingPage/BreathNatureal";
import TrendingPlants from "./components/LandingPage/TrendingPlants";
import { OurTrendyPlants } from "./utils/data";
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
    </>
  );
}

export default App;
