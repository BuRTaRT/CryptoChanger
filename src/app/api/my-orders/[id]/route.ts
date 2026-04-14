import {prisma} from '@/lib/prisma';
import {NextResponse} from 'next/server';


export async function GET(request: Request, {params}: { params: Promise<{ id: string }> }) {
    const {id: userId} = await params;


    if (!userId) {
        return NextResponse.json({error: 'No userId'}, {status: 400});
    }

    const orders = await prisma.exchangeOrder.findMany({
        where: {userId: userId}
    });

    return NextResponse.json(orders);
}