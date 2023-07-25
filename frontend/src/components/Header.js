class Header {
  constructor($body) {
    this.$body = $body;
    this.h1 = document.createElement("h1");
    this.shoesLink = document.createElement("div");
    this.clothLink = document.createElement("div");
  }

  updateProduct(path) {
    if (path === "/") {
      this.h1.textContent = "신발 판매";
      this.shoesLink.classList.add("active");
      this.clothLink.classList.remove("active");
    } else if (path === "/clothes/") {
      this.h1.textContent = "옷 판매";
      this.clothLink.classList.add("active");
      this.shoesLink.classList.remove("active");
    }
  }

  render() {
    // header 요소 생성
    const header = document.createElement("header");
    header.id = "page_header";

    // 현재 페이지 주소 감지
    const currentPath = window.location.pathname;

    console.log(currentPath);

    // h1 요소 생성
    this.h1.classList.add("header-title");
    this.updateProduct(currentPath);
    header.appendChild(this.h1);

    // nav 요소 생성
    const nav = document.createElement("nav");

    // shoesLink 속성 설정
    this.shoesLink.classList.add("nav-link");
    this.shoesLink.dataset.link = "";
    this.shoesLink.textContent = "신발";
    this.shoesLink.style.cursor = "pointer";

    // shoesLink 클릭 이벤트
    this.shoesLink.addEventListener("click", (e) => {
      window.history.pushState("", "", "/");
      this.updateProduct("/");
      const urlChange = new CustomEvent("urlchange", {
        detail: { href: "/" },
      });
      document.dispatchEvent(urlChange);
    });

    nav.appendChild(this.shoesLink);

    // clothLink 속성 생성
    this.clothLink.classList.add("nav-link");
    this.clothLink.dataset.link = "";
    this.clothLink.textContent = "옷";
    this.clothLink.style.cursor = "pointer";

    // clothLink 클릭 이벤트
    this.clothLink.addEventListener("click", (e) => {
      window.history.pushState("", "", "/clothes/");
      this.updateProduct("/clothes/");
      const urlChange = new CustomEvent("urlchange", {
        detail: { href: "/clothes/" },
      });
      document.dispatchEvent(urlChange);
    });

    nav.appendChild(this.clothLink);

    // nav 요소를 header 요소에 추가
    header.appendChild(nav);

    // header 요소를 body에 추가
    this.$body.appendChild(header);
  }
}

export default Header;
