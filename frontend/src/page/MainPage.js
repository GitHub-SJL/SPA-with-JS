import ContentTitle from "../components/ContentTitle.js";
class MainPage {
  constructor($main) {
    this.$main = $main;
  }
  render() {
    const pageDiv = document.createElement("div");
    pageDiv.setAttribute("class", "product_page");
   

    const title = new ContentTitle(this.$main, "메인 페이지", "content_title");
    title.render();


   
  }
}

export default MainPage;
