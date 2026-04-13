'use client'
import React from "react";
import SingleCoin from "@/app/components/SingleCoin";
import useCoinsStore from "@/store/CoinsStore";
import coinsReserve from "@/coinsData/coinsReserve";


const TargetCoinsTable = function () {
    const coins = useCoinsStore((state) => state.coins);
    const baseCoin = useCoinsStore((state) => state.baseCoin);


    const filteredCoins = coins?.filter((coin) => coin.name !== baseCoin?.name)

    const filteredCoinsList = filteredCoins?.map((coin) => {
        const reserve:number = coinsReserve[coin.id as keyof typeof coinsReserve];
        return <SingleCoin key={coin.name} reserve={reserve} coin={coin}/>
    })
    return (
        <div className='bg-white rounded-xl shadow-md'>
            <div className={'flex p-4 gap-30 text-gray-500 '}>
                <div className={'text-center flex-1 md:text-left'}>Вы получаете</div>
                <p className={'text-center flex-1 md:text-left hidden sm:block '}>Курс</p>
                <p className={'text-right flex-1 hidden sm:block'}>Резерв</p>
            </div>
            {filteredCoinsList}</div>
    );
}
export default TargetCoinsTable;