// id: ID rạp chiếu (primary key)
// name: Tên rạp chiếu
// address: Địa chỉ rạp chiếu
// created_at: Ngày tạo bản ghi
// updated_at: Ngày cập nhật thông tin

import mongoose from "mongoose";

const cinemaSchema = new mongoose.Schema(
  {
    name: String,
    address: String,
  },
  { timestamps: true, versionKey: false }
);

export default mongoose.model("Cinema", cinemaSchema);
