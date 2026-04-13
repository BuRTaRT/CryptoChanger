import {Coin} from "@/store/CoinsStore";


export const getRate = (baseCoin: Coin | null, targetCoin: Coin | null): number => {
    if (!baseCoin || !targetCoin) return 0;
    return baseCoin.current_price / targetCoin.current_price
}