'use client'
import ErrorMessage from "@/ui/ErrorMessage";
import {ChangeEvent} from "react";
import {UseFormRegisterReturn} from "react-hook-form";


interface Props {
    register: UseFormRegisterReturn,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void,
    error?: string
}

const AmountInput = function ({register, onChange, error}: Props) {
    return (
        <div className={'flex flex-col sm:flex-row sm:items-center gap-1 relative'}>
            <p>Сумма<span className={'text-red-500'}>*</span></p>
            <div
                className={'flex flex-col sm:flex-row items-left sm:items-center gap-1 h-full w-full relative'}>
                <input placeholder={'0'} type='number' step='any' {...register}
                       onChange={(e) => onChange(e)}
                       className={'px-2 border rounded-sm w-full  min-h-[45px]'}/>
                <ErrorMessage message={error}/>
            </div>

        </div>
    );
}
export default AmountInput;