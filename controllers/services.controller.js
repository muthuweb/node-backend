const { validationResult } = require("express-validator");
const fs = require("fs");

const httpError = require("../models/http-error");
const Service = require("../models/service");

const getService = async (req, res, next) => {
  let data;

  try {
    data = await Service.find({});
  } catch (err) {
    const error = new httpError("Could not find the service for this id", 500);
    return error;
  }
  res.json(data.map((service) => service.toObject({ getters: true })));
};

const getServiceById = async (req, res, next) => {
  const paramId = req.params.pid;
  let data;

  try {
    data = await Service.findById(paramId);
  } catch (err) {
    const error = new httpError("Could not find the service for this id", 500);
    return error;
  }

  if (!data) {
    const error = httpError("Could not find the service for this id", 404);
    //Return next error if the function is async
    return next(error);
  }

  res.json({
    data: data.toObject({ getters: true }), // => toObject.getter will display the id with string
  });
};

const createService = async (req, res, next) => {
  //This will look into the request, if found any error or invalid then response the error
  const errors = validationResult(req);

  //js destructuring of body ojb
  const { title, icon, description } = req.body;

  //errors.isEmpty means no error in the req,
  //!errors.isEmpty means there is an error, if then print an error msg
  if (!errors.isEmpty()) {
    console.log(errors.isEmpty());
    throw new httpError("Invalid input passed, please check your data", 422);
  }

  const createdService = new Service({
    title,
    icon,
    image: req.file.path,
    description,
  });

  try {
    await createdService.save();
  } catch (err) {
    const error = new httpError(
      "Creating service failed, please tray again",
      500
    );
    return next(error);
  }

  // const result = await createdService.save();

  //DUMMY_DATA.push(createdService);

  //201 newly created
  res.status(201).json({ service: createdService });
};

const updateService = async (req, res, next) => {
  //This will look into the request, if found any error or invalid then response the error
  const errors = validationResult(req);

  //errors.isEmpty means no error in the req,
  //!errors.isEmpty means there is an error, if then print an error msg
  if (!errors.isEmpty()) {
    throw new httpError("Invalid input passed, please check your data", 422);
  }

  const { title, icon, image, description } = req.body;
  const serviceId = req.params.pid;
  let updatedService;

  //const updatedService = DUMMY_DATA.find((list) => list.id === serviceId);

  // updating directly way, eg like updatedService.title is immediately change in the current data
  //so update it as immutable way

  //First copy the data by creating new obj with spread operator
  // const updatedService = { ...DUMMY_DATA.find((list) => list.id == serviceId) };

  //get the index of updating new data
  // const updateIndex = DUMMY_DATA.findIndex((list) => list.id == serviceId);

  try {
    updatedService = await Service.findById(serviceId);
  } catch (err) {
    const error = new httpError(
      "Something went wrong, Updating service failed",
      500
    );
    return next(error);
  }

  updatedService.title = title;
  updatedService.icon = icon;
  updatedService.image = image;
  updatedService.description = description;

  //Now update the data in the array with the actual index
  //DUMMY_DATA[updateIndex] = updatedService;

  try {
    await updatedService.save();
  } catch (err) {
    const error = new httpError(
      "Something went wrong, Updating service failed",
      500
    );
    return next(error);
  }

  //200 updated
  res.status(200).json({ service: updatedSocial.toObject({ getters: true }) });
};

const deleteService = async (req, res, next) => {
  const serviceId = req.params.pid;
  let data;

  /* if (!DUMMY_DATA.filter((list) => list.id != serviceId)) {
    throw new httpError("Could not find that id", 404);
  }
 */
  //Old way of delete data is
  //get the index of updating new data
  /*  const dataIndex = DUMMY_DATA.findIndex((list) => list.id == serviceId);
  if (dataIndex > -1) { // only splice array when item is found
    DUMMY_DATA.splice(dataIndex, 1); // 2nd parameter (1) means remove one item only
  } */

  //New way of delete with filter
  //The filter method is return a new array, and we override with the existing array
  // DUMMY_DATA = DUMMY_DATA.filter((list) => list.id != serviceId);
  try {
    data = await Service.findById(serviceId);
    // data = await Service.findById(serviceId);
  } catch (err) {
    const error = new httpError(
      "Something went wrong, deleting service failed",
      500
    );
    return next(error);
  }

  try {
    await data.deleteOne();
    //Delete the image too from stored disk
    fs.unlink(data.image, (err) => {
      console.log(err);
    });
  } catch (err) {
    console.log(data);
    const error = new httpError(
      "Something went wrong, deleting not happened",
      500
    );
    return next(error);
  }

  //200 updated / deleted
  res.status(200).json({ Message: "The service has been deleted" });
};

exports.getService = getService;
exports.getServiceById = getServiceById;
exports.createService = createService;
exports.updateService = updateService;
exports.deleteService = deleteService;
