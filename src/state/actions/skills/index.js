export const levelUp = (skillName) => {
    return {
        type: "LEVEL_UP",
        payload: skillName,
    }
}