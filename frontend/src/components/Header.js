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
    const header = document.createElement("header");
    header.setAttribute("id", "page_header");
    
    const title = new ContentTitle(this.$body, "SPA 쇼핑몰", "header-title");
    const headerTitle = title.render();

    const nav = document.createElement("nav");
    const shoesLink = this.createLinkDiv("nav-link", "신발");
    const clothesLink = this.createLinkDiv("nav-link", "옷");

    // 다른 페이지로 이동할 수 있도록 이벤트 리스너를 추가
    headerTitle.addEventListener("click", () => {
      window.history.pushState("", "", "/");
      const urlChange = new CustomEvent("urlchange", {
        detail: { href: "/" },
      });
      document.dispatchEvent(urlChange);
    });

    shoesLink.addEventListener("click", () => {
      window.history.pushState("", "", "/shoes/");
      shoesLink.classList.add("active");
      clothesLink.classList.remove("active");
      const urlChange = new CustomEvent("urlchange", {
        detail: { href: "/shoes/" },
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

    // DOM 트리에 노드 연결
    nav.appendChild(shoesLink);
    nav.appendChild(clothesLink);
    header.appendChild(headerTitle);
    header.appendChild(nav);
    this.$body.appendChild(header);
  }
}

export default Header;
