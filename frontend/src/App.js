import Header from "./components/Header.js";
import ProductPage from "./page/ProductPage.js";

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

    const productPage = new ProductPage(main);
    productPage.render();

    this.$body.appendChild(main);
  }
}

export default App;
