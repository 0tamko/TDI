
import type { PlayerUpgrade } from "../model/playerUpgrades";
import { upgrades } from "../services/upgradeList";
import { playerManagment } from "./playerStore.svelte";

let upgradeList = $state(upgrades);

export function getUpgradesFromList(){
    return upgradeList;
}

export function buyUpgrade(id : number){
    let upgradeToBuy = findByIdInupgradeList(id)

    if(upgradeToBuy.actualPrice === 0)
        upgradeToBuy.actualPrice = upgradeToBuy.basePrice;
    
    if (playerManagment.balance < upgradeToBuy.actualPrice)
        return;

    let findedPlayerUpgrade = findByIdInPlayerList(id);
    findedPlayerUpgrade.purchasedCount++;

    playerManagment.balance -= upgradeToBuy.actualPrice;

    upgradeToBuy.actualPrice = getNextUpgradePrice(upgradeToBuy.basePrice, upgradeToBuy.pricemultiplier, findedPlayerUpgrade.purchasedCount)
}

function updateUpgradePrices(id : number = -1){
    if (id === -1){
        upgradeList.every(upgrade => upgrade)
    }

    let upgradeToUpdatePrice = findByIdInupgradeList(id)
    let palyerCountOfBuyedUpgrade = findByIdInPlayerList(id).purchasedCount;
    upgradeToUpdatePrice.actualPrice =  getNextUpgradePrice(upgradeToUpdatePrice.basePrice, upgradeToUpdatePrice.basePrice, palyerCountOfBuyedUpgrade);
}

function getNextUpgradePrice(basePrice : number, pricemultiplier : number, count : number){
    return Math.round(basePrice*(pricemultiplier ** count)) ;
}

export function findByIdInupgradeList(id: number){
    const upgrade = upgradeList.find(item => item.id === id)!
    return upgrade;
}

function findByIdInPlayerList(id: number){
    let upgrade = playerManagment.playerUpgrades.find(upgrade => upgrade.upgradeId === id)!
    if(upgrade === undefined){
        playerManagment.playerUpgrades.push({upgradeId: id, purchasedCount: 1} as PlayerUpgrade);
        upgrade = {upgradeId: id, purchasedCount: 1} as PlayerUpgrade;
    }
    
    return upgrade;
}
