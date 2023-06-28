import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const showTimeSchema = new mongoose.Schema(
  {
    movies: [{ type: mongoose.Types.ObjectId, ref: "Movie" }],
    rooms: [{ type: mongoose.Types.ObjectId, ref: "Room" }],
    date: Date,
    time: String,
  },
  { timestamps: true, versionKey: false }
);

export default mongoose.model("ShowTime", showTimeSchema);
