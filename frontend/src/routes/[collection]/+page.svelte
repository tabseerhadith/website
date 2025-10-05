<script lang="ts">
  let { data, params } = $props();
  const { data: books } = data;
</script>

<section class="grid p10">
  {#await books}
    <p class="skeleton">hi</p>
  {:then books}
    {#each books as book, index}
      <a
        class="{index % 2 === 0 ? 'bg-secondary' : ''} p4 rounded"
        href="/{params.collection}/{book.id}"
      >
        {index+1 + ".  "}   {book.name}
      </a>
    {/each}
  {:catch error}
    <p>Error loading books: {error.message}</p>
  {/await}
</section>
