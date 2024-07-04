const { Schema, model } = require("mongoose");

const userReadingSchema = new Schema(
  {
    readedBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    myNews: {
      type: Schema.Types.ObjectId,
      ref: "News",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports.UserReading = model("UserReading", userReadingSchema);
