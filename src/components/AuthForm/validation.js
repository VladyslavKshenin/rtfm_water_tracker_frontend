import * as yup from 'yup';

export const loginSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(8).max(64).required()
}) 

export const registerSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(8).max(64).required(),
    passwordRepeat: yup.string().min(8).max(64).required()
})