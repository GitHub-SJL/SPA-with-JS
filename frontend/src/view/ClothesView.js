import {
  productDiv,
  productImg,
  productH5,
  productP,
} from "../components/Product.js";

import { fetchData } from "../components/fetchProduct.js";

class ClothesView {
  constructor($page) {
    this.$page = $page;
    document.addEventListener("filterClicked", (event) => {
      const filterType = event.detail.filterType;
      this.sortClothesDataByPrice(filterType);
    });
  }

  async sortClothesDataByPrice(filterType) {
    const sortedClothesDates = await fetchData("clothesData");
    if (filterType === "price") {
      sortedClothesDates.sort((a, b) => b[filterType] - a[filterType]);
    }
    if (filterType === "name") {
      sortedClothesDates.sort((a, b) => {
        a = a[filterType].toLowerCase();
        b = b[filterType].toLowerCase();
        if (a > b) {
          return -1;
        }
        if (a < b) {
          return 1;
        }

        return 0;
      });
    }

    this.$page.innerHTML = "";

    this.render(sortedClothesDates);
  }

  async render(sortedClothesDates) {
    const clothesContainer = document.createElement("div");
    clothesContainer.setAttribute("id", "product_container");

    let clothesDates = [];

    if (sortedClothesDates) {
      clothesDates = [...sortedClothesDates];
    } else {
      clothesDates = await fetchData("clothesData");
    }
    clothesDates.map((clothesData, idx) => {
      const img = productImg(clothesData.img);
      const h5 = productH5(clothesData.name);
      const p = productP(clothesData.price);

      const div = productDiv(idx + 1, img, h5, p);

      clothesContainer.appendChild(div);
    });

    this.$page.appendChild(clothesContainer);
  }
}

export default ClothesView;
