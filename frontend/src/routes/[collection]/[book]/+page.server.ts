export const load = async () => {
  const url = await fetch("https://api.tabsirhadith.com/books/1/chapters");
  const data = await url.json();
  console.log(data,'bru');

  return { data };
};
