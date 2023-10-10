import Likes from "../models/likes.js";

export const getLikes = async (req, res, next) => {
  try {
    const likes = await Likes.findAll({
      where: { postId: req.query.postId },
    });
    return res.status(200).json(likes.map((like) => like.userId));
  } catch (err) {
    next(err);
  }
};

export const addLike = async (req, res, next) => {
  try {
    await Likes.create({ userId: req.user.id, postId: req.body.postId });
    return res.status(200).json("Post Liked");
  } catch (err) {
    next(err);
  }
};

export const deleteLike = async (req, res, next) => {
    try {
        await Likes.destroy({where: {userId: req.user.id, postId: req.query.postId}});
        return res.status(200).json("Post Unliked");
    } catch (err) {
        next(err);
    }
};
