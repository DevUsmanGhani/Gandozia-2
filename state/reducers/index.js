import { combineReducers } from "redux";

import  arcania  from "./skills/reducer-arcania";
import  combat  from "./skills/reducer-combat";
import  hunting  from "./skills/reducer-hunting";
import  mining  from "./skills/reducer-mining";
import  woodcutting  from "./skills/reducer-woodcutting";

import inventory from "./reducer-inventory";

import combatShop from "./shops/reducer-combat-shop";
import arcaniaShop from "./shops/reducer-arcania-shop";
import huntingShop from "./shops/reducer-hunting-shop";
import woodcuttingShop from "./shops/reducer-woodcutting-shop";
import miningShop from "./shops/reducer-mining-shop";

import enemies from "./training/reducer-enemies";

import story from "./story/reducer-story";


const rootReducer = combineReducers({
    arcania: arcania,
    combat: combat,
    hunting: hunting,
    mining: mining,
    woodcutting: woodcutting,
    
    inventory: inventory,

    combatShop: combatShop,
    arcaniaShop: arcaniaShop,
    huntingShop: huntingShop,
    woodcuttingShop: woodcuttingShop,
    miningShop: miningShop,

    enemies: enemies,

    story: story,
})

export default rootReducer;