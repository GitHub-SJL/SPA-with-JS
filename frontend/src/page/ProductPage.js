import ContentTitle from "../components/ContentTitle.js";

class ProductPage {
  constructor($main) {
    this.$main = $main;
  }
  render() {
    const title = new ContentTitle(this.$main, "테스트", "content_title");
    title.render();
  }
}

export default ProductPage;
