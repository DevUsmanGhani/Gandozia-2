export const chopLog = (amt) => {
    return {
        type: "CHOP_LOG",
        payload: amt,
    }
}