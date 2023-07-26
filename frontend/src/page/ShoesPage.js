import ContentTitle from "../components/ContentTitle.js";

class ShoesPage {
  constructor($main) {
    this.$main = $main;
  }
  render() {
    const title = new ContentTitle(this.$main, "신발페이지 테스트", "content_title");
    title.render();
  }
}

export default ShoesPage;
