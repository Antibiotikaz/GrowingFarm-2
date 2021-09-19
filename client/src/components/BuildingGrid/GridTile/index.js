import { useState } from "react";
import styled from "styled-components";
import GroundImg from "../../../assets/images/ground.png";
import GrassImg from "../../../assets/images/grass.jpeg";
import BuildingPopUp from "../../PopUp/index";
//Styles

const GridContainer = styled.div``;

const BuildingSlotImg = styled.img`
  width: 100%;
  cursor: pointer;
`;

const GridTile = (props) => {
  const [openBuilding, setOpenBuilding] = useState(false);

  const openBuildingSlot = () => {
    setOpenBuilding(true);
  };
  const closeBuildingSlot = () => {
    setOpenBuilding(false);
  };
  return (
    <GridContainer>
      <BuildingSlotImg
        src={props.gridStats.building === "wheat" ? GrassImg : GroundImg}
        onClick={() => openBuildingSlot()}
      />
      <BuildingPopUp
        closePopUp={closeBuildingSlot}
        openPopUp={openBuilding}
        gridStats={props.gridStats}
        playerStats={props.playerStats}
      />
    </GridContainer>
  );
};

export default GridTile;
