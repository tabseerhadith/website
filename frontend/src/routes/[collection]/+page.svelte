<script lang="ts">
  let { data, params } = $props();
  const { books } = data;
</script>

<main class="max-w-[1000px] mx-auto">
  <section class="grid gap10 p10">
    {#await books}
      <p class="skeleton">hi</p>
    {:then books}
      <section class="brd p5 rounded flex flex-col gap3">
        <h1 class="font-medium frow justify-between text-primary">
          <span> {data.en_txt} </span>
          <span> {data.ar_txt} </span>
        </h1>
        <p>{data.intro}</p>
        <a
          class="text-primary underline ml-auto"
          href="/{params.collection}/about"
        >Read more</a>
      </section>

      <section class="grid">
        {#each books as book, index}
          <a
            class="{index % 2 === 0 ? 'bg-secondary' : ''} p4 rounded"
            href="/{params.collection}/{book.id}"
          >
            {index + 1 + ".  "} {book.name}
          </a>
        {/each}
      </section>
    {:catch error}
      <p>Error loading books: {error.message}</p>
    {/await}
  </section>
</main>
