

// export const prerender = true;

export const load = async () => {
  const res = await fetch('https://api.tabsirhadith.com/collections');
  const data = await res.json();

  console.log(data);

  return {
    collections: data,
  };
};
