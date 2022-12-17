import bcrypt from "bcryptjs";

const users = [
     {
          firstname: "Võ Tấn",
          lastname: "Thọ",
          email: "admin@example.com",
          avt: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
          password: bcrypt.hashSync("123456", 10),
          phonenumber: "0375583475",
          idRole: 1,
     },
     {
          firstname: "Nguyễn Văn",
          lastname: "Nhật",
          email: "user@example.com",
          avt: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
          password: bcrypt.hashSync("123456", 10),
          phonenumber: "0123495869",
          idRole: 3,
     },
     {
          firstname: "Đỗ Ngọc",
          lastname: "Sinh",
          email: "user1@example.com",
          avt: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
          password: bcrypt.hashSync("123456", 10),
          phonenumber: "01234952869",
          idRole: 3,
     },
];
export default users;
