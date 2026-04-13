
import React from "react";
import BaseCoinList from "@/app/components/BaseCoinList";

const BaseCoinsTable = function () {
    return (
        <div className='bg-white rounded-xl shadow-md '>
            <div className='sticky top-0'>
                <p className={'text-center text-gray-500 pt-4 pb-4'}>Вы отдаёте</p>
                <BaseCoinList/>
            </div>
        </div>
    );
}
export default BaseCoinsTable;