'use client'
import useCoinsStore from "@/store/CoinsStore";
import {getRate} from "@/helpers/getRate";
import Form from "@/app/exchange/components/Form";
import PageHeader from "@/ui/PageHeader";


const Exchange = function () {
    const baseCoin = useCoinsStore(state => state.baseCoin)
    const targetCoin = useCoinsStore(state => state.targetCoin)


    return (
        <div className={'mt-10'}>
            <PageHeader>
                Обмен {baseCoin?.name} на {targetCoin ? targetCoin?.name : 'Выберите монету'}
            </PageHeader>
            <div className={'lg:max-w-6xl flex flex-col gap-5'}>
                <div className='p-10 bg-white mt-2 rounded-xs'>
                    <p className={'text-green-500'}>Внимание!</p>
                    <p>Примечание: Данная операция выполняется в автоматическом режиме, т.е. с участием робота и
                        занимает от
                        5 до 30 минут в рабочее время (ежедневно с 8:00 до 24:00 GMT).</p>
                </div>


                <div className={' bg-white p-5'}>
                    <p>Курс
                        обмена: {baseCoin && targetCoin
                            ? `${baseCoin?.name} = ${getRate(baseCoin, targetCoin)} ${targetCoin?.name}`
                            : "выберите монеты для обмена"}
                    </p>
                    <Form/>
                </div>
            </div>
        </div>

    );
}
export default Exchange;