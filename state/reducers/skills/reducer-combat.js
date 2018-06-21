var initialState = {
    name: "Combat",
    level: 1,
    exp: 0,
    expNeeded: 83,
    minDamage: 5,
    maxDamage: 15,
    hitChance: 40,
    blockChance: 30,
    currentHealth: 100,
    maxHealth: 100,
    autoHealBonus: 0,
    foodHealAmount: 10,
}

export default function(state=initialState, action) {
    switch(action.type) {
        case "BUY_FROM_COMBAT_SHOP":
            var item = action.payload;
            var dmgBonus = 0;
            var accuracyBonus = 0;
            var defBonus = 0;
            var healthBonus = 0;
            var autoHealBonus = 0;
            if(item.dmgBonus){dmgBonus = item.dmgBonus};
            if(item.accuracyBonus)(accuracyBonus = item.accuracyBonus);
            if(item.defBonus){defBonus = item.defBonus};
            if(item.healthBonus){healthBonus = item.healthBonus};
            if(item.autoHealBonus){autoHealBonus = item.autoHealBonus};    
            return {
                ...state,
                minDamage: state.minDamage + dmgBonus,
                maxDamage: state.maxDamage + dmgBonus,
                hitChance: state.hitChance + accuracyBonus,
                blockChance: state.blockChance + defBonus,
                currentHealth: state.currentHealth + healthBonus,
                maxHealth: state.maxHealth + healthBonus,
                autoHealBonus: state.autoHealBonus + autoHealBonus,           
            }
        case "ATTACK_ENEMY": {
            let expGained = action.payload.damage * 2;
            return {
                ...state,
                exp: state.exp + expGained,
            }
        }
        case "RESTORE_HEALTH": {
            return {
                ...state,
                currentHealth: state.currentHealth + action.payload,
            }
        }
        case "TAKE_DAMAGE": {
            return {
                ...state,
                currentHealth: state.currentHealth - action.payload,
            }
        }
        case "EAT_FOOD": {
            let healAmt = action.payload.healAmt * action.payload.foodAmt;
            return {
                ...state,
                currentHealth: state.currentHealth + healAmt,
            }
        }
        case "LEVEL_UP": {
            if(action.payload === state.name) {
                return{
                    ...state,
                    level: state.level + 1,
                    maxHealth: state.maxHealth + 5,
                    hitChance: state.hitChance + 2,
                    expNeeded: state.expNeeded + Math.floor(Math.floor(state.level + 1 + 300 * Math.pow(2, state.level / 7))/4),
                }
            }
            break;
        }
        case "DIE": {
            return {
                ...state,
                currentHealth: state.maxHealth * .2,
            }
        }
        case "HEAL_TO_FULL": {
            return {
                ...state,
                currentHealth: state.maxHealth,
            }
        }
        default:
            return state;
    }
    return state;
}