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
  }
  async render() {
    const shoesContainer = document.createElement("div");
    shoesContainer.setAttribute("id", "product_container");

    const shoesDates = await fetchData("shoesData");
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
