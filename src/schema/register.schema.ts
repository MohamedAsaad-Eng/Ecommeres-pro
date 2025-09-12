import * as z from 'zod'

export const registerSchema = z.object({
    name: z.string().nonempty('this name is required').min(2,'min 2 char').max(10,'max 10 char'),
    email: z.string().nonempty('this email is required').email('not valid email'),
    password: z.string().nonempty('this password is required').regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/, 'not valis password'),
    rePassword: z.string().nonempty('this rePassword is required'),
    phone: z.string().nonempty('this phone is required').regex(/^(002)?(01)[0-25]\d{8}$/)
}).refine((data)=>data.password === data.rePassword,{
    path:['rePassword'],
    message:'not match'
})

export type registerSchemaForm = z.infer<typeof registerSchema>