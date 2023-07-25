import Header from "./components/Header.js";

class App {
  constructor($body) {
    this.$body = $body;
    this.render();
  }
  render() {
    const header = new Header(this.$body);
    header.render();
  }
}

export default App;
