var initialState = {
    //Bows
    huntingBow: {
        type: "bow",
        id: "huntingBow",
        name: "Hunting Bow",
        cost: 20,
        huntingBonus: 5,
        visible: true,
        next: "scopedHuntingBow",
    },
    scopedHuntingBow: {
        type: "bow",
        id: "scopedHuntingBow",
        name: "Scoped Hunting Bow",
        cost: 100,
        huntingBonus: 10,
        visible: false,
        next: "barbarianHuntingBow",
    },
    barbarianHuntingBow: {
        type: "bow",
        id: "barbarianHuntingBow",
        name: "Barbarian Hunting Bow",
        cost: 250,
        huntingBonus: 20,
        visible: false,
        next: "elderwoodHuntingBow",
    },
    elderwoodHuntingBow: {
        type: "bow",
        id: "elderwoodHuntingBow",
        name: "Elderwood Hunting Bow",
        cost: 500,
        huntingBonus: 25,
        visible: false,
        next: "elvenHuntingBow"
    },
    elvenHuntingBow: {
        type: "bow",
        id: "elvenHuntingBow",
        name: "Elven Hunting Bow",
        cost: 1350,
        huntingBonus: 40,
        visible: false,
    },
    
    //Food Chests
    smallFoodChest: {
        type: "foodChest",
        id: "smallFoodChest",
        name: "Small Food Chest",
        cost: 50,
        increase: 5,
        visible: true,
        next: "mediumFoodChest",
    },
    mediumFoodChest: {
        type: "foodChest",
        id: "mediumFoodChest",
        name: "Medium Food Chest",
        cost: 150,
        increase: 10,
        visible: false,
        next: "largeFoodChest",
    },
    largeFoodChest: {
        type: "foodChest",
        id: "largeFoodChest",
        name: "Large Food Chest",
        cost: 500,
        increase: 30,
        visible: false,
        next: "extraLargeFoodChest",
    },
    extraLargeFoodChest: {
        type: "foodChest",
        id: "extraLargeFoodChest",
        name: "Extra Large Food Chest",
        cost: 1250,
        increase: 50,
        visible: false,
    },

    //Food
    food: {
        id: "food",
        name: "Food",
        cost: 15,
        visible: true,
    },
    //Selling Food
    sellFood: {
        

    },

}

export default function(state=initialState, action) {
    switch(action.type) {
        case "BUY_FROM_HUNTING_SHOP": 
            var buyable = action.payload.id;
            var nextBuyable = action.payload.next;
            var newState = {...state};
            if(newState[buyable].name !== "Food"){
                newState[buyable].visible = false;
            };
            if(newState[nextBuyable]){
                newState[nextBuyable].visible = true;
            }
            return newState;
        default: 
            return state;
    }
}