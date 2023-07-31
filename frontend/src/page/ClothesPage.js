import ContentTitle from "../components/ContentTitle.js";
import ProductView from "../view/ProductView.js";
class ClothesPage {
  constructor($main) {
    this.$main = $main;
  }
  render() {
    const pageDiv = document.createElement("div");
    pageDiv.setAttribute("class", "product_page");
   

    const title = new ContentTitle(this.$main, "SPA 옷", "content_title");
    title.render();


    const clothesView = new ProductView(pageDiv, { data: "clothesData" });
    clothesView.render();
    this.$main.appendChild(pageDiv);
 
   
  }
}

export default ClothesPage;
