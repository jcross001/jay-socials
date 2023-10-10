import User from "../models/user.js";

export const getUser = async (req, res, next) => {
  const userId = req.params.userId;

  try {
    const user = await User.findByPk(userId, { raw: true });
    const { password, ...info } = user;
    return res.status(200).json(info);
  } catch (err) {
    next(err);
  }
};
export const updateUser = async (req, res, next) => {
  try {
    const user = await User.update(
      {
        name: req.body.name,
        city: req.body.city,
        website: req.body.website,
        profilePic: req.body.profilePic,
        coverPic: req.body.coverPic,
      },
      { where: { id: req.user.id } }
    );
    return res.status(200).json("updated!");
  } catch (err) {
    next(err);
  }
};
