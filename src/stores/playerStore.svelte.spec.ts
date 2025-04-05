import { expect, test } from "vitest";
import type { PlayerUpgrade } from "../model/playerUpgrades";
//import { getPlayerMultiplierPerCount, playerManagment } from "./playerStore.svelte";

// test("PlayerStore", ()=>{
//     let playerUpgrades : PlayerUpgrade[] = [
//         {upgradeId:0, name: "up1", description: "basic upgrade", multiplier: 1.03, purchasedCount: 5}, //5.15 
//         {upgradeId:0, name: "up1", description: "basic upgrade", multiplier: 1.03, purchasedCount: 5}, //5.15 
//         {upgradeId:0, name: "up1", description: "basic upgrade", multiplier: 1.03, purchasedCount: 5}, //5.15  //20.6
//         {upgradeId:0, name: "up1", description: "basic upgrade", multiplier: 1.03, purchasedCount: 5}  //5.15 
//     ]
//     playerManagment.playerUpgrades.push(...playerUpgrades)

//     let expectValue = playerManagment.playerUpgrades.map(item => item.multiplier * item.purchasedCount)
//     .reduce((sum,value) => sum +value,0)

//     expect(getPlayerMultiplierPerCount()).toEqual(expectValue)
// })