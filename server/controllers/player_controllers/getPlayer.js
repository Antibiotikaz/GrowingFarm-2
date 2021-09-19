const { Player } = require("../../models/player_model");

exports.getPlayer = async (req, res) => {
  let { userId } = req.body;

  try {
    const player = await Player.findById("6123dde1ded436ca727ba0b2");
    if (!player || player === null) {
      return res.status(400).json({ msg: "No such player" });
    }
    res.json({
      player: player,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
