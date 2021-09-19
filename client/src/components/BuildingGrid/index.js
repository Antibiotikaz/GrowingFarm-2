import styled from "styled-components";

import BuildingPopUp from "../PopUp/index";
import { useSelector } from "react-redux";
import GridTile from "./GridTile/index";
//Styles
const BuildingGridContainer = styled.div``;

const Grid = styled.div`
  border: 1px solid blue;
  width: 60%;
  margin: 0 auto;
`;
const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: minmax(100px, auto);
`;
const GridFrame = styled.div`
  border: 1px solid red;
`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const BuildingGrid = () => {
  const playerStats = useSelector((state) => state.userData.player);
  console.log(playerStats, "playerStats");

  if (!playerStats) {
    return <div>Loading...</div>;
  }
  return (
    <BuildingGridContainer>
      <Title> Building-Grid in Progress</Title>
      <Grid>
        <GridWrapper>
          {playerStats.grid.map((gridStats, index) => {
            return (
              <GridFrame>
                <GridTile gridStats={gridStats} playerStats={playerStats} />
              </GridFrame>
            );
          })}
        </GridWrapper>
      </Grid>
      <BuildingPopUp />
    </BuildingGridContainer>
  );
};

export default BuildingGrid;
