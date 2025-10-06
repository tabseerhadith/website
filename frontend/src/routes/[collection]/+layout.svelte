<script lang="ts">
  let { children } = $props();
</script>

<main class="max-w-[1000px] mx-auto my-20">
  {@render children?.()}
</main>
