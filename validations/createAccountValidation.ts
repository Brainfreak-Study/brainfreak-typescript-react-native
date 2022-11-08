import * as yup from "yup";

export const CreateAccountSchema = yup.object().shape({
    email: yup.string().email().required("Email is required"),
    password: yup.string().min(8).max(20).required("Password is required"),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref("password"), null], "Passwords must match")
        .required("Confirm Password is required"),
    name: yup.string().required("Name is required"),
    username: yup.string().required("Username is required"),
});
