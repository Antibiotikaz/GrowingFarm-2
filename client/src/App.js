import wheatFarm from "../src/assets/images/wheatFarm.jpg";
import { useDispatch, useSelector } from "react-redux";
import { getPlayerbyID } from "./store/Actions/playerActions";
import BuildingGrid from "./components/BuildingGrid";
import Navigation from "./components/Navigation";
import PlayerStats from "./components/PlayerStats";
function App() {
  // const isOpened = useSelector((state) => state.general.registrationForm);
  const dispatch = useDispatch();
  dispatch(getPlayerbyID());

  return (
    <div className="App">
      <Navigation />
      <PlayerStats />
      <BuildingGrid />
    </div>
  );
}

export default App;
