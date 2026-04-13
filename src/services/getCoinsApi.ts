export const getCoins = async () => {
    const ids = 'ethereum,bitcoin,solana,litecoin,dogecoin,polkadot,tron,cardano,cosmos'
    const response = await fetch(
            `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${ids}`, {
                next: {
                    revalidate: 600
                }
            }
        )
    ;

    if (!response.ok) {
        console.log('Failed to fetch coins');
    }
    const data = await response.json();
    return data;
};

