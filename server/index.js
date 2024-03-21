const express = require("express");
const cors = require("cors");
const app = express();
const jwt = require("jsonwebtoken");
const mysql = require("mysql2");
const port = 3001;
app.use(cors(), express.json());
// mysql------------------------------
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "quanlynhansu",
});
con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});
//-------------------------------------
// dang nhap
app.post("/login", (req, res) => {
  const { username, email, password } = req.body;
  con.query(
    "select * from nguoidung where username = ? and email = ?",
    [username, email],
    (err, result) => {
      if (err) throw err;
      if (result.length === 0) {
        return res.status(400).json({ message: "thong tin sai!" });
      } else {
        const compare = password === result[0].matkhau;
        if (!compare)
          return res.status(400).json({ message: "mat khau khong dung!" });
        const token = jwt.sign(
          { manguoidung: result[0].manguoidung, username: result[0].username },
          "jwtjsonwebtoken",
          { expiresIn: "1h" }
        );
        return res
          .status(200)
          .json({ message: "dang nhap thanh cong!", token });
      }
    }
  );
});
//--------------------------------------------
// nhan su
app.get("/danh-sach-nhan-vien", (req, res) => {
  con.query("select * from nhanvien", (err, result) => {
    if (err) throw err;
    if (result.length === 0) {
      return res.status(200).json({ data: [] });
    } else {
      return res.status(200).json({ data: result });
    }
  });
});
app.get("/chi-tiet-nhan-vien/:id", (req, res) => {
  const { id } = req.params;
  con.query(
    "select * from nhanvien where manhanvien = ?",
    [id],
    (err, result) => {
      if (err) throw err;
      if (result.length === 0) {
        return res.status(400).json({ message: "nhan vien khong ton tai!" });
      } else {
        return res.status(200).json({ data: result[0] });
      }
    }
  );
});
app.post("/them-nhan-vien", (req, res) => {
  const {
    hoten,
    namsinh,
    gioitinh,
    cccd,
    diachi,
    dienthoai,
    email,
    vitri,
    bangcap,
    trinhdohocvan,
    kinhnghiem,
    trinhdochuyenmon,
    donvi,
    linhvuc,
  } = req.body;
  con.query(
    "insert into nhanvien (hoten, namsinh, gioitinh, cccd, diachi, dienthoai, email, vitri, bangcap, trinhdohocvan, kinhnghiem, trinhdochuyenmon, donvi, linhvuc) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
    [
      hoten,
      namsinh,
      gioitinh,
      cccd,
      diachi,
      dienthoai,
      email,
      vitri,
      bangcap,
      trinhdohocvan,
      kinhnghiem,
      trinhdochuyenmon,
      donvi,
      linhvuc,
    ],
    (err, result) => {
      if (err) throw err;
      return res.status(200).json({ message: "them thanh cong" });
    }
  );
});
app.post("/xoa-nhan-vien/:id", (req, res) => {
  const { id } = req.params;
  con.query(
    "delete from nhanvien where manhanvien = ?",
    [id],
    (err, result) => {
      if (err) throw err;
      return res.status(200).json({ message: "xoa thanh cong!" });
    }
  );
});
app.post("/sua-nhan-vien/:id", (req, res) => {
  const {
    hoten,
    namsinh,
    gioitinh,
    cccd,
    diachi,
    dienthoai,
    email,
    vitri,
    bangcap,
    trinhdohocvan,
    kinhnghiem,
    trinhdochuyenmon,
    donvi,
    linhvuc,
  } = req.body;
  const { id } = req.params;
  con.query(
    "update nhanvien set hoten = ?, namsinh = ?, gioitinh = ?, cccd = ?, diachi = ?, dienthoai = ?, email = ?, vitri = ?, bangcap = ?, trinhdohocvan = ?, kinhnghiem = ?, trinhdochuyenmon = ?, donvi = ?, linhvuc = ? where manhanvien = ?",
    [
      hoten,
      namsinh,
      gioitinh,
      cccd,
      diachi,
      dienthoai,
      email,
      vitri,
      bangcap,
      trinhdohocvan,
      kinhnghiem,
      trinhdochuyenmon,
      donvi,
      linhvuc,
      id,
    ],
    (err, result) => {
      if (err) throw err;
      return res.status(200).json({ message: "sua thanh cong!" });
    }
  );
});
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
