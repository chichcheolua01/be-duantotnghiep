import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const roomSchema = new mongoose.Schema(
  {
    name: String,
    capacity: Number,
    screen_size: Number,
    audio_system: String,
    seats: [{ type: mongoose.Types.ObjectId, ref: "Seat" }],
  },
  { timestamps: true, versionKey: false }
);

export default mongoose.model("Room", roomSchema);
