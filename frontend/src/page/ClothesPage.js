import ContentTitle from "../components/ContentTitle.js";
import ClothesView from "../view/ClothesView.js";
class ClothesPage {
  constructor($main) {
    this.$main = $main;
  }
  render() {
    const pageDiv = document.createElement("div");
    pageDiv.setAttribute("class", "product_page");
    this.$main.appendChild(pageDiv);

    const title = new ContentTitle(pageDiv, "SPA 옷", "content_title");
    title.render();

    const clothesView = new ClothesView(pageDiv);
    clothesView.render();
  }
}

export default ClothesPage;
