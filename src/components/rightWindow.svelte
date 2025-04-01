<script>
    import { getPlayerMultiplierPerCount, playerManagment } from "../stores/playerStore.svelte";

    function updateMultiplier(){
        playerManagment.clickmultiplier = getPlayerMultiplierPerCount()
    }

</script>

<div class="flex justify-center flex-col">
    <span class="m-auto">CPS : {playerManagment.clickmultiplier}</span>
    <span class="m-auto">Money : {playerManagment.balance}</span>
</div>

<button onclick="{() => {
    playerManagment.balance = playerManagment.balance + playerManagment.clickmultiplier;  
}}" class="mx-auto" >click</button>
