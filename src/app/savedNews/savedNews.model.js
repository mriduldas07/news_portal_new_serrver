const { Schema, model } = require("mongoose");

const savedNewsSchema = new Schema(
  {
    savedBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    savedNews: {
      type: Schema.Types.ObjectId,
      ref: "News",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports.SavedNews = model("SavedNews", savedNewsSchema);
