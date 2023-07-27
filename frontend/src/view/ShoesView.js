import {
  productDiv,
  productImg,
  productH5,
  productP,
} from "../components/Product.js";

import { fetchData } from "../components/fetchProduct.js";

class ShoesView {
  constructor($page) {
    this.$page = $page;

    document.addEventListener("filterClicked", (event) => {
      const filterType = event.detail.filterType;
      this.sortShoesDataByPrice(filterType);
    });
  }

  async sortShoesDataByPrice(filterType) {
    const sortedShoesDates = await fetchData("shoesData");
    if (filterType === "price") {
      sortedShoesDates.sort((a, b) => b[filterType] - a[filterType]);
    }
    if (filterType === "name") {
      sortedShoesDates.sort((a, b) => {
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

    this.render(sortedShoesDates);
  }

  async render(sortedShoesDates) {
    const shoesContainer = document.createElement("div");
    shoesContainer.setAttribute("id", "product_container");

    let shoesDates = [];
    if (sortedShoesDates) {
      shoesDates = [...sortedShoesDates];
    } else {
      shoesDates = await fetchData("shoesData");
    }
    shoesDates.map((shoesData, idx) => {
      const img = productImg(shoesData.img);
      const h5 = productH5(shoesData.name);
      const p = productP(shoesData.price);

      const div = productDiv(idx + 1, img, h5, p);

      shoesContainer.appendChild(div);
    });

    this.$page.appendChild(shoesContainer);
  }
}

export default ShoesView;
