import ContentTitle from "../components/ContentTitle.js";
import ShoesView from "../view/ShoesView.js";

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

    const shoesView = new ShoesView(pageDiv);
    shoesView.render();
  }
}

export default ShoesPage;
