import ContentTitle from "../components/ContentTitle.js";
import ProductView from "../view/ProductView.js";
class ShoesPage {
  constructor($main) {
    this.$main = $main;
  }
  async render() {
    const pageDiv = document.createElement("div");
    pageDiv.setAttribute("class", "product_page");
    this.$main.appendChild(pageDiv);

    const title = new ContentTitle(pageDiv, "SPA 신발", "content_title");
    title.render();

    const shoesView = new ProductView(pageDiv, { data: "shoesData" });
    shoesView.render();
  }
}

export default ShoesPage;
