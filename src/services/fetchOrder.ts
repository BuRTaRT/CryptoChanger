import {ExchangeOrder} from "@/generated/prisma/client";
import {ParamValue} from "next/dist/server/request/params";


const fetchOrder = async (id: ParamValue,
                          setOrder: (value: ExchangeOrder | null) => void,
                          setIsLoading: (value: boolean) => void) => {
    try {
        const response = await fetch(`/api/order/${id}`);
        const data = await response.json();
        setOrder(data);
    } catch (error) {
        console.error('Error:', error);
    } finally {
        setIsLoading(false);
    }
};
export default fetchOrder;