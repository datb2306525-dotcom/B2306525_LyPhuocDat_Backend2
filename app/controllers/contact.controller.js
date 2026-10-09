export const create = (req, res) => {
  res.send({ message: "create handler" });
};

export const findAll = (req, res) => {
  res.send({ message: "findAll handler" });
};

export const findOne = (req, res) => {
  res.send({ message: "findOne handler" });
};

export const update = (req, res) => {
  res.send({ message: "update handler" });
};

export const deleteOne = (req, res) => {
  res.send({ message: "delete handler" });
};

export const deleteAll = (req, res) => {
  res.send({ message: "deleteAll handler" });
};

export const findAllFavorite = (req, res) => {
  res.send({ message: "findAllFavorite handler" });
};
