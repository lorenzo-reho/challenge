import { FieldError, UseFormRegister } from "react-hook-form";
import { z, ZodType } from "zod";

export type FormData = {
    name: string;
    surname: string;
    email: string;
    telephone: string;
};

export type ValidFieldNames =
  | "name"
  | "surname"
  | "email"
  | "telephone";
  
export type FormFieldProps = {
    register: UseFormRegister<FormData>;
    error: FieldError | undefined;
    labelText: string;
    name: ValidFieldNames;
};

export const FormSchema: ZodType<FormData> = z
  .object({
    name: z.string().nonempty({message: 'Name is required'}),
    surname: z.string().nonempty({message: 'Surname is required'}),  
    
    email: z.string()
    .email({message: 'Invalid email'}),

    telephone: z.string()
    .regex(/^\d+$/, {message: 'Invalid phone number'})
    .min(9, {message: 'Too short'})
    .max(11, {message: 'Too long'})
});
