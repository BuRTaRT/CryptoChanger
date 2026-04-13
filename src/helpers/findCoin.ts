import {Coin} from "@/store/CoinsStore";

const findCoin = (coins: Coin[] | null, coinName: string) => {
    return coins?.find((coin) => coin.name === coinName);
};
export default findCoin;