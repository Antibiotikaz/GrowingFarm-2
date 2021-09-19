import * as types from "../types/playerTypes";
import axios from "axios";

export const getPlayerbyID = () => async (dispatch) => {
  try {
    const responseData = await axios.get(`http://localhost:9000/player`);
    console.log(responseData.data.player, "res.data.player");
    dispatch({
      type: types.GET_PLAYER,
      payload: responseData.data.player,
    });
  } catch (err) {
    console.log(err);
  }
};

export const buyBuilding = (body) => async (dispatch) => {
  try {
    const responseData = await axios.put(
      `http://localhost:9000/player/buyBuilding`,
      body
    );
    console.log(responseData.data, "res.data.player");
    dispatch({
      type: types.BUY_BUILDING,
      payload: responseData.data.player,
    });
  } catch (err) {
    console.log(err);
  }
};
