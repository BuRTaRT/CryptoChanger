'use client'
import React from "react";

import useCoinsStore, {Coin} from "@/store/CoinsStore";
import {useRouter} from "next/navigation";
import {getRate} from "@/helpers/getRate";
import toMaxFixed from "@/helpers/toMaxFixed";

interface Props {
    coin: Coin,
    reserve:number
}

const SingleCoin = function ({coin,reserve}: Props) {
    const baseCoin = useCoinsStore((state) => state.baseCoin)
    const setTargetCoin = useCoinsStore(s => s.setTargetCoin)
    const router = useRouter();
    let rate;

    if (coin && baseCoin) {
        rate = getRate(baseCoin, coin)
    }
    return (
        <button onClick={() => {
            setTargetCoin(coin);
            router.push('/exchange')
        }}
                className={`sm:grid sm:grid-cols-3 flex flex-col text-center md:flex-row border-t items-center border-gray-200 gap-3 sm:gap-30 p-4 pl-4 cursor-pointer w-full hover:bg-green-300/20`}>
            <div className='flex items-center gap-3'>
                <img
                    className={'h-10 w-10'}
                    src={coin?.image}
                    alt=""/>
                <span className={''}>{coin?.name}</span>
            </div>
            <span className={'flex-1 sm:text-left'}>{`${rate && toMaxFixed(rate, 6)}`}</span>
            <div className='flex items-center gap-3 justify-self-end'>
                <span className={'order-1'}>{reserve}</span>
            </div>
        </button>
    );
}
export default SingleCoin;