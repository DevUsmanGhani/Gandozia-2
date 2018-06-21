var initialState = {
    //Weapons
    woodenStick : {
        type: "weapon",
        id: "woodenStick",
        name: "Wooden Stick",
        cost: 20,
        dmgBonus: 5,
        accuracyBonus: 10,
        visible: true,
        next: "steelSword",
    },
    steelSword : {
        type: "weapon",
        id: "steelSword",
        name: "Steel Sword",
        cost: 100,
        dmgBonus: 10,
        accuracyBonus: 20,
        visible: false,
        next: "doubleAxe",
    },
    doubleAxe : {
        type: "weapon",
        id: "doubleAxe",
        name: "Double Axe",
        cost: 250,
        dmgBonus: 15,
        accuracyBonus: 25,
        visible: false,
        next: "bloodSpear",
    },
    bloodSpear : {
        type: "weapon",
        id: "bloodSpear",
        name: "Blood Spear",
        cost: 500,
        dmgBonus: 20,
        accuracyBonus: 30,
        visible: false,
    },
    
    //Armors
    leatherArmor : {
        type: "armor",
        id: "leatherArmor",
        name: "Leather Armor",
        cost: 20,
        defBonus: 5,
        healthBonus: 10,
        visible: true,
        next: "steelArmor",
    },
    steelArmor : {
        type: "armor",
        id: "steelArmor",
        name: "Steel Armor",
        cost: 125,
        defBonus: 20,
        healthBonus: 20,
        visible: false,
        next: "spikedArmor",
    },
    spikedArmor : {
        type: "armor",
        id: "spikedArmor",
        name: "Spiked Armor",
        cost: 300,
        defBonus: 30,
        healthBonus: 40,
        visible: false,
        next: "dragonscaleArmor",
    },
    dragonscaleArmor : {
        type: "armor",
        id: "dragonscaleArmor",
        name: "Dragonscale Armor",
        cost: 950,
        defBonus: 50,
        healthBonus: 100,
        visible: false,
        next: "demonhideArmor",
    },
    demonhideArmor : {
        type: "armor",
        id: "demonhideArmor",
        name: "Demonhide Armor",
        cost: 2000,
        defBonus: 100,
        healthBonus: 200,
        visible: false,
    },
    
    //Helmets
    marksmansCap: {
        type: "helmet",
        id: "marksmansCap",
        name: "Markman's Cap",
        cost: 150,
        accuracyBonus: 20,
        defBonus: 5,
        healthBonus: 5,
        visible: true,
        next: "vikingHelmet",
    },
    vikingHelmet: {
        type: "helmet",
        id: "vikingHelmet",
        name: "Viking Helmet",
        cost: 350,
        accuracyBonus: 30,
        defBonus: 10,
        healthBonus: 10,
        visible: false,
        next: "knightsHelm",
    },
    knightsHelm: {
        type: "helmet",
        id: "knightsHelm",
        name: "Knight's Helm",
        cost: 850,
        accuracyBonus: 50,
        defBonus: 25,
        healthBonus: 25,
        visible: false,
        next: "demonCrown",
    },
    demonCrown: {
        type: "helmet",
        id: "demonCrown",
        name: "Demon Crown",
        cost: 2200,
        accuracyBonus: 150,
        visible: false,
    },
    
    //Amulets
    amuletOfBlood: {
        type: "amulet",
        id: "amuletOfBlood",
        name: "Amulet of Blood",
        cost: 750,
        autoHealBonus: 1,
        next: "amuletOfDemonicSin",
        visible: true,
    },
    amuletOfDemonicSin: {
        type: "amulet",
        id: "amuletOfDemonicSin",
        name: "Amulet of Demonic Sin",
        cost: 2500,
        autoHealBonus: 2,
        accuracyBonus: 25,
        visible: false,
    }
    

}

export default function(state=initialState, action) {
    switch(action.type) {
        case "BUY_FROM_COMBAT_SHOP": 
            var buyable = action.payload.id;
            var nextBuyable = action.payload.next;
            var newState = {...state};
            newState[buyable].visible = false;
            if(newState[nextBuyable]){
                newState[nextBuyable].visible = true;
            }
            return newState;
        default: 
            return state;
    }
}