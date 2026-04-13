export type OrderStatus =
    | 'AWAITING_PAYMENT'
    | 'AWAITING_FUNDS'
    | 'AWAITING_CONFIRMATION'
    | 'EXCHANGING'
    | 'COMPLETED';

export interface ExchangeOrder {
    id: string;
    userId: string;
    email: string;
    wallet: string;
    baseAmount: number;
    targetAmount: number;
    baseCoin: string;
    targetCoin: string;
    status: OrderStatus
    createdAt: Date;
}


