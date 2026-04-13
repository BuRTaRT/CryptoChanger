'use client'
import wallets from "@/coinsData/coinWallets";
import {useRouter} from "next/navigation";
import {OrderStatus} from "@/Interfaces";
import updateStatus from "@/services/updateStatus"
import deleteOrder from "@/services/deleteOrder";

const OrderTransactionInfo = function ({order}: any) {
    const route = useRouter()
    const wallet = wallets[order.baseCoin.toLowerCase() as keyof typeof wallets];
    const cancelOrder = (id: string) => {
        const confirmed = confirm('Вы точно желаете отменить заявку на обмен?');
        if (confirmed) {
            deleteOrder(id);
            route.push('/myOrders')
        }
    }
    const updateOrder = (id: string, status: OrderStatus) => {
        const confirmed = confirm('Вы точно оплатили?');
        if (confirmed) {
            updateStatus(id, status)
        }
    }
    return (
        <div className={'mt-10'}>
            <div className={'flex flex-col md:grid md:grid-cols-[6fr_3fr] gap-10 '}>
                <div className={'flex flex-col gap-5 p-5 bg-green-500/10   rounded-sm'}>
                    <div className={'flex flex-col gap-2'}>
                        <p>Переведите</p>
                        <div className={'bg-[#3e3737] p-2 rounded-lg text-white'}>{order.baseAmount}</div>
                    </div>
                    <div className={'flex flex-col gap-2'}>
                        <p>На адрес {order?.baseCoin}</p>
                        <div style={{ wordBreak: 'break-all' }} className="bg-[#3e3737] max-w-full p-2 rounded-lg text-white break-words">
                            {wallet}
                        </div>
                    </div>
                    <div className={'bg-gray-200 rounded-sm p-5'}>
                        После осуществления перевода, обязательно нажмите кнопу "Я оплатил" и ожидайте завершения обмена
                    </div>
                </div>
                <div className={'bg-[#5E72DF] rounded-sm m-auto pt-10 pb-10 pl-20 pr-20'}>
                    <img src={`/qrs/bitcoinQR.png`} className={'h-full'} alt=""/>
                    <p className={'text-white mt-5 text-lg '}>QR код для оплаты</p>
                </div>
            </div>
            <div className={'flex flex-col lg:flex-row gap-5 justify-between mt-10'}>
                <button className={'text-2xl cursor-pointer bg-gray-200 lg:p-[5_175_5_175]'}
                        onClick={() => {
                            updateOrder(order.id, 'AWAITING_FUNDS')
                        }}>Я оплатил
                </button>
                <button className={'text-2xl cursor-pointer bg-gray-200 lg:p-[5_175_5_175]'}
                        onClick={() => {
                            cancelOrder(order.id);
                        }}
                >Отменить
                </button>
            </div>
        </div>
    );
}
export default OrderTransactionInfo;