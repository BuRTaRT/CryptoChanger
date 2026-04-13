'use client'
import useCoinsStore, {Coin} from "@/store/CoinsStore";
import {ReactNode, useEffect} from "react";

interface Props {
    coins: Coin[],
    children: ReactNode;
}

const CoinsProvider = function ({coins, children}: Props) {
    const setCoins = useCoinsStore(s => s.setCoins)
    useEffect(() => {
        setCoins(coins)
    }, [coins])
    return children
}
export default CoinsProvider;