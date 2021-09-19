const { Player } = require("../../models/player_model");

exports.buyBuilding = async (req, res) => {
  let {
    userId,
    building,
    buildingLevel,
    playerWood,
    playerClay,
    playerIron,
    buildingSlot,
  } = req.body;

  try {
    await Player.findOneAndUpdate(
      { _id: "6123dde1ded436ca727ba0b2", "grid.name": buildingSlot },
      {
        $set: {
          "grid.$.building": building,
          "grid.$.buildingLevel": buildingLevel,
        },
      }
    );

    const updatedPlayer = await Player.findById("6123dde1ded436ca727ba0b2");
    if (!updatedPlayer || updatedPlayer === null) {
      return res.status(400).json({ msg: "Player not updated" });
    }
    console.log(updatedPlayer, "updatedPlayer");
    res.json({
      player: updatedPlayer,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
