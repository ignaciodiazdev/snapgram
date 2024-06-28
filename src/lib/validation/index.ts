import * as z from 'zod'

export const SignupValidation = z.object({
    name: z.string().min(2, { message: 'Muy corto' }),
    username: z.string().min(2,{ message: 'Muy Corto' }),
    email: z.string().email(),
    password: z.string().min(8, { message: 'La contraseña debe tener más de 8 caracteres'})
})
  