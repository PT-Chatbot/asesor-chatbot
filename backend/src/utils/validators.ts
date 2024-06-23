import { NextFunction, Request, Response } from "express";
import { body, ValidationChain, validationResult } from "express-validator";

export const validate = (validations: ValidationChain[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    for (let validation of validations) {
      const result = await validation.run(req);
      if (!result.isEmpty()) {
        break;
      }
    }
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }
    return res.status(422).json({ errors: errors.array() });
  };
};

export const validadorLogin = [
  body("email")
    .trim()
    .isEmail()
    .withMessage("El correo electrónico es requerido"),
  body("password")
    .trim()
    .isLength({ min: 6 })
    .withMessage("La contraseña debe contener al menos 6 caracteres"),
];

export const validadorRegistro = [
  body("name").notEmpty().withMessage("El nombre es requerido"),
  ...validadorLogin,
];

export const validadorCompletarChat = [
  body("message").notEmpty().withMessage("El mensaje es requerido"),
];
