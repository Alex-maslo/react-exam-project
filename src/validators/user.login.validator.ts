import Joi from "joi";

export const userLoginValidator = Joi.object({
  userName: Joi.string().required(),
  userPassword: Joi.string().required(),
});
