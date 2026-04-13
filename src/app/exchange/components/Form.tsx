'use client'
import {useForm} from "react-hook-form";
import {useEffect} from "react";
import useCoinsStore from "@/store/CoinsStore";
import CryptoSelect from "@/app/exchange/components/CryptoSelect";
import {zodResolver} from "@hookform/resolvers/zod";
import exchangeZod from "@/validation/exchangeZod";
import AmountInput from "@/app/exchange/components/AmountInput";
import UserInfoInput from "@/app/exchange/components/UserInfoInput";
import CheckBoxInput from "@/app/exchange/components/CheckBoxInput";
import useExchangeRates from "@/сustomHooks/useExchangeRates";
import {useRouter} from "next/navigation";

const Form = function () {
    const baseCoins = useCoinsStore(state => state.coins)
    const baseCoin = useCoinsStore(state => state.baseCoin)
    const targetCoin = useCoinsStore(state => state.targetCoin)
    const setBaseCoin = useCoinsStore(state => state.setBaseCoin);
    const setTargetCoin = useCoinsStore(state => state.setTargetCoin);
    const router = useRouter()

    const {
        register,
        handleSubmit,
        setValue,
        control,
        formState: {errors}
    } = useForm({resolver: zodResolver(exchangeZod), mode: "all"})

    useEffect(() => {
        setValue('baseCrypto', baseCoin)
        setValue('targetCrypto', targetCoin)
    }, [baseCoin, targetCoin])

    const options = baseCoins?.map((coin) => {
        return {
            value: coin,
            label: (<div className={'flex items-center gap-2'}>
                <img className={'h-10'} alt='coin-img' src={coin.image}/>{coin.name}</div>)
        }
    })
    const {updateFromBase, updateFromTarget} = useExchangeRates(baseCoin, targetCoin, setValue)

    const submitHandler = async (data: any) => {
        let userId = localStorage.getItem('exchangeUserId');
        if (!userId) {
            userId = crypto.randomUUID();
            localStorage.setItem('exchangeUserId', userId);
        }
        const payload = {
            userId,
            email: data.email,
            wallet: data.wallet,
            baseAmount: data.baseCount,
            targetAmount: data.targetCount,
            baseCoin: baseCoin?.name,
            targetCoin: targetCoin?.name,
        };

        try {
            const response = await fetch('../../api/exchange', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(payload),
            });
            const result = await response.json();
            if (result.success) {
                router.push(`/order/${result.order.id}`) ;
            } else {
                alert('Ошибка: ' + result.error);
            }
        } catch (error) {
            alert('Ошибка при отправке');
        }
    }

    return (
        <form onSubmit={handleSubmit(submitHandler)}>
            <div className={'flex-col'}>
                <h2 className={'text-2xl font-bold mt-5 mb-5'}>Отдаёте {baseCoin ? baseCoin.name : 'Выберите монету'}</h2>
                <div className={'flex flex-col sm:flex-row gap-3'}>
                    <CryptoSelect name={'baseCrypto'}
                                  control={control}
                                  value={baseCoin}
                                  onChange={setBaseCoin}
                                  options={options}/>
                    <AmountInput register={register('baseCount')}
                                 onChange={(e) => updateFromBase(e.target.value)}
                                 error={errors.baseCount?.message}/>
                </div>
                <hr className={'my-10'}/>
                <div>
                    <h2 className={'text-2xl font-bold mt-5 mb-5'}>Получаете {targetCoin ? targetCoin.name : 'Выберите монету'}</h2>
                    <div className={'flex flex-col sm:flex-row gap-3'}>
                        <CryptoSelect name={'targetCrypto'}
                                      control={control}
                                      value={targetCoin}
                                      onChange={setTargetCoin}
                                      options={options}/>
                        <AmountInput register={register('targetCount')}
                                     onChange={(e) => updateFromTarget(e.target.value)}
                                     error={errors.targetCount?.message}/>
                    </div>
                    <div className={'flex flex-col gap-4 mt-5'}>
                        <UserInfoInput error={errors.wallet?.message}
                                       title={`Ваш криптокошелёк (${targetCoin?.name})`}
                                       register={register('wallet')}/>
                        <UserInfoInput error={errors.email?.message}
                                       title={'Ваш email'}
                                       placeholder={'example@google.com'}
                                       register={register('email')}/>
                    </div>
                </div>
            </div>
            <hr className={'mt-5'}/>
            <CheckBoxInput register={register('agree')}
                           error={errors.agree?.message}/>
        </form>
    );
}
export default Form;