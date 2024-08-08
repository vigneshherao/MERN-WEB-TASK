const Joi = require("joi");

//This is validation for user Sign Up

const userSignUpSchema = Joi.object({
  name: Joi.string().min(4).max(100).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(8).max(100).required(),
});


//This is validation for user Sign In

const userSignInSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).max(100).required(),
})



//exporting
module.exports = {
  userSignUpSchema,
  userSignInSchema
};
