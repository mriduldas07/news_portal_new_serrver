const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["editor", "reporter", "reader"],
      default: "reader",
    },
    image: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports.User = model("User", userSchema);
