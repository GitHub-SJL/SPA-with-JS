import Header from "./components/Header.js";
import ShoesPage from "./page/ShoesPage.js";
import ClothesPage from "./page/ClothesPage.js";
class App {
  constructor($body) {
    this.$body = $body;
    this.render();
  }

  render() {
    const header = new Header(this.$body);
    header.render();

    const main = document.createElement("main");
    main.setAttribute("id", "page_content");

    const clothesPage = new ClothesPage(main);
    const shoesPage = new ShoesPage(main);

    // main을 렌더링하는 함수
    const renderPage = (page) => {
      while (main.firstChild) {
        main.removeChild(main.firstChild);
      }
      page.render();
    };

    // url에 따라 main 렌더링
    document.addEventListener("urlchange", (e) => {
      let pathname = e.detail.href;

      switch (pathname) {
        case "/":
          renderPage(shoesPage);
          break;
        case "/clothes/":
          renderPage(clothesPage);
          break;
        default:
      }
    });

    this.$body.appendChild(main);
  }
}

export default App;
