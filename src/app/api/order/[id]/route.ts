import {prisma} from "@/lib/prisma";
import {NextResponse} from "next/server";

export async function DELETE(
    request: Request,
    {params}: { params: Promise<{ id: string }> }
) {
    try {
        const {id} = await params;

        await prisma.exchangeOrder.delete({
            where: {id}
        });

        return NextResponse.json({success: true});
    } catch (error) {
        return NextResponse.json({error: 'Ошибка при удалении'}, {status: 500});
    }
}

export async function PATCH(
    request: Request,
    {params}: { params: Promise<{ id: string }> }
) {
    try {
        const {id} = await params;
        const {status} = await request.json();

        const updatedOrder = await prisma.exchangeOrder.update({
            where: {id},
            data: {status}
        });

        return NextResponse.json({success: true, order: updatedOrder});
    } catch (error) {
        return NextResponse.json(
            {error: 'Ошибка при обновлении статуса'},
            {status: 500}
        );
    }
}

export async function GET(
    request: Request,
    {params}: { params: Promise<{ id: string }> }
) {
    try {
        const {id} = await params;

        const order = await prisma.exchangeOrder.findUnique({
            where: {id}
        });

        if (!order) {
            return NextResponse.json({error: 'Order not found'}, {status: 404});
        }

        return NextResponse.json(order);
    } catch (error) {
        return NextResponse.json({error: 'Ошибка при получении ордера'}, {status: 500});
    }
}