export const load = async ({params}) => {

  const id = params.book
  const url = `https://api.tabsirhadith.com/books/${id}/chapters`
  const resp = await fetch(url);
  const data = await resp.json();

  return { data };
};
