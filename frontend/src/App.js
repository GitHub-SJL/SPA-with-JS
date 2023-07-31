import Header from "./components/Header.js";
import MainPage from "./page/mainPage.js";
import ShoesPage from "./page/ShoesPage.js";
import ClothesPage from "./page/ClothesPage.js";
import Footer from "./components/Footer.js";

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

    const mainPage = new MainPage(main);
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
          renderPage(mainPage);
          break;
        case "/shoes/":
          renderPage(shoesPage);
          break;
        case "/clothes/":
          renderPage(clothesPage);
          break;
      }
    });
    this.$body.appendChild(main);

    const footer = new Footer(this.$body, main);
    footer.render();
  }
}

export default App;
