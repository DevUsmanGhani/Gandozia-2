export const buyFromMiningShop = (item) => {
    return {
        type: "BUY_FROM_MINING_SHOP",
        payload: item,
    }
    
}

export const sellFromMiningShop = (amtToSell, sellPrice) => {
    return {
        type: "SELL_FROM_MINING_SHOP",
        payload: {
            amtToSell: amtToSell,
            sellPrice: sellPrice,
        }
    }
    
}