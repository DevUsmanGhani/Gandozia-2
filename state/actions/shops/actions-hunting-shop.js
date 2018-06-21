export const buyFromHuntingShop = (item) => {
    return {
        type: "BUY_FROM_HUNTING_SHOP",
        payload: item,
    }
    
}

export const sellFromHuntingShop = (amtToSell, sellPrice) => {
    return {
        type: "SELL_FROM_HUNTING_SHOP",
        payload: {
            amtToSell: amtToSell,
            sellPrice: sellPrice,
        }
    }
    
}

