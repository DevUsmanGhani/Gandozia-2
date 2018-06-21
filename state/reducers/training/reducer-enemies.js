var initialState = {

        //STORY ENEMIES
        bandit1: {
            id: "bandit1",
            name: "Bandit 1",
            currentHealth: 100,
            maxHealth: 100,
            minDamage: 15,
            maxDamage: 25,
            minGoldDrop: 38,
            maxGoldDrop: 80,
            blockChance: 10,
            hitChance: 110,
            xp: 250,
            storyEnemy: "true",   
        },
        bandit2: {
            id: "bandit2",
            name: "Bandit 2",
            currentHealth: 80,
            maxHealth: 80,
            minDamage: 10,
            maxDamage: 21,
            minGoldDrop: 50,
            maxGoldDrop: 80,
            blockChance: 10,
            hitChance: 110,
            xp: 250,   
            storyEnemy: "true", 
        },
        banditChief: {
            id: "banditChief",
            name: "Bandit Chief",
            currentHealth: 150,
            maxHealth: 150,
            minDamage: 20,
            maxDamage: 30,
            minGoldDrop: 100,
            maxGoldDrop: 100,
            blockChance: 20,
            hitChance: 120,
            xp: 400,   
            storyEnemy: "true", 
        },
        orcChampion :{
            id: "orcChampion",
            name: "Orc Champion",
            currentHealth: 200,
            maxHealth: 200,
            minDamage: 25,
            maxDamage: 33,
            minGoldDrop: 300,
            maxGoldDrop: 300,
            blockChance: 20,
            hitChance: 120,
            xp: 600,   
            storyEnemy: "true", 
        },
        libraryMaster: {
            id: "libraryMaster",
            name: "Library Master",
            currentHealth: 300,
            maxHealth: 300,
            minDamage: 30,
            maxDamage: 50,
            minGoldDrop: 400,
            maxGoldDrop: 400,
            blockChance: 40,
            hitChance: 150,
            xp: 1000,
            storyEnemy: "true",   
        },
        orcChild1: {
            id: "orcChild1",
            name: "Orc Child 1",
            currentHealth: 25,
            maxHealth: 25,
            minDamage: 5,
            maxDamage: 8,
            minGoldDrop: 10,
            maxGoldDrop: 10,
            blockChance: 10,
            hitChance: 150,
            xp: 10,
            storyEnemy: "true",   
        },
        orcChild2: {
            id: "orcChild2",
            name: "Orc Child 2",
            currentHealth: 8,
            maxHealth: 8,
            minDamage: 5,
            maxDamage: 8,
            minGoldDrop: 3,
            maxGoldDrop: 3,
            blockChance: 0,
            hitChance: 80,
            xp: 5,
            storyEnemy: "true",   
        },
        orcChild3: {
            id: "orcChild3",
            name: "Orc Child 3",
            currentHealth: 20,
            maxHealth: 20,
            minDamage: 10,
            maxDamage: 10,
            minGoldDrop: 10,
            maxGoldDrop: 10,
            blockChance: 4,
            hitChance: 150,
            xp: 10,
            storyEnemy: "true",   
        },
        //TRAINING ENEMIES
        goblin: {
            id: "goblin",
            name: "Goblin",
            currentHealth: 50,
            maxHealth: 50,
            minDamage: 7,
            maxDamage: 13,
            minGoldDrop: 7,
            maxGoldDrop: 35,
            blockChance: 0,
            hitChance: 100,
            xp: 100,
            storyEnemy: "false",
        },

        bandit: {
            id: "bandit",
            name: "Bandit",
            currentHealth: 75,
            maxHealth: 75,
            minDamage: 15,
            maxDamage: 25,
            minGoldDrop: 38,
            maxGoldDrop: 80,
            blockChance: 10,
            hitChance: 120,
            xp: 250,
            storyEnemy: "false",     
        },

        orc: {
            id: "orc",
            name: "Orc",
            currentHealth: 150,
            maxHealth: 150,
            minDamage: 25,
            maxDamage: 35,
            minGoldDrop: 60,
            maxGoldDrop: 120,
            blockChance: 30,
            hitChance: 140,
            xp: 400,
            storyEnemy: "false",
        },

        cyclops: {
            id: "cyclops",
            name: "Cyclops",
            currentHealth: 250,
            maxHealth: 250,
            minDamage: 20,
            maxDamage: 45,
            minGoldDrop: 85,
            maxGoldDrop: 160,
            blockChance: 40,
            hitChance: 150,
            xp: 750,
            storyEnemy: "false",

        }
    }

    export default function(state=initialState, action){
        switch(action.type){
            case "ATTACK_ENEMY":
            case "BLAST_ENEMY" :  {
                let enemyName = action.payload.enemyId;
                let damage = action.payload.damage;
                return {...state,
                        [enemyName]: {
                            ...state[enemyName],
                            currentHealth: state[enemyName].currentHealth - damage,
                        }}
            }
            
            case "KILL_AND_LOOT": {
                var enemyName = action.payload.enemyId;
                var newState = {...state};
                if(state[enemyName].storyEnemy === "false"){
                    newState[enemyName].currentHealth = newState[enemyName].maxHealth;
                }
                else{
                    newState[enemyName].currentHealth = 0;
                }
                return newState;        
            }
            default:
                return state;
        }
    }