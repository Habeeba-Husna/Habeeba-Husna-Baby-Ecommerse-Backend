export const passwordValidator = [
    {
      validator: function (password) {
        return password.length >= 8; 
      },
      message: "Password must be at least 8 characters long.",
    },
    {
      validator: function (password) {
        return /[A-Z]/.test(password); 
      },
      message: "Password must contain at least one uppercase letter.",
    },
    {
      validator: function (password) {
        return /[0-9]/.test(password); 
      },
      message: "Password must contain at least one number.",
    },
  ];

// import Joi from 'joi';

// // Custom password validation function for Joi
// const passwordValidatorJoi = Joi.string()
//   .min(8)
//   .regex(/[A-Z]/)
//   .regex(/[0-9]/)
//   .message('Password must be at least 8 characters long, contain at least one uppercase letter, and one number.');

// const userValidationSchema = Joi.object({
//     username: Joi.string().required(),
//     email: Joi.string().email().required(),
//     password: passwordValidatorJoi.required(),
//     name: Joi.string().required(),
//     isAdmin: Joi.boolean().required(),
//     isBlock: Joi.boolean().required()
// });

// export const validateUser = (user) => {
//     return userValidationSchema.validate(user);
// };
