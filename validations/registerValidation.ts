import * as yup from "yup";

export const EmailValidation = yup.object().shape({
    email: yup.string().email().required("Email is required"),
});
