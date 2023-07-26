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
  }
  async render() {
    const clothesContainer = document.createElement("div");
    clothesContainer.setAttribute("id", "shoes_container");

    const clothesDates = await fetchData("clothesData");
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
