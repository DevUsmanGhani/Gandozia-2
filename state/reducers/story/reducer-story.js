var initialState = {
    //GANDOZIAN WOODS
    //manTiedToTree
    chopRemaining: 100,
    manSaved:false,
    banditCampFound:false,
    //banditCamp
    bandit1Killed:false,
    bandit2Killed:false,
    banditChiefKilled:false,
    orcCityGatesFound:false,
    //orcCityGates
    orcCityGatesApproached:false,
    trialLeaderSpokenTo:false,
    orcTrial1Passed:false,
    orcTrial2Passed:false,
    orcChampionSpokenTo:false,
    orcChampionDefeated:false,
    orcCityFound:false,
    //ORC CITY
    //miningCavern
    crystalApproached: false,
    mineRemaining: 100,
    crystalMined: false,
    crystalinspected: false,
    tomeOfRageActivated: false,
    //orcLibrary
    libraryMasterApproached: false,
    libraryMasterDefeated: false,
    libraryMasterBodyLooted: false,
    libraryMasterDiaryRead: false,
    foundByAgorAndStif: false,
    //orcLibraryBack
    steelWallApproached: false,
    steelWallRemaining: 100,
    steelWallDestroyed: false,
    orcChildrenFound: false,
    orcChildrenSpokenTo: false,
    decideToKillChildren: false,
    decideToPayChildren: false,
    orcChild1Defeated: false,
    orcChild2Defeated: false,
    orcChild3Defeated: false,
    orcCityEscaped: false,
    
    

}

export default function(state=initialState, action){
    switch(action.type) {
        case "MAKE_TRUE": {
            let nextStage = action.payload;
            return {
                ...state,
                [nextStage]: true,
            }
        }
        case "FREE_MAN": {
            return {
                ...state,
                chopRemaining: state.chopRemaining - action.payload,
            }
        }
        case "MINE_STORY_CRYSTAL": {
            return {
                ...state,
                mineRemaining: state.mineRemaining - action.payload,
            }
        }
        case "BLAST_STEEL_WALL": {
            return {
                ...state,
                steelWallRemaining: state.steelWallRemaining - action.payload,
            }
        }
        default: {
            return state;
        }
    }

}