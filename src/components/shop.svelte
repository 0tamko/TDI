<script lang="ts">
    import { getPlayerMultiplierPerCount, playerManagment } from "../stores/playerStore.svelte";
    import { getUpgradesFromList, buyUpgrade} from "../stores/upgradeStore.svelte"


    function updateMultiplier(){
        playerManagment.clickmultiplier = getPlayerMultiplierPerCount()
    }
    
    
</script>

<div class="m-auto">
    Upgrades
</div>
<div>
    {#each getUpgradesFromList() as item}
        <div class="bg-gray-500 p-2 m-1 flex items-center">
            <div class="max-w-1/6 mx-2.5"><img src="{item.image}" alt="" ></div>
            <div>
                <p class="text-center text-xl">{item.name}<p>
                <div class="bg-white">{item.actualPrice} 
                    <button onclick="{()=> {
                            buyUpgrade(item.id)
                            updateMultiplier();
                        }
                    }">buy</button>
                    <div>{item.description}</div>
                </div>
            </div>
        </div>
    {/each}
    
</div>

