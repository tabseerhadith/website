import authorData from "$lib/data/authors"

export const load = async ({ params }) => {
  const collection = authorData.find((x) => x.href === params.collection);
  const id = collection?.id || 1;

  const url = await fetch(`https://api.tabsirhadith.com/collections/${id}/books`);
  const data = await url.json();
  collection.books = data.sort((a, b) => a.visible_id - b.visible_id);

  return collection
};
