<script>
    import { playerManagment} from "../stores/playerStore.svelte";
</script>

<div class="flex justify-center flex-col">
    <span class="m-auto">Clickmultiplier : {playerManagment.clickmultiplier}</span>
    <span class="m-auto">Money : {playerManagment.balance}</span>

    <ul>
        Player : upgrades
        {#each  playerManagment.playerUpgrades as item }
            <li>{item.upgradeId} - {item.purchasedCount}</li>
        {/each}
    </ul>
</div>

<button onclick="{() => {
    playerManagment.balance = playerManagment.balance + playerManagment.clickmultiplier;  
}}" class="mx-auto" >click</button>
