'use client'
import {ExchangeOrder} from "@/Interfaces";
import {useRouter} from "next/navigation";
import {Coin} from "@/store/CoinsStore";

interface Props {
    order: ExchangeOrder,
    baseCoin?:Coin,
    targetCoin?:Coin

}

const singleOrder = function ({order, baseCoin, targetCoin}: Props) {
    const router = useRouter();
    return (
        <li className={'w-full'}>
            <button
                className={'flex flex-col gap-3 lg:grid lg:grid-cols-[2fr_1fr_2fr_1fr] w-full items-center shadow-md text-center p-5 rounded-sm bg-white cursor-pointer hover:bg-green-100'}
                onClick={() => router.push(`/order/${order.id}`)}>
                <div>ID заявки: {order.id}</div>
                <div className={'flex gap-2'}>
                    <img className={'w-8 h-8'} src={baseCoin?.image} alt="baseCoin"/>
                    <span>{"-->"}</span>
                    <img className={'w-8 h-8'} src={targetCoin?.image} alt="targetCoin"/></div>
                <div className={'flex gap-2'}>
                    <div>{order.baseAmount} {order.baseCoin}</div>
                    <div>to</div>
                    <div>{order.targetAmount} {order.targetCoin}</div>
                </div>
                <div>{order.status}</div>
            </button>
        </li>
    );
}
export default singleOrder;