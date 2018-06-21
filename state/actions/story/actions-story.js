export const makeTrue = (thingToBeMadeTrue) => {
    return ({
        type: "MAKE_TRUE",
        payload: thingToBeMadeTrue,
    })
}

export const freeMan = () => {
    return({
        type: "FREE_MAN",
        payload: 5,
    })
}

export const orcTrial1Passed = () => {
    return({
        type: "ORC_TRIAL_1_PASSED",
        payload: 10,
    })
}

export const orcTrial2Passed = () => {
    return({
        type: "ORC_TRIAL_2_PASSED",
        payload: 10,
    })
}

export const mineStoryCrystal = () => {
    return( {
        type: "MINE_STORY_CRYSTAL",
        payload: 5,
    })
}

export const activateTomeOfRage = () => {
    return({
        type: "ACTIVATE_TOME_OF_RAGE",
        payload: true,
    })
}

export const decideToPayChildren = () => {
    return ({
        type: "DECIDE_TO_PAY_CHILDREN",
        payload: 300,
    })
}

export const blastSteelWall = (arcana) => {
    return({
        type: "BLAST_STEEL_WALL",
        payload: arcana,
    })
}