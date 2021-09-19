const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// vartotojo schema
const playerSchema = new Schema({
  nickname: { type: String },

  password: { type: String },

  wood: { type: String },

  clay: { type: String },

  iron: { type: String },

  building: { type: Number },

  grid: [
    new Schema({
      name: { type: String },
      building: { type: String },
      buildingLevel: { type: Number },
    }),
  ],
});

module.exports = {
  Player: mongoose.model("Player", playerSchema),
  playerSchema: playerSchema,
};
