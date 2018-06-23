var initialState = {
    //rings
    ringOfArcanicEnergy: {
        name: "Ring of Arcanic Energy",
        id: "ringOfArcanicEnergy",
        cost: 300,
        type: "ring",
        damageBonus: 10,
        visible: true,
        next: "ringOfGandozia"
    },
    ringOfGandozia: {
        name: "Ring of Gandozia",
        id: "ringOfGandozia",
        cost: 750,
        type: "ring",
        damageBonus: 20,
        visible: false,
        next: " ",
    },

    //talismans
    ancientRelic: {
        name: "Ancient Relic",
        id: "ancientRelic",
        cost: 200,
        type: "talisman",
        restoreBonus: .1,  
        visible: true,
        next: "talismanOfPower",
    },
    talismanOfPower: {
        name: "Talisman of Power",
        id: "talismanOfPower",
        cost: 900,
        type: "talisman",
        restoreBonus: .2,  
        visible: false,
        next: " ",
    },

    //capes
    capeOfKnowledge: {
        name: "Cape of Knowledge",
        id: "capeOfKnowledge",
        cost: 350,
        type: "cape",
        maxArcanaBonus: 10,
        visible: true,
        next: "capeOfTheDivine",
    },
    capeOfTheDivine: {
        name: "Cape of the Divine",
        id: "capeOfTheDivine",
        cost: 1300,
        type: "cape",
        maxArcanaBonus: 20,
        visible: false,
        next: " ",
    },

    //tomes
    tomeOfRestoration: {
        name: "Restoration",
        id: "tomeOfRestoration",
        cost: 1025,
        type: "tome",
        tome: "Restoration",
        visible: true,
        next: " ",
    },

}

export default function(state=initialState, action){
    switch(action.type){
        case "BUY_FROM_ARCANIA_SHOP": {
            var buyable = action.payload.id;
            var nextBuyable = action.payload.next;
            var newState = {...state};
            newState[buyable].visible = false;
            if(newState[nextBuyable]){
                newState[nextBuyable].visible = true;
            }
            return newState;
        }
        default: {
            return state;
        }
    }
}