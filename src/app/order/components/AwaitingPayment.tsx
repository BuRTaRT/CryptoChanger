'use client'
import Countdown from "@/app/order/components/Countdown";
import OrderInfo from "@/app/order/components/OderInfo";
import OrderTransactionInfo from "@/app/order/components/OrderTransactionInfo";

const AwaitingPayment = function ({order}: any) {
    return (
        <>
            <div className={'flex flex-col sm:flex-row justify-between items-center '}>
                <h2 className={'text-xl'}>Ожидается оплата</h2>
                <div>Id заявки: {order.id}</div>
            </div>
            <Countdown createdAt={order.createdAt}/>
            <OrderInfo order={order}/>
            <OrderTransactionInfo order={order}/>
        </>
    );
}
export default AwaitingPayment;