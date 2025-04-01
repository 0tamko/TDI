<script lang="ts">
  import type { PlayerUpgrade } from "../model/playerUpgrades";
    import { getUpgradesFromJson } from "../services/upgradeService";
    import { getPlayerMultiplierPerCount, playerManagment } from "../stores/playerStore.svelte";

    function updateMultiplier(){
        playerManagment.clickmultiplier = getPlayerMultiplierPerCount()
    }
    
</script>

<div class="m-auto">
    Upgrades
</div>
<div>
    <!-- <button onclick="{()=> {
        playerManagment.playerUpgrades.push(
            {name: "up1", cost: 5, description: "basic upgrade", multiplier: 1.03, purchasedCount: 5})
            updateMultiplier()
        }}">Upgrade #1</button>
    <button>Upgrade #3</button> -->
    {#each getUpgradesFromJson() as item}
        <div class="bg-gray-500 p-2 m-1 flex items-center">
            <div><img src="{item.image}" alt=""></div>
            <div>
                <p class="text-center text-xl">{item.name}<p>
                    <span>{item.cost} <button>buy</button></span>
                    <div>{item.description}</div>
            </div>
        </div>
    {/each}
    
</div>

