'use client'
import {useEffect} from 'react';

const WidgetCrypto = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://cryptorank.io/widget/marquee.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script); // Убираем скрипт при размонтировании
        };
    }, []);
    return (
        <div className={' m-auto flex justify-center items-center'}>
            <div
                 id="cr-widget-marquee"
                 data-coins="bitcoin,ethereum,tether,ripple,cardano,dogecoin,tron,polkadot,litecoin,cosmos"
                 data-theme="light"
                 data-show-symbol="true"
                 data-show-icon="true"
                 data-show-period-change="true"
                 data-period-change="24H"
                 data-api-url="https://api.cryptorank.io/v0"
            >
            </div>
        </div>
    );
};

export default WidgetCrypto;