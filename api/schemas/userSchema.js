const Joi = require('joi');

const id = Joi.string().uuid();
const name = Joi.string().min(3).max(15);
const surname = Joi.string().min(3).max(15);
const image = Joi.string().uri();
const email = Joi.string().email()

const createUserSchema = Joi.object({
  name: name.required(),
  surname: surname.required(),
  image: image.required(),
  email: email.required(),
});

const updateUserSchema = Joi.object({
  name: name,
  surname: surname,
  image: image,
  email: email
});

const getUserSchema = Joi.object({
  id: id.required(),
});

modules.exports = { createUserSchema, updateUserSchema, getUserSchema };
