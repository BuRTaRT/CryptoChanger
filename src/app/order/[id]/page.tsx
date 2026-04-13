'use client'

import AwaitingPayment from "@/app/order/components/AwaitingPayment";
import AwaitingFunds from "@/app/order/components/AwaitngFunds";
import {useParams} from "next/navigation";
import {useEffect, useState} from "react";
import fetchOrder from "@/services/fetchOrder";
import {ExchangeOrder} from "@/Interfaces";


export default function OrderPage() {
    const {id} = useParams();
    const [order, setOrder] = useState<ExchangeOrder | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        fetchOrder(id, setOrder, setIsLoading)
        const interval = setInterval(() => {
            fetchOrder(id, setOrder, setIsLoading)
        }, 3000)
        return () => clearInterval(interval)
    }, [])

    if (!order) {
        return <div className={'mt-20'}>Загрузка</div>;
    }
    return (
        <div className={'pl-5 pr-5'}>
            <div className={'mt-10 mb-10 bg-white m-auto rounded-md xl:min-w-6xl p-5 shadow-sm'}>
                {order.status === 'AWAITING_PAYMENT' ?
                    <AwaitingPayment order={order}/>
                    : <AwaitingFunds order={order}/>}
            </div>
        </div>
    );
}