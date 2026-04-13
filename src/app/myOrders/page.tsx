'use client'

import {useEffect, useState} from "react";
import useCoinsStore from "@/store/CoinsStore";
import fetchOrders from "@/services/fetchOrders";
import {ExchangeOrder} from "@/Interfaces";
import PageHeader from "@/ui/PageHeader";
import findCoin from "@/helpers/findCoin";
import SingleOrder from "@/app/myOrders/components/SingleOrder";


const MyOrders = function () {
    const coins = useCoinsStore(s => s.coins)
    const [isLoading, setIsLoading] = useState(true)
    const [orders, setOrders] = useState<ExchangeOrder[]>([]);

    useEffect(() => {
        const userId = localStorage.getItem('exchangeUserId');
        fetchOrders(`/api/my-orders?userId=${userId}`, setOrders, setIsLoading)
        const interval = setInterval(() => {
            fetchOrders(`/api/my-orders?userId=${userId}`, setOrders, setIsLoading)
        }, 5000);
        return () => {
            clearInterval(interval)
        }
    }, [])

    const content = [...orders].reverse().map((order) => {
        const baseCoin = findCoin(coins, order.baseCoin);
        const targetCoin = findCoin(coins, order.targetCoin);
        return <SingleOrder key={order.id} order={order} baseCoin={baseCoin} targetCoin={targetCoin}/>
    })
    return (
        <div className={'mt-10'}>
            <PageHeader>Мои заявки:</PageHeader>
            <div className={'xl:min-w-6xl mt-5 mb-5 flex flex-col gap-3'}>{isLoading ? <p>Загрузка</p> :
                <ul className={'flex flex-col w-full gap-5 list-decimal'}>{content}</ul>}</div>
        </div>
    );
}
export default MyOrders;