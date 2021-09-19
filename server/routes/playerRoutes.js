const router = require("express").Router();
const { getPlayer } = require("../controllers/player_controllers/getPlayer");
const {
  buyBuilding,
} = require("../controllers/player_controllers/buyBuilding");

// Landing page route
router.get("/player", getPlayer);
router.put("/player/buyBuilding", buyBuilding);

module.exports = router;
