import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const categorySchema = new mongoose.Schema(
  {
    genre: String,
    description: String,
    img: String,
    movies: [{ type: mongoose.Types.ObjectId, ref: "Movie" }],
  },
  { timestamps: true, versionKey: false }
);

export default mongoose.model("Category", categorySchema);
