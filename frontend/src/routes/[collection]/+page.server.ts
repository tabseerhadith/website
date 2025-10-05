const kekw = [
  { id: 1, name: "abudawud" },
  { id: 2, name: "adab" },
  { id: 3, name: "ahmad" },
  { id: 4, name: "bukhari" },
  { id: 5, name: "bulugh" },
  { id: 6, name: "forty" },
  { id: 7, name: "hisn" },
  { id: 8, name: "ibnmajah" },
  { id: 9, name: "mishkat" },
  { id: 10, name: "muslim" },
  { id: 11, name: "nasai" },
  { id: 12, name: "riyadussalihin" },
  { id: 13, name: "shamail" },
  { id: 14, name: "tirmidhi" },
];

export const load = async ({ params }) => {
  const collection = kekw.find((x) => x.name === params.collection);
  const id = collection.id;

  const url = await fetch(`https://api.tabsirhadith.com/collections/${id}/books`);
  const data = await url.json();

  return { data };
};
