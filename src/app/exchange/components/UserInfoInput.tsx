'use client'
import ErrorMessage from "@/ui/ErrorMessage";
import {UseFormRegisterReturn} from "react-hook-form";


interface Props {
    register: UseFormRegisterReturn,
    title:string,
    error?: string,
    placeholder?:string,

}

const UserInfoInput = function ({register, error,placeholder,title}: Props) {
    return (
        <div className={'flex flex-col justify-start sm:w-[250px]'}>
            <div
                className={'flex flex-col items-left gap-1 h-full w-full'}>
                <p className={'text-base'}>{title}</p>
                <div
                    className={'flex flex-col sm:flex-row items-left sm:items-center gap-1 w-full relative'}>
                    <input {...register} placeholder={placeholder}
                           className={'border rounded-sm w-full px-2 h-[45px]'} type="text"/>
                    <ErrorMessage message={error}/>
                </div>

            </div>
        </div>
    );
}
export default UserInfoInput;