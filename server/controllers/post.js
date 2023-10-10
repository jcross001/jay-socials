import Post from "../models/post.js";
import User from "../models/user.js";

export const getPosts = async (req, res, next) => {
  try {
    if (req.query.userId) {
      const posts = await Post.findAll({
        where: { userId: req.query.userId },
        include: [
          {
            model: User,
            attributes: ["id", "name", "profilePic"],
          },
        ],
        order: [["createdAt", "DESC"]],
      });
      if (!posts) {
        return res.status(500).json("No post found");
      }
      return res.status(200).json(posts);
    }
    const posts = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ["id", "name", "profilePic"],
        },
      ],
      order: [["createdAt", "DESC"]],
    });
    if (!posts) {
      return res.status(500).json("No post found");
    }
    return res.status(200).json(posts);

    // const user = await User.findByPk(posts.userId);
    // const result = posts.concat(user);
  } catch (err) {
    next(err);
  }
};

export const addPost = async (req, res, next) => {
  try {
    await Post.create({
      desc: req.body.desc,
      img: req.body.img,
      userId: req.user.id,
    });
    return res.status(200).json("Post Created");
  } catch (err) {
    next(err);
  }
};

export const deletePost = async (req, res, next) => {
  try {
    await Post.destroy({
      where: { id: req.params.id, userId: req.user.id },
    });
    return res.status(200).json("Post Deleted!");
  } catch (err) {
    next(err);
  }
};
