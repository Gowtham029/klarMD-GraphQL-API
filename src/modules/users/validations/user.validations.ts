import Joi from "@hapi/joi";

export const createUserSchema: Joi.Schema = Joi.object().keys({
    name: Joi.string().required(),
    age: Joi.number()
        .min(0)
        .max(150)
        .required(),
});
