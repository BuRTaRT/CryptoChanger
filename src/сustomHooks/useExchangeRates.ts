import {UseFormSetValue} from "react-hook-form";
import {getRate} from "@/helpers/getRate";
import toMaxFixed from "@/helpers/toMaxFixed";


const useExchangeRates = (baseCoin: any, targetCoin: any, setValue: UseFormSetValue<any>) => {
    const updateFromBase = (value: string) => {
        if (!value) setValue('targetCount', 0)
        const amount = Number(value) * getRate(baseCoin, targetCoin)
        const fixedAmount = toMaxFixed(amount, 6);
        setValue('targetCount', fixedAmount)
    }
    const updateFromTarget = (value: string) => {
        if (!value) return
        const amount = Number(value) / getRate(baseCoin, targetCoin)
        const fixedAmount = toMaxFixed(amount, 6);
        setValue('baseCount', fixedAmount)

    }
    return {updateFromBase, updateFromTarget}
}
export default useExchangeRates;