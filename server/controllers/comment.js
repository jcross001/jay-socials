import Comment from "../models/comment.js";
import User from "../models/user.js";

export const getComments = async (req, res, next) => {
  try {
    const comments = await Comment.findAll({
      where: { postId: req.query.postId },
      include: [
        {
          model: User,
          attributes: ["id", "name", "profilePic"],
        },
      ],
      order: [["createdAt", "DESC"]],
    });
    return res.status(200).json(comments);
  } catch (err) {
    next(err);
  }
};

export const addComment = async (req, res, next) => {
  try {
    await Comment.create({
      desc: req.body.desc,
      userId: req.user.id,
      postId: req.body.postId,
    });
    return res.status(200).json("Comment has been created.")
  } catch (err) {
    next(err);
  }
};
