import styled from "styled-components";
import { useSelector } from "react-redux";
//Styles
const PlayerStatsContainer = styled.div``;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;
const Stat = styled.li``;
const PlayerStats = () => {
  const playerStats = useSelector((state) => state.userData.player);

  if (!playerStats) {
    return <div>Loading...</div>;
  }
  return (
    <PlayerStatsContainer>
      <Title>Player Stats</Title>
      <ul>
        <Stat>Wood: {playerStats.wood}</Stat>
        <Stat>Clay: {playerStats.clay}</Stat>
        <Stat>Iron: {playerStats.iron}</Stat>
      </ul>
    </PlayerStatsContainer>
  );
};

export default PlayerStats;
