'use client'
import useCoinsStore from "@/store/CoinsStore";
import findCoin from "@/helpers/findCoin";

const OrderInfo = function ({order}: any) {
    const coins = useCoinsStore(s => s.coins);
    const baseCoin = findCoin(coins, order.baseCoin)
    const targetCoin = findCoin(coins, order.targetCoin)
    return (
        <div
            className={'flex flex-col md:flex-row items-center mt-5 p-10 gap-3 justify-center items-center border rounded-sm  border-solid border-gray-200'}>
            <div
                className={'flex text-right flex-col'}>
                <p>
                    Вы отправляете
                </p>
                <div className={'flex flex-col'}>
                    <div>{order.baseAmount} {order.baseCoin}</div>
                </div>
            </div>
            <img src={baseCoin?.image} className={'h-10'} alt=""/>
            <p>--</p>
            <img src={targetCoin?.image} className={'h-10'} alt=""/>
            <div
                className={'flex flex-col'}>
                <p>
                    Вы получаете
                </p>
                <div className={'flex flex-col'}>
                    <div>{order.targetAmount} {order.targetCoin}</div>
                </div>
            </div>

        </div>
    );
}
export default OrderInfo;