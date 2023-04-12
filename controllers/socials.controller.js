const { validationResult } = require("express-validator");

const httpError = require("../models/http-error");
const Social = require("../models/social");

const getSocial = async (req, res, next) => {
  let data;

  try {
    data = await Social.find({});
  } catch (err) {
    const error = new httpError("Could not find the social for this id", 500);
    return error;
  }
  res.json(data.map((social) => social.toObject({ getters: true })));
};

const getSocialById = async (req, res, next) => {
  const paramId = req.params.pid;
  let data;

  try {
    data = await Social.findById(paramId);
  } catch (err) {
    const error = new httpError("Could not find the social for this id", 500);
    return error;
  }

  if (!data) {
    const error = httpError("Could not find the social for this id", 404);
    //Return next error if the function is async
    return next(error);
  }

  res.json({
    data: data.toObject({ getters: true }), // => toObject.getter will display the id with string
  });
};

const createSocial = async (req, res, next) => {
  //This will look into the request, if found any error or invalid then response the error
  const errors = validationResult(req);

  //errors.isEmpty means no error in the req,
  //!errors.isEmpty means there is an error, if then print an error msg
  if (!errors.isEmpty()) {
    console.log(errors.isEmpty());
    throw new httpError("Invalid input passed, please check your data", 422);
  }

  //js destructuring of body ojb
  const { title, icon, url } = req.body;
  const createdSocial = new Social({
    title,
    icon,
    url,
  });

  try {
    await createdSocial.save();
  } catch (err) {
    const error = new httpError(
      "Creating Social failed, please tray again",
      500
    );
    return next(error);
  }

  //201 newly created
  res.status(201).json({ social: createdSocial });
};

const updateSocial = async (req, res, next) => {
  //This will look into the request, if found any error or invalid then response the error
  const errors = validationResult(req);

  //errors.isEmpty means no error in the req,
  //!errors.isEmpty means there is an error, if then print an error msg
  if (!errors.isEmpty()) {
    throw new httpError("Invalid input passed, please check your data", 422);
  }

  const { title, icon, url } = req.body;
  const socialId = req.params.pid;
  let updatedSocial;

  try {
    updatedSocial = await Social.findById(socialId);
  } catch (err) {
    const error = new httpError(
      "Something went wrong, Updating social failed",
      500
    );
    return next(error);
  }

  updatedSocial.title = title;
  updatedSocial.icon = icon;
  updatedSocial.url = url;

  try {
    await updatedSocial.save();
  } catch (err) {
    const error = new httpError(
      "Something went wrong, Updating social failed",
      500
    );
    return next(error);
  }

  //200 updated
  res.status(200).json({ social: updatedSocial.toObject({ getters: true }) });
};

const deleteSocial = async (req, res, next) => {
  const socialId = req.params.pid;
  let data;

  try {
    data = await Social.findById(socialId);
  } catch (err) {
    const error = new httpError(
      "Something went wrong, deleting social failed",
      500
    );
    return next(error);
  }

  try {
    await data.deleteOne();
  } catch (err) {
    console.log(data);
    const error = new httpError(
      "Something went wrong, deleting not happened",
      500
    );
    return next(error);
  }

  //200 updated / deleted
  res.status(200).json({ Message: "The social has been deleted" });
};

exports.getSocial = getSocial;
exports.getSocialById = getSocialById;
exports.createSocial = createSocial;
exports.updateSocial = updateSocial;
exports.deleteSocial = deleteSocial;
