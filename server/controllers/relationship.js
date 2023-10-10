import Relationship from "../models/relationship.js";

export const getRelationships = async (req, res, next) => {
  try {
    const relationships = await Relationship.findAll({
      where: { followedUserId: req.query.followedUserId },
    });
    return res.status(200).json(relationships.map((relationship) => relationship.followerUserId));
  } catch (err) {
    next(err);
  }
};

export const addRelationship = async (req, res, next) => {
  try {
    await Relationship.create({
      followerUserId: req.user.id,
      followedUserId: req.body.userId,
    });
    return res.status(200).json("Following");
  } catch (err) {
    next(err);
  }
};

export const deleteRelationship = async (req, res, next) => {
  try {
    await Relationship.destroy({
      where: { followerUserId: req.user.id, followedUserId: req.query.userId },
    });
    return res.status(200).json("Unfollowed");
  } catch (err) {
    next(err);
  }
};
