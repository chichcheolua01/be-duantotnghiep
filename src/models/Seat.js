import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const seatSchema = new mongoose.Schema(
  {
    seat_number: Number,
    status: Boolean,
    price: Number,
    roomId: {
      type: mongoose.Types.ObjectId,
      ref: "Room",
    },
  },
  { timestamps: true, versionKey: false }
);

seatSchema.plugin(mongoosePaginate);

export default mongoose.model("Seat", seatSchema);
