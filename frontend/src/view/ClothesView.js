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
    this.currentData = [];
    this.showedData = [];
    this.showDataCount = 5;
    this.loadShoesData();

    document.addEventListener("filterClicked", (event) => {
      const filterType = event.detail.filterType;
      this.sortClothesDataByPrice(filterType);
    });
    document.addEventListener("loadMoreClicked", () => {
      this.showMoreProducts();
    });
  }
  async loadShoesData() {
    this.currentData = await fetchData("clothesData");
    this.showMoreProducts();
  }

  showMoreProducts() {
    const additionalData = this.currentData.slice(
      this.showedData.length,
      this.showedData.length + this.showDataCount
    );
    const moreProductBtn = document.querySelector("#btn-more-product");
    if (additionalData.length === 0) {
      const endOfProductsMessage = document.createElement("p");
      endOfProductsMessage.textContent = "더 이상 불러올 상품이 없습니다.";
      this.$page.appendChild(endOfProductsMessage);
      moreProductBtn.setAttribute("disabled", "");

      return;
    }
    moreProductBtn.removeAttribute("disabled");

    this.showedData = this.showedData.concat(additionalData);

    this.$page.innerHTML = "";
    this.render(this.showedData);
  }

  async sortClothesDataByPrice(filterType) {
    if (filterType === "price") {
      this.showedData.sort((a, b) => b[filterType] - a[filterType]);
    }
    if (filterType === "name") {
      this.showedData.sort((a, b) => {
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

    this.render(this.showedData);
  }

  async render(productsData) {
    const productsContainer = document.createElement("div");
    productsContainer.setAttribute("id", "product_container");

    productsData?.map((product, idx) => {
      const img = productImg(product.img);
      const h5 = productH5(product.name);
      const p = productP(product.price);

      const div = productDiv(idx + 1, img, h5, p);

      productsContainer.appendChild(div);
    });

    this.$page.appendChild(productsContainer);
  }
}

export default ClothesView;
