
import Joi from "joi";

const authorSchema = Joi.object({
  password: Joi.string().min(6).max(10).required(),
  name: Joi.string().min(3).max(30).required(),
  email: Joi.string().email().required(),
  age: Joi.number().required(),
});

const quotesSchema = Joi.object({
  
  text: Joi.string().min(10).max(90).required(),
  
});

const validate = (schema) => {
  return (req, res, next) => {
    const r = schema.validate(req.body);
    if (r.error) {
      res.json(r.error);
    } else {
      next();
    }
  };
};

export { validate, authorSchema, quotesSchema };
