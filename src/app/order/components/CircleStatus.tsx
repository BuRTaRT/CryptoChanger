'use client'
import {clsx} from "clsx";
import {OrderStatus} from "@/Interfaces";


interface Props {
    currentStatus: OrderStatus,
    targetStatus: OrderStatus
}

const CircleStatus = function ({currentStatus, targetStatus}: Props) {
    return (
        <div className="flex items-center gap-3">
            <div className={clsx('w-8 h-8 bg-gray-300 rounded-full', {
                'bg-green-500': currentStatus === targetStatus
            })}></div>

        </div>
    );
}
export default CircleStatus;