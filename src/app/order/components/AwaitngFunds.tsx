'use client'
import {format} from 'date-fns';
import {ru} from 'date-fns/locale';
import useCoinsStore from "@/store/CoinsStore";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowRight, faDownload, faClock, faArrowRightArrowLeft, faCheck} from '@fortawesome/free-solid-svg-icons'
import {ExchangeOrder} from "@/Interfaces";
import CircleStatus from "@/app/order/components/CircleStatus";
import {OrderStatus} from "@/constants/enums";
import StatusStep from "@/app/order/components/StatusStep";

const AwaitingFunds = function ({order}: { order: ExchangeOrder }) {
    const status = order.status;
    const coins = useCoinsStore(s => s.coins)
    const formattedDate = format(order.createdAt, 'd MMMM yyyy г., HH:mm', {locale: ru});

    const baseCoin = coins?.find((coin) => coin.name === order.baseCoin);
    const targetCoin = coins?.find((coin) => coin.name === order.targetCoin);

    // Массив статусов для упрощения
    const statusSteps = [
        {status: OrderStatus.AWAITING_FUNDS, icon: faDownload, title: 'Ожидаем поступления средств'},
        {status: OrderStatus.AWAITING_CONFIRMATION, icon: faClock, title: 'Ожидаем подтверждения сети'},
        {status: OrderStatus.EXCHANGING, icon: faArrowRightArrowLeft, title: 'Выполняем обмен'},
        {status: OrderStatus.COMPLETED, icon: faCheck, title: 'Обмен Завершён'}
    ];

    return (
        <div className="bg-white rounded-lg w-full text-center">
            {/* Заголовок */}
            <div className="mb-4 sm:mb-6">
                <div className="flex items-center justify-center gap-3 sm:gap-5 mb-4 sm:mb-5">
                    <img className="h-12 sm:h-16 md:h-20" src={baseCoin?.image} alt=""/>
                    <FontAwesomeIcon
                        icon={faArrowRight}
                        beat
                    />
                    <img className="h-12 sm:h-16 md:h-20" src={targetCoin?.image} alt=""/>
                </div>
                <h1 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 px-2">
                    Заявка id: {order.id} принята в обработку!
                </h1>
                <p className="text-gray-500 text-xs sm:text-sm px-4">
                    Мы обработаем вашу заявку после зачисления средств на наш счёт
                </p>
            </div>

            <div
                className="flex justify-around bg-[#E5E5E5] h-3 sm:h-4 rounded-full w-[90%] sm:w-[85%] md:w-[80%] m-auto mb-6 sm:mb-8">
                {statusSteps.map((step) => (
                    <CircleStatus
                        key={step.status}
                        currentStatus={status}
                        targetStatus={step.status}
                    />
                ))}
            </div>


            <div className="flex flex-col sm:flex-row w-[90%] sm:w-[85%] md:w-[80%] m-auto gap-4 sm:gap-0">
                {statusSteps.map((step) => (
                    <StatusStep
                        key={step.status}
                        icon={step.icon}
                        currentStatus={status}
                        targetStatus={step.status}
                        title={step.title}
                    />
                ))}
            </div>

            <div className="border-t border-gray-200 my-4 sm:my-6"></div>


            <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 justify-center">
                {/* Отдаю */}
                <div className="mb-6 sm:mb-0 flex-1">
                    <h3 className="text-sm font-semibold mb-3">Детали транзакции отдаю</h3>
                    <div className="space-y-2">
                        <div className="flex items-center justify-center gap-2">
                            <div className="w-4 h-4 sm:w-5 sm:h-5 bg-orange-500 rounded-full"></div>
                            <span className="font-medium text-xs sm:text-sm">
                                {order.baseCoin}
                            </span>
                        </div>
                        <p className="text-xs sm:text-sm text-gray-700 break-words px-2">
                            Отправляете: {order.baseAmount} {order.baseCoin}
                        </p>
                    </div>
                </div>

                <div className="flex-1">
                    <h3 className="text-sm font-semibold mb-3">Детали транзакции получаю</h3>
                    <div className="space-y-2">
                        <div className="flex items-center justify-center gap-2">
                            <div className="w-4 h-4 sm:w-5 sm:h-5 bg-blue-500 rounded-full"></div>
                            <span className="font-medium text-xs sm:text-sm">
                                {order.targetCoin}
                            </span>
                        </div>
                        <p className="text-xs sm:text-sm text-gray-700 break-words px-2">
                            Получаете: {order.targetAmount} {order.targetCoin}
                        </p>
                    </div>
                </div>

            </div>
            <p className="text-xs mt-5 text-gray-400">Дата создания заявки: {formattedDate}</p>
        </div>
    );
}

export default AwaitingFunds;