export const transmuteLog = (goldAmt, arcanaAmt) => {
    return {
        type: "TRANSMUTE_LOG",
        payload: {
            goldToAdd: goldAmt,
            arcanaToRemove: arcanaAmt,
        }
    }
}