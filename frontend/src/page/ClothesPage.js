import ContentTitle from "../components/ContentTitle.js";

class ClothesPage {
  constructor($main) {
    this.$main = $main;
  }
  render() {
    const title = new ContentTitle(this.$main, "옷페이지 테스트", "content_title");
    title.render();
  }
}

export default ClothesPage;
