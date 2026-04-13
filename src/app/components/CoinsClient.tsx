import BaseCoinsTable from "@/app/components/BaseCoinsTable";
import TargetCoinsTable from "@/app/components/TargetCoinsTable";
import React from "react";


const CoinsClient = function () {
    const features = [
        {
            img: '/1.png',
            title: 'Выгодный обмен',
            description: 'Качественно меняем валюту онлайн..'
        },
        {
            img: '/2.png',
            title: 'Надежность на высоком уровне',
            description: 'Если что-то пошло не так, мы всегда вернем вам деньги.'
        },
        {
            img: '/3.png',
            title: 'Быстрый обмен',
            description: 'Мы обеспечим не только надежность и лучший курс, но и быстрый обмен.'
        }
    ];
    return (
        <div className={'w-full flex flex-col gap-10'}>
            <div className='grid max-w-6xl m-auto grid-cols-[4fr_6fr] pl-4 pr-4 w-full gap-4'>
                <BaseCoinsTable/>
                <TargetCoinsTable/>
            </div>
            <div className={'bg-[#FFFFFF] p-5'}>
                <div className={'max-w-6xl mt-10 mb-10 m-auto  text-[#3e3737]'}>
                    <h2 className={'text-2xl font-bold'}>Добро пожаловать в CoinFlipper</h2>
                    <p className={'mt-5 mb-5'}>Конфиденциальность и безопасность клиента — наши ключевые
                        преимущества.</p>
                    <p>Команда CoinFlipper в течение нескольких лет нарабатывала репутацию надежного обменника
                        криптовалют и опытного игрока на крипторынке, который ценит пользователей и их средства. Для нас
                        важно, чтобы ваши данные были тщательно защищены, а ваши деньги оставались вашими деньгами.
                        Поэтому мы продолжаем уделять значительное внимание безопасным сделкам и защите системы и
                        работаем только с надежными партнерами.</p>
                    <div className={'flex flex-col gap-6 mt-5'}>
                        <h2 className={'text-2xl font-bold text-center sm:text-left'}>Преимущества</h2>
                        <div className="flex flex-col gap-6 sm:flex-row sm:justify-between sm:gap-4 md:gap-6 lg:gap-8">
                            {features.map((feature) => (
                                <div key={feature.title}
                                     className="flex flex-col items-center sm:items-start text-center sm:text-left gap-2 sm:gap-3 flex-1">
                                    <img
                                        className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 object-contain"
                                        src={feature.img}
                                        alt={feature.title}
                                    />
                                    <p className="text-base sm:text-lg md:text-xl font-bold">
                                        {feature.title}
                                    </p>
                                    <p className="text-sm sm:text-base text-gray-500">
                                        {feature.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default CoinsClient;