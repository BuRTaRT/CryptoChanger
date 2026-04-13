const Footer = function () {
    const sections = [
        {
            title: "Компания",
            links: ["О нас", "Мои заявки"]
        },
        {
            title: "Контакты",
            links: ["Связаться с нами", "Телеграм", "Почта"]
        },
        {
            title: "Аккаунт",
            links: ["Вход", "Зарегистрироваться"]
        },
        {
            title: "Информация",
            links: ["FAQ", "Условия соглашения"]
        }
    ];

    return (
        <div className="bg-[#DCDCDC] w-full">
            <div className="flex flex-wrap justify-center gap-6 md:gap-8 p-6 md:p-8 lg:p-10 max-w-7xl mx-auto">
                {sections.map((section, idx) => (
                    <div key={idx} className="min-w-[150px] flex-1 sm:flex-none text-left">
                        <div className="font-bold mb-3">{section.title}</div>
                        <div className="space-y-2">
                            {section.links.map((link, linkIdx) => (
                                <div key={linkIdx} className="text-sm hover:underline cursor-pointer">
                                    {link}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Footer;