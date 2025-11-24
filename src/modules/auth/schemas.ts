import  z  from "zod";

export const loginSchema = z.object({
    email: z.string().email(), 
    password: z.string(), 
    
});

export const  registerSchema = z.object({
                email: z.string().email(), 
                password: z.string(), 
                username: z.string()
                            .min(3, "Username must be at least 3 characters")
                            .max(63, "Username must be at most 63 characters")
                            .regex(
                                /^[a-z0-9][a-z0-9-]*[a-z0-9]$/, 
                                "Username must be only lower alphanumeric characters"
                            )
                            .refine(
                                (val) => !val.includes("--"), 
                                "username cannot contain consecutive hyphons"
                            )
                            .transform((val) => val.toLowerCase()), 
            })

    