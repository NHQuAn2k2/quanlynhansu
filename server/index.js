const express = require("express");
const cors = require("cors");
const app = express();
const port = 3001;
app.use(cors());
// nhan su
app.get("/chi-tiet-nhan-su/:tennhansu", (req, res) => {});
app.post("/them-nhan-su", (req, res) => {});
app.delete("/xoa-nhan-su/:id", (req, res) => {});
app.post("/sua-nhan-su/:id", (req, res) => {});
//--------------------------------------------
// phong ban
app.get("/chi-tiet-phong-ban/:tenphongban", (req, res) => {});
app.post("/them-phong-ban", (req, res) => {});
app.delete("/xoa-phong-ban/:id", (req, res) => {});
app.post("/:tenphongban/them-nhan-su", (req, res) => {});
app.delete("/:tenphongban/xoa-nhan-su", (req, res) => {});
//--------------------------------------------
// khoa
app.get("/chi-tiet-khoa/:tenkhoa", (req, res) => {});
app.post("/them-khoa", (req, res) => {});
app.delete("/xoa-khoa/:id", (req, res) => {});
app.post("/:tenkhoa/them-nhan-su", (req, res) => {});
app.delete("/:tenkhoa/xoa-nhan-su", (req, res) => {});
// cong tac
app.post("/them-cong-tac", (req, res) => {});
app.delete("/xoa-cong-tac/:id", (req, res) => {});
//---------------------------------------------
app.listen(port, () => {
  console.log(`server running on port: ${port}`);
});
