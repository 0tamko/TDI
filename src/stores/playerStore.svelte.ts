import type { Player } from "../model/playerModel";

export let playerManagment: Player  = $state<Player>({
    balance : 0,
    clickmultiplier : 1,
    clickPerSecond : 0,
    playerUpgrades : []
})


export function getPlayerMultiplierPerCount(){
    let multiplier  : number = playerManagment.playerUpgrades.map(item => item.multiplier * item.purchasedCount)
    .reduce((sum,value) => sum +value,0)
    return multiplier;
}

