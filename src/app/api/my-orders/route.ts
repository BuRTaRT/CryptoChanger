import {prisma} from '@/lib/prisma';
import {NextResponse} from 'next/server';

export async function GET(request: Request) {
    const {searchParams} = new URL(request.url);
    const userId = searchParams.get('userId');

    if (!userId) {
        return NextResponse.json({error: 'No userId'}, {status: 400});
    }

    const orders = await prisma.exchangeOrder.findMany({
        where: {userId: userId}
    });

    return NextResponse.json(orders);
}