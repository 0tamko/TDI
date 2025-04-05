import type { Player } from "../model/playerModel";
import { upgrades } from "../services/upgradeList";
import { findByIdInupgradeList } from "./upgradeStore.svelte";

export let playerManagment: Player  = $state<Player>({
    balance : 50000,
    clickmultiplier : 0,
    clickPerSecond : 0,
    playerUpgrades : []
})


export function getPlayerMultiplierPerCount(){
    let multiplier  : number = playerManagment.playerUpgrades.map((item,i) => upgrades[i].clickMultiplier * item.purchasedCount)
    .reduce((sum,value) => sum +value,0)
    return Math.round(multiplier * 100) / 100;
}


