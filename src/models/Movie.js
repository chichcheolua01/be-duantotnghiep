import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const movieSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    duration: Number,
    release_date: Date,
    rating: Number,
    poster: String,
    category_id: {
      type: mongoose.Types.ObjectId,
      ref: "Category",
    },
  },
  { timestamps: true, versionKey: false }
);

export default mongoose.model("Movie", movieSchema);
