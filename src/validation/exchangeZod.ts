import z from 'zod';

const exchangeSchema = z.object({
    baseCrypto:z.any(),
    targetCrypto:z.any(),
    email: z.email('Ввeдите корректный email'),
    targetCount: z.coerce.number().positive('введите корректное число'),
    baseCount: z.coerce.number().positive('введите корректное число'),
    wallet:z.string().max(20,'максимально 20 символов').min(5,'минимально 5 символов'),
    agree:z.boolean().refine(val=>val ===true,'примите условия соглашения')
});
export default exchangeSchema;