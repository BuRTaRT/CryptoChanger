import {create} from "zustand";

export interface Coin {
    name: string,
    image: string,
    id: string,
    current_price: number
}

interface CoinsStore {
    coins: Coin[] | null,
    baseCoin: Coin | null,
    targetCoin: Coin | null,
    setCoins: (coins: Coin[]) => void,
    setBaseCoin: (coin: Coin | null) => void,
    setTargetCoin: (coin: Coin | null) => void,
    isLoading: boolean
}

const useCoinsStore = create<CoinsStore>((set, get) => ({
        coins: null,
        baseCoin: null,
        targetCoin: null,
        isLoading: true,
        setBaseCoin: (coin: Coin | null) => {
            set({baseCoin: coin})
        },
        setTargetCoin: (coin: Coin | null) => {
            set({targetCoin: coin})
        },
        setCoins: (coins) => {
            set({coins: coins, baseCoin: coins[0]})
            set({coins: coins, targetCoin: coins[1]})
            set({isLoading: false})
        }
    }
))

export default useCoinsStore;
