import { z } from "zod";

export const signupValidation = z.object({
    givenName: z.string({ message: "Given Name required" }).min(2, { message: "Given Name should be at least 2 characters" }),
    lastName: z.string({ message: "Last Name required" }).min(2, { message: "Last Name should be at least 2 characters" }),
    email: z.string({ message: "Email required" }).email({ message: "Invalid Email Format" }),
    password: z.string({ message: "Password required" }).min(8, { message: "Password should be at least 8 characters" }),
    confirmPassword: z.string({ message: "Password Confirmation required" })
}).refine(({ confirmPassword, password }) => confirmPassword === password, { message: "Password do not match", path: ["confirmPassword"] });

export const loginValidation = z.object({
    email: z.string({ message: "Email required" }).email({ message: "Invalid Email Format" }),
    password: z.string({ message: "Password required" }).min(8, { message: "Password should be at least 8 characters" }),
});