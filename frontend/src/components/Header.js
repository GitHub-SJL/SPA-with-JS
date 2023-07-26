import ContentTitle from "./ContentTitle.js";

class Header {
  constructor($body) {
    this.$body = $body;
  }
  createLinkDiv(divClass, text) {
    const div = document.createElement("div");
    div.setAttribute("class", divClass);
    div.appendChild(document.createTextNode(text));
    return div;
  }

  render() {
    // DOM 노드 생성
    const header = document.createElement("header");
    header.setAttribute("id", "page_header");
    const title = new ContentTitle(this.$body, "SPA 쇼핑몰", "header-title");
    const headerTitle = title.render();
    const nav = document.createElement("nav");
    const shoesLink = this.createLinkDiv("nav-link", "신발");
    const clothesLink = this.createLinkDiv("nav-link", "옷");

    // link 클릭시 url 변경
    shoesLink.addEventListener("click", () => {
      window.history.pushState("", "", "/");
      shoesLink.classList.add("active");
      clothesLink.classList.remove("active");
      const urlChange = new CustomEvent("urlchange", {
        detail: { href: "/" },
      });
      document.dispatchEvent(urlChange);
    });

    clothesLink.addEventListener("click", () => {
      window.history.pushState("", "", "/clothes/");
      clothesLink.classList.add("active");
      shoesLink.classList.remove("active");
      const urlChange = new CustomEvent("urlchange", {
        detail: { href: "/clothes/" },
      });
      document.dispatchEvent(urlChange);
    });

    nav.appendChild(shoesLink);
    nav.appendChild(clothesLink);

    // DOM 트리에 노드 연결
    header.appendChild(headerTitle);
    header.appendChild(nav);
    this.$body.appendChild(header);
  }
}

export default Header;
