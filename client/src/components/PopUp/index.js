import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { buyBuilding } from "../../store/Actions/playerActions";
//Styles
const PopUpContainer = styled.div`
  background-color: white;
  padding: 3rem;
  border-radius: 1rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const BackDrop = styled.div`
  background-color: rgba(240, 240, 240, 0.5);
  display: ${(props) => (props.openPopUp ? "block" : "none")};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const PopUp = (props) => {
  console.log(props, "PopUpe props");
  // 1.KAzkur reiks paskaiciuoti Player resursus ir kiek kainuos pastastas. Skaiciavimas vyks cia rezultatus siusime i backa.
  const dispatch = useDispatch();
  const [selectedBuilding, setSelectedBuilding] = useState("farm");

  const body = {
    building: selectedBuilding,
    buildingLevel: 1,
    buildingSlot: props.gridStats?.name,
    playerWood: props.playerStats?.wood,
    playerClay: props.playerStats?.clay,
    playerIron: props.playerStats?.iron,
  };
  const submitBuilding = () => {
    dispatch(buyBuilding(body));
  };

  return (
    <BackDrop openPopUp={props.openPopUp}>
      <PopUpContainer>
        <div onClick={() => props.closePopUp()}>X</div>
        <Title>Building slot {props.gridStats?.name}</Title>
        <div>
          <select onChange={(e) => setSelectedBuilding(e.target.value)}>
            <option value="farm">Farming Land</option>
            <option value="wheat">Wheat Land</option>
            <option value="storage">Storage</option>
          </select>
          <button onClick={() => submitBuilding()}>Construct Building</button>
        </div>
      </PopUpContainer>
    </BackDrop>
  );
};

export default PopUp;
