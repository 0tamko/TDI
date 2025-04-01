import type { PlayerUpgrade } from "./playerUpgrades";

export interface Player{
    balance : number,
    clickmultiplier : number,
    clickPerSecond : number,
    playerUpgrades : PlayerUpgrade[]
}