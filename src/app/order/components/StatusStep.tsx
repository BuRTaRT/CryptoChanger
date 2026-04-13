'use client'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {clsx} from "clsx";
import {OrderStatus} from "@/Interfaces";
import {CSSProperties} from "react";

interface Props {
    currentStatus: OrderStatus,
    targetStatus: OrderStatus,
    icon: any,
    title:string
}

const StatusStep = function ({currentStatus, targetStatus, icon,title}: Props) {
    const isEqual = currentStatus === targetStatus;
    return (
        <div className={'flex-1'}>
            <div style={{"--fa-animation-duration": "2s"} as CSSProperties} className={clsx('text-gray-400', {
                'text-gray-700': isEqual,
                'fa-fade': isEqual,
            })}>
                <FontAwesomeIcon icon={icon} size={'xl'}/>
                <p className={'mt-2'}>{title}</p>
            </div>
        </div>
    );
}
export default StatusStep;