'use client'
import React from "react";
import useCoinsStore from "@/store/CoinsStore";

const BaseCoinList = function () {
    const coins = useCoinsStore((state) => state.coins)
    const setBaseCoin = useCoinsStore((state) => state.setBaseCoin)
    const baseCoin = useCoinsStore((state) => state.baseCoin)

    const coinsList = coins?.map((coin: any) => {
        const currentCoin = baseCoin?.name === coin.name
        return <button onClick={() => setBaseCoin(coin)} key={coin.id}
                       className={`flex border-t border-gray-200 flex-col sm:flex-row items-center gap-3 p-4 cursor-pointer w-full 
                             ${currentCoin ? 'bg-blue-200' : 'hover:bg-gray-100'}`}>
            <img
                className={'h-10 w-10'}
                src={coin.image}
                alt=""/>
            <span>{coin.name}</span>
        </button>
    })
    return (
        <div>
            {coinsList}
        </div>
    );
}
export default BaseCoinList;