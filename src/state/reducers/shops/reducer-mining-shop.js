var initialState = {
    //Hatchets
    ironPickaxe: {
        type: "pickaxe",
        id: "ironPickaxe",
        name: "Iron Pickaxe",
        cost: 20,
        miningBonus: 5,
        visible: true,
        next: "steelPickaxe",
    },
    steelPickaxe: {
        type: "pickaxe",
        id: "steelPickaxe",
        name: "Steel Pickaxe",
        cost: 100,
        miningBonus: 10,
        visible: false,
        next: "reinforcedSteelPickaxe",
    },
    reinforcedSteelPickaxe: {
        type: "pickaxe",
        id: "reinforcedSteelPickaxe",
        name: "Reinforced Steel Pickaxe",
        cost: 250,
        miningBonus: 20,
        visible: false,
        next: "diamondEdgePickaxe",
    },
    diamondEdgePickaxe: {
        type: "pickaxe",
        id: "diamondEdgePickaxe",
        name: "Diamond Edge Pickaxe",
        cost: 500,
        miningBonus: 25,
        visible: false,
        next: "holyPickaxeOfMoradin"
    },
    holyPickaxeOfMoradin: {
        type: "pickaxe",
        id: "holyPickaxeOfMoradin",
        name: "Holy Pickaxe of Moradin",
        cost: 1350,
        miningBonus: 40,
        visible: false,
    },
    
    //Crystal Pouches
    smallCrystalPouch: {
        type: "crystalPouch",
        id: "smallCrystalPouch",
        name: "Small Crystal Pouch",
        cost: 50,
        increase: 5,
        visible: true,
        next: "mediumCrystalPouch",
    },
    mediumCrystalPouch: {
        type: "crystalPouch",
        id: "mediumCrystalPouch",
        name: "Medium Crystal Pouch",
        cost: 150,
        increase: 10,
        visible: false,
        next: "largeCrystalPouch",
    },
    largeCrystalPouch: {
        type: "crystalPouch",
        id: "largeCrystalPouch",
        name: "Large Crystal Pouch",
        cost: 500,
        increase: 30,
        visible: false,
        next: "extraLargeCrystalPouch",
    },
    extraLargeCrystalPouch: {
        type: "crystalPouch",
        id: "extraLargeCrystalPouch",
        name: "Extra Large Crystal Pouch",
        cost: 1250,
        increase: 50,
        visible: false,
    },

    //Arcanic Crystals
    arcanicCrystal: {
        id: "arcanicCrystal",
        name: "Arcanic Crystal",
        cost: 20,
        visible: true,
    },
    //Selling Arcanic Crystals
    sellFood: {
        

    },

}

export default function(state=initialState, action) {
    switch(action.type) {
        case "BUY_FROM_MINING_SHOP": 
            var buyable = action.payload.id;
            var nextBuyable = action.payload.next;
            var newState = {...state};
            if(newState[buyable].name !== "Arcanic Crystal"){
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