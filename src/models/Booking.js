import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const bookingSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    showtime_id: {
      type: mongoose.Types.ObjectId,
      ref: "ShowTime",
    },
    seat_id: [{ type: mongoose.Types.ObjectId, ref: "Seat" }],
    total_amount: Number,
  },
  { timestamps: true, versionKey: false }
);

export default mongoose.model("Booking", bookingSchema);
