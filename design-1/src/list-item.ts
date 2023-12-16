export type ListItem = {
  title: string;
  imageUrl: string;
  label: string;
};

export const generateListItem = ({ title, imageUrl, label }: ListItem) => {
  return `
    <li class="card">
      <h4>${title}</h4>
      <div class="card-image">
        <img src=${imageUrl} alt="${imageUrl}" loading="lazy" />
        <label>${label}</label>
      </div>
    </li>
  `;
};

export const setupWorkList = async () => {
  const worksList = document.querySelector("#works_list")!;

  const data: ListItem[] = [
    {
      title: "Ecommerce Landing page",
      imageUrl: "/works/1.png",
      label: "11 days",
    },
    {
      title: "Basketball Studio",
      imageUrl: "/works/2.png",
      label: "9 days",
    },
    {
      title: "Perfume Company site",
      imageUrl: "/works/3.png",
      label: "10 days",
    },
    {
      title: "Health care site",
      imageUrl: "/works/4.png",
      label: "11 days",
    },
    {
      title: "Real Estate",
      imageUrl: "/works/5.png",
      label: "7 days",
    },
    {
      title: "Bank Wallet",
      imageUrl: "/works/6.png",
      label: "5 days",
    },
  ];

  data.forEach((e) => {
    const listItem = generateListItem(e);
    worksList.insertAdjacentHTML("beforeend", listItem);
  });
};