var initialState = {
    goldCount: 0,
    
    weapon: "Fists",
    armor: "Tattered Robes",
    helmet: "None",
    amulet: "None",

    talisman: "None",
    ring: "None",
    cape: "None",
    tome: ["Energy"],

    foodCount: 0,
    maxFoodCount: 5,
    bow: "Wooden Bow",
    foodChest: "None",
    
    logCount: 0,
    maxLogCount: 5,
    hatchet: "Wooden Hatchet",
    logBag: "None",

    crystalCount: 0,
    maxCrystalCount: 5,
    pickaxe: "Stone Pickaxe",
    crystalPouch: "None",
    
}

export default function(state=initialState, action){
    
    switch(action.type) {
        case "BUY_FROM_COMBAT_SHOP":
        case "BUY_FROM_HUNTING_SHOP":
        case "BUY_FROM_WOODCUTTING_SHOP":
        case "BUY_FROM_MINING_SHOP":
        case "BUY_FROM_ARCANIA_SHOP": {
            var buyable = action.payload;
            var newState = {...state};
            newState.goldCount = state.goldCount - buyable.cost;
            if(buyable.type && buyable.type !== "tome"){
                var buyableType = buyable.type;
                newState[buyableType] = buyable.name;
            }
            if(buyable.type === "tome") {
                newState.tome.push(buyable.tome)
                
            }
            switch(buyable.name) {
                case "Food": newState.foodCount += 1; break;
                case "Log" : newState.logCount += 1; break;
                case "Arcanic Crystal" : newState.crystalCount += 1; break;
                default: break;
            }
            switch(buyable.type){
                case "foodChest": newState.maxFoodCount = state.maxFoodCount + action.payload.increase; break;
                case "logBag": newState.maxLogCount = state.maxLogCount + action.payload.increase; break;
                case "crystalPouch": newState.maxCrystalCount = state.maxCrystalCount + action.payload.increase; break;
                default: break;
            }        
            return newState;
        }
        case "SELL_FROM_HUNTING_SHOP":
            return {
                ...state,
                goldCount: state.goldCount + action.payload.amtToSell * action.payload.sellPrice,
                foodCount: state.foodCount - action.payload.amtToSell,
            }
        case "SELL_FROM_WOODCUTTING_SHOP":
            return {
                ...state,
                goldCount: state.goldCount + action.payload.amtToSell * action.payload.sellPrice,
                logCount: state.logCount - action.payload.amtToSell,
            }
        case "SELL_FROM_MINING_SHOP":
            return {
                ...state,
                goldCount: state.goldCount + action.payload.amtToSell * action.payload.sellPrice,
                crystalCount: state.crystalCount - action.payload.amtToSell,
            }
        case "KILL_AND_LOOT":
            return{
                ...state,
                goldCount: state.goldCount + action.payload.goldDrop,
            }
        case "ABSORB_CRYSTAL": {
            return {
                ...state,
                crystalCount: state.crystalCount - action.payload.crystalAmt,
            }
        }
        case "EAT_FOOD": {
            return {
                ...state,
                foodCount: state.foodCount - action.payload.foodAmt,
            }
        }
        case "HEAL_TO_FULL": {
            return {
                ...state,
                foodCount: state.foodCount - action.payload,
            }
        }
        case "RESTORE_TO_FULL": {
            return {
                ...state,
                crystalCount: state.crystalCount - action.payload,
            }
        }
        case "MINE_CRYSTAL": {
            return { 
                ...state,
                crystalCount: state.crystalCount + action.payload,
            }
        }
        case "CHOP_LOG": {
            return {
                ...state,
                logCount: state.logCount + action.payload,
            }
        }
        case "CATCH_FOOD": {
            return {
                ...state,
                foodCount: state.foodCount + action.payload,
            }
        }
        case "TRANSMUTE_LOG": {
            return {
                ...state,
                logCount: state.logCount - 1,
                goldCount: state.goldCount + action.payload.goldToAdd,
            }
        }
        case "ORC_TRIAL_1_PASSED": {
            return {
                ...state,
                foodCount: state.foodCount - action.payload,
            }
        }
        case "ORC_TRIAL_2_PASSED": {
            return {
                ...state,
                crystalCount: state.crystalCount - action.payload,
            }
        }
        case "ACTIVATE_TOME_OF_RAGE": {
            let newState = {...state};
            newState.tome.splice(0, 1, "Rage");
            return newState;
        }
        case "DECIDE_TO_PAY_CHILDREN": {
            return {
                ...state,
                goldCount: state.goldCount - action.payload,
            }
        }
        default:
            return state;
    }
}