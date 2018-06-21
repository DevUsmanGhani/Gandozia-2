var initialState = {
    name: "Mining",
    level: 1,
    exp: 0,
    expNeeded: 83,
    miningBonus: 5,
}


export default function(state=initialState, action) {
    switch(action.type) {
        case "BUY_FROM_MINING_SHOP":
            var miningBonus = 0;
            if(action.payload.miningBonus){
                miningBonus = action.payload.miningBonus;
            }
            return {
                ...state,
                miningBonus: state.miningBonus + miningBonus,
            }
        case "MINE_CRYSTAL":
            let exp = action.payload * 50;
            return {
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