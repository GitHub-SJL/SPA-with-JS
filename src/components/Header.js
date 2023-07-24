class Header {
  constructor($body) {
    this.$body = $body;
  }
  render() {
    // header 요소 생성
    const header = document.createElement("header");
    header.id = "page_header";

    // h1 요소 생성
    const h1 = document.createElement("h1");
    h1.classList.add("header-title");
    h1.textContent = "신발 판매";
    header.appendChild(h1);

    // nav 요소 생성
    const nav = document.createElement("nav");

    // a 요소 생성
    const shoesLink = document.createElement("a");
    shoesLink.href = "example.html";
    shoesLink.classList.add("nav-link");
    shoesLink.dataset.link = "";
    shoesLink.textContent = "신발";
    nav.appendChild(shoesLink);

    const clothLink = document.createElement("a");
    clothLink.href = "example-routing.html";
    clothLink.classList.add("nav-link");
    clothLink.dataset.link = "";
    clothLink.textContent = "옷";
    nav.appendChild(clothLink);

    // nav 요소를 header 요소에 추가
    header.appendChild(nav);

    // header 요소를 body에 추가
    this.$body.appendChild(header);
  }
}

export default Header;
