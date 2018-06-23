

export const attackEnemy = (enemyId, damage) => {
    return{
        type: "ATTACK_ENEMY",
        payload: {
            enemyId: enemyId,
            damage: damage,
        }
    }
}

export const blastEnemy = (enemyId, damage, arcanaCost) => {
    return{
        type: "BLAST_ENEMY",
        payload: {
            enemyId: enemyId,
            damage: damage,
            arcanaCost: arcanaCost,
        }
    }
}


export const killAndLoot = (enemyId, goldDrop) => {
    return{
        type: "KILL_AND_LOOT",
        payload: {
            goldDrop: goldDrop,
            enemyId: enemyId,
        }
            
        }
    }

export const restoreHealth = (amt) => {
    return {
        type: "RESTORE_HEALTH",
        payload: amt,
    }
}

export const restoreArcana = (amt) => {
    return {
        type: "RESTORE_ARCANA",
        payload: amt,
    }
}

export const takeDamage = (dmg) => {
    return {
        type: "TAKE_DAMAGE",
        payload: dmg,
    }
}

export const eatFood = (foodAmt, healAmt) => {
    return{
        type: "EAT_FOOD",
        payload:{
            foodAmt: foodAmt,
            healAmt: healAmt,
        }
        }
    }

export const absorbCrystal = (crystalAmt, restoreAmt) => {
    return{
        type: "ABSORB_CRYSTAL",
        payload: {
            crystalAmt: crystalAmt,
            restoreAmt: restoreAmt,
        }
    }
}

export const die = () => {
    return {
        type: "DIE",
    }
}

export const healToFull = (amtEaten) => {
    return {
        type: "HEAL_TO_FULL",
        payload: amtEaten,
    }
}

export const restoreToFull = (amtAbsorbed) => {
    return {
        type: "RESTORE_TO_FULL",
        payload: amtAbsorbed,
    }
}