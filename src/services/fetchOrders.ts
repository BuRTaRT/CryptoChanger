import {ExchangeOrder} from "@/generated/prisma/client";

type Props = [
    url: string,
    setOrders: (value: ExchangeOrder[]) => void,
    setIsLoading: (value: boolean) => void
]

const fetchOrders = async (...[url, setOrders, setIsLoading]: Props) => {
    const response = await fetch(url);
    const orders = await response.json();
    if (response.ok) {
        setIsLoading(false)
        setOrders(orders)
    } else {
        console.log('error fetching orders')
    }
}
export default fetchOrders;