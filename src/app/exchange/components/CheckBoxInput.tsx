'use client'


import {UseFormRegisterReturn} from "react-hook-form";

interface Props {
    register: UseFormRegisterReturn,
    error?: string
}

const CheckBoxInput = function ({register,error}:Props) {
  return (
      <div className={'flex flex-col items-start'}>
          <div className={'mt-5 flex gap-2'}>
              <input{...register} type="checkbox"/>
              <p>Я прочитал и согласен с условиями соглашения</p>
          </div>
          <p className={'text-red-500'}>{error}</p>
          <button className={'px-4 text-white text-2xl rounded-sm cursor-pointer py-2 mt-5 bg-[#0D64BA]'}
                  type='submit'>Обменять
          </button>
      </div>
  );
}
export default CheckBoxInput;