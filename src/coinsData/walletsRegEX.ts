const regEx = {
    bitcoin: '^(bc1|[13])[a-zA-HJ-NP-Z0-9]{25,39}$',
    ethereum: '^0x[a-fA-F0-9]{40}$',
    litecoin: '^(L|M|ltc1)[a-zA-HJ-NP-Z0-9]{26,39}$',
    solana: '^[1-9A-HJ-NP-Za-km-z]{32,44}$',
    ripple: '^r[0-9a-zA-Z]{24,34}$',
    cosmos: '^cosmos1[a-z0-9]{38}$',
    binancecoin: '^bnb1[0-9a-z]{38}$',
    cardano: '^addr1[a-z0-9]{58}$',
    dogecoin: '^D{1}[5-9A-HJ-NP-U]{1}[1-9A-HJ-NP-Za-km-z]{32}$',
    tezos: '^(tz1|tz2|tz3|KT1)[a-zA-Z0-9]{33}$',
    tros: '^T[1-9A-HJ-NP-Za-km-z]{33}$',
    tether: '^0x[a-fA-F0-9]{40}$',
    polkadot: '^1[a-zA-HJ-NP-Z0-9]{47}$'
}