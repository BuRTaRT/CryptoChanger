-- CreateEnum
CREATE TYPE "Status" AS ENUM ('AWAITING_PAYMENT', 'AWAITING_FUNDS', 'AWAITING_CONFIRMATION', 'EXCHANGING', 'COMPLETED');

-- CreateTable
CREATE TABLE "ExchangeOrder" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "wallet" TEXT NOT NULL,
    "baseAmount" DOUBLE PRECISION NOT NULL,
    "targetAmount" DOUBLE PRECISION NOT NULL,
    "baseCoin" TEXT NOT NULL,
    "targetCoin" TEXT NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'AWAITING_PAYMENT',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ExchangeOrder_pkey" PRIMARY KEY ("id")
);
