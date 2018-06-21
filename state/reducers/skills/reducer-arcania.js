var initialState = {
    name: "Arcania",
    level: 1,
    exp: 0,
    expNeeded: 83,
    blastArcanaCost: 5,
    blastDamage: 10,
    currentArcana: 10,
    maxArcana: 10,
    crystalRestoreAmount: 3,
    autoRestoreBonus: .1,

    tomeOfRestoration: false,
}


export default function(state=initialState, action) {
    switch(action.type) {
        case "BLAST_ENEMY": {
            let expGained = action.payload.damage * 3;
            return {
                ...state,
                exp: state.exp + expGained,
                currentArcana: state.currentArcana - action.payload.arcanaCost,
            }
        }
        case "RESTORE_ARCANA": {
            return {
                ...state,
                currentArcana: state.currentArcana + action.payload,
            }
        }       
        case "ABSORB_CRYSTAL": {
            let restoreAmt = action.payload.restoreAmt * action.payload.crystalAmt;
            return {
                ...state,
                currentArcana: state.currentArcana + restoreAmt,
            }
        }
        case "RESTORE_TO_FULL": {
            return {
                ...state,
                currentArcana: state.maxArcana,
            }
        }
        case "LEVEL_UP": {
            if(action.payload === state.name) {
                return {
                    ...state,
                    level: state.level + 1,
                    maxArcana: state.maxArcana + 1,
                    currentArcana: state.currentArcana + 1,
                    expNeeded: state.expNeeded + Math.floor(Math.floor(state.level + 1 + 300 * Math.pow(2, state.level / 7))/4),
                }
            }
            break;
        }
        case "TRANSMUTE_LOG": {
            return{
                ...state,
                currentArcana: state.currentArcana - action.payload.arcanaToRemove,
                exp: state.exp + 150,
            }
        }
        case "BUY_FROM_ARCANIA_SHOP": {
            var buyable = action.payload;
            var dmgBonus = 0;
            var autoRestoreBonus = 0;
            var arcanaIncrease = 0;
            if(buyable.damageBonus){
                dmgBonus = buyable.damageBonus;
            }
            if(buyable.maxArcanaBonus){
                arcanaIncrease = buyable.maxArcanaBonus;
            }
            if(buyable.restoreBonus){
                autoRestoreBonus = buyable.restoreBonus;
            }
            return{
                ...state,
                blastDamage: state.blastDamage + dmgBonus,
                maxArcana: state.maxArcana + arcanaIncrease,
                autoRestoreBonus: state.autoRestoreBonus + autoRestoreBonus,
            }
        }
        case "ACTIVATE_TOME_OF_RAGE": {
            return {
                ...state,
                blastDamage: Math.round(state.blastDamage * 1.5),
                blastArcanaCost: Math.round(state.blastArcanaCost * 1.5),
            }
        }
        case "DIE": {
            return {
                ...state,
                currentArcana: 0,
            }
        }
        case "BLAST_STEEL_WALL": {
            return {
                ...state,
                currentArcana: 0,
            }
        }
        default:
            return state;
    }
    return state;

}