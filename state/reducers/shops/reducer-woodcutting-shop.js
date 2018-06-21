var initialState = {
    //Hatchets
    ironHatchet: {
        type: "hatchet",
        id: "ironHatchet",
        name: "Hunting Hatchet",
        cost: 20,
        woodcuttingBonus: 5,
        visible: true,
        next: "steelPlatedHatchet",
    },
    steelPlatedHatchet: {
        type: "hatchet",
        id: "steelPlatedHatchet",
        name: "Steel Plated Hatchet",
        cost: 100,
        woodcuttingBonus: 10,
        visible: false,
        next: "dwarvenHatchet",
    },
    dwarvenHatchet: {
        type: "hatchet",
        id: "dwarvenHatchet",
        name: "Dwarven Hatchet",
        cost: 250,
        woodcuttingBonus: 20,
        visible: false,
        next: "diamondEdgeHatchet",
    },
    diamondEdgeHatchet: {
        type: "hatchet",
        id: "diamondEdgeHatchet",
        name: "Diamond Edge Hatchet",
        cost: 500,
        woodcuttingBonus: 25,
        visible: false,
        next: "elvenwoodcuttinghatchet"
    },
    godAxeOfGaea: {
        type: "hatchet",
        id: "godAxeOfGaea",
        name: "God Axe of Gaea",
        cost: 1350,
        woodcuttingBonus: 40,
        visible: false,
    },
    
    //Log Bags
    smallLogBag: {
        type: "logBag",
        id: "smallLogBag",
        name: "Small Log Bag",
        cost: 50,
        increase: 5,
        visible: true,
        next: "mediumLogBag",
    },
    mediumLogBag: {
        type: "logBag",
        id: "mediumLogBag",
        name: "Medium Log Bag",
        cost: 150,
        increase: 10,
        visible: false,
        next: "largeLogBag",
    },
    largeLogBag: {
        type: "logBag",
        id: "largeLogBag",
        name: "Large Log Bag",
        cost: 500,
        increase: 30,
        visible: false,
        next: "extraLargeLogBag",
    },
    extraLargeLogBag: {
        type: "logBag",
        id: "extraLargeLogBag",
        name: "Extra Large Log Bag",
        cost: 1250,
        increase: 50,
        visible: false,
    },

    //Log
    log: {
        id: "log",
        name: "Log",
        cost: 13,
        visible: true,
    },
    //Selling Log
    sellFood: {
        

    },

}

export default function(state=initialState, action) {
    switch(action.type) {
        case "BUY_FROM_WOODCUTTING_SHOP": 
            var buyable = action.payload.id;
            var nextBuyable = action.payload.next;
            var newState = {...state};
            if(newState[buyable].name !== "Log"){
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