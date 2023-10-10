import "dotenv/config";
import express from "express";
const app = express();
import cookieParser from "cookie-parser";
import cors from "cors";
import multer from "multer";

import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import postRoutes from "./routes/posts.js";
import commentRoutes from "./routes/comments.js";
import likeRoutes from "./routes/likes.js";
import relationshipRoutes from "./routes/relationships.js";

import sequelize from "./connect.js";
import User from "./models/user.js";
import Post from "./models/post.js";
import Comment from "./models/comment.js";
import Stories from "./models/Stories.js";
import Likes from "./models/likes.js";
import Relationship from "./models/relationship.js";

//Middleware
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", true);
  // res.setHeader("Access-Control-Allow-Origin", true);
  // res.setHeader(
  //   "Access-Control-Allow-Methods",
  //   "GET, POST, PUT, PATCH, DELETE"
  // );
  // res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

//multer to store files
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../client/public/upload");
  },
  filename: function (req, file, cb) {
    // const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage: storage });

app.post("/api/upload", upload.single("file"), (req, res) => {
  const file = req.file;
  res.status(200).json(file.filename);
});

//Routes Middleware
app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/users", userRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/likes", likeRoutes);
app.use("/api/relationships", relationshipRoutes);

// Error Handler MW
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Something went wrong";
  return res.status(status).json({
    success: false,
    status,
    message,
  });
});

// Data Model Relationships
User.hasMany(Post, { onUpdate: "CASCADE", onDelete: "CASCADE" });
Post.belongsTo(User);
User.hasMany(Comment, { onUpdate: "CASCADE", onDelete: "CASCADE" });
Comment.belongsTo(User);
Post.hasMany(Comment, { onUpdate: "CASCADE", onDelete: "CASCADE" });
Comment.belongsTo(Post);
User.hasMany(Stories, { onUpdate: "CASCADE", onDelete: "CASCADE" });
Stories.belongsTo(User);
User.hasMany(Likes, { onUpdate: "CASCADE", onDelete: "CASCADE" });
Likes.belongsTo(User);
Post.hasMany(Likes, { onUpdate: "CASCADE", onDelete: "CASCADE" });
Likes.belongsTo(Post);

sequelize.sync().then(() => {
  app.listen(8800, () => {
    console.log("Server Working");
  });
});
