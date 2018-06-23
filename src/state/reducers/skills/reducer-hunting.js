var initialState = {
    name: "Hunting",
    level: 1,
    exp: 0,
    expNeeded: 83,
    huntingBonus: 5,
}


export default function(state=initialState, action) {
    switch(action.type) {
        case "BUY_FROM_HUNTING_SHOP":
            var huntingBonus = 0;
            if(action.payload.huntingBonus){
                huntingBonus = action.payload.huntingBonus;
            }
            return {
                ...state,
                huntingBonus: state.huntingBonus + huntingBonus,
            }
        case "CATCH_FOOD":
            let exp = action.payload * 50;
            return{
                ...state,
                exp: state.exp + exp,
            }
        case "LEVEL_UP": {
            if(action.payload === state.name) {
                return{
                    ...state,
                    level: state.level + 1,
                    expNeeded: state.expNeeded + Math.floor(Math.floor(state.level + 1 + 300 * Math.pow(2, state.level / 7))/4),
                }
            }
            break;
        }
            
        default:
            return state;
    }
    return state;
}