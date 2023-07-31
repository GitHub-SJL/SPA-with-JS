import {
  productDiv,
  productImg,
  productH5,
  productP,
} from "../components/Product.js";

import { fetchData } from "../components/fetchProduct.js";

class ProductView {
  constructor($page, product) {
    this.productTest = product.data;
    this.$page = $page;
    this.currentData = [];
    this.showedData = [];
    this.unfilteredData = [];
    this.showDataCount = 5;
    this.loadShoesData();

    document.addEventListener("filterClicked", (event) => {
      const filter = event.detail;
      this.sortShoesDataByPrice(filter);
    });

    document.addEventListener("loadMoreClicked", () => {
      this.showMoreProducts();
    });
  }

  async loadShoesData() {
    this.currentData = await fetchData(`${this.productTest}`);
    this.showMoreProducts();
  }

  showMoreProducts() {
    const additionalData = this.currentData.slice(
      this.unfilteredData.length,
      this.unfilteredData.length + this.showDataCount
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
    this.showedData = this.unfilteredData.concat(additionalData);

    this.$page.innerHTML = "";
    this.render(this.showedData);

    this.unfilteredData = [...this.showedData];
  }

  async sortShoesDataByPrice(filter) {
    this.showedData = [...this.unfilteredData];
    if (filter.filterType === "price") {
      this.showedData.sort(
        (a, b) => b[filter.filterType] - a[filter.filterType]
      );
    }
    if (filter.filterType === "name") {
      this.showedData.sort((a, b) => {
        a = a[filter.filterType].toLowerCase();
        b = b[filter.filterType].toLowerCase();
        if (a > b) {
          return -1;
        }
        if (a < b) {
          return 1;
        }

        return 0;
      });
    }

    if (filter.filterType === "find") {
      const regex = new RegExp(filter.filterValue, "i");
      this.showedData = this.showedData.filter((item) =>
        item.name.match(regex)
      );
    }

    if (filter.filterType === "reset") {
      this.showedData = [];
      this.unfilteredData = [];
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

export default ProductView;
