const { Schema, model } = require("mongoose");

const newsSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    details: {
      type: String,
      required: true,
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    image_url: {
      type: String,
      required: true,
    },
    thumbnail_url: {
      type: String,
      required: true,
    },
    total_view: {
      type: Number,
      default: 0,
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    rating: {
      number: {
        type: Number,
      },
      badge: {
        type: String,
        enum: ["Excellent"],
      },
    },

    others_info: {
      is_todays_pick: {
        type: Boolean,
        default: false,
      },
      is_trending: {
        type: Boolean,
        default: false,
      },
    },
  },
  {
    timestamps: true,
  }
);

module.exports.News = model("News", newsSchema);
