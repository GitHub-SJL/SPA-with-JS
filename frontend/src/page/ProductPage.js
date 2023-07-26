import ContentTitle from "../components/ContentTitle.js";

class ProductPage {
  constructor($main) {
    this.$main = $main;
  }
  render() {
    const currentPath = window.location.pathname;

    console.log(currentPath);
    const title = new ContentTitle(this.$main, "테스트");
    title.render();
  }
}

export default ProductPage;
