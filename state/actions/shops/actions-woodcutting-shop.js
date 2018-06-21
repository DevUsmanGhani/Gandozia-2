export const buyFromWoodcuttingShop = (item) => {
    return {
        type: "BUY_FROM_WOODCUTTING_SHOP",
        payload: item,
    }
    
}

export const sellFromWoodcuttingShop = (amtToSell, sellPrice) => {
    return {
        type: "SELL_FROM_WOODCUTTING_SHOP",
        payload: {
            amtToSell: amtToSell,
            sellPrice: sellPrice,
        }
    }
    
}
