import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
    try {
        const data = await request.json();

        const order = await prisma.exchangeOrder.create({
            data: {
                userId: data.userId,
                email: data.email,
                wallet: data.wallet,
                baseAmount: data.baseAmount,
                targetAmount: data.targetAmount,
                baseCoin: data.baseCoin,
                targetCoin: data.targetCoin,
                status: 'AWAITING_PAYMENT'
            }
        });

        return NextResponse.json({ success: true, order });
    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json({ success: false, error: 'Ошибка при создании заявки' }, { status: 500 });
    }
}