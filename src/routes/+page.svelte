<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

<script lang="ts">
    import Shop from "../components/shop.svelte";
    import RightWindow from "../components/rightWindow.svelte";
    import { playerManagment } from "../stores/playerStore.svelte";
  </script>

<main class="grid grid-cols-3">
    <section class="bg-amber-600 col-span-2">
        <RightWindow />
    </section>

    <section class="col-span-1">
        <Shop buyed={"hehe"}/>
    </section>
</main>

