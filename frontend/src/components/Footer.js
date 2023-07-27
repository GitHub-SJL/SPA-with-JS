import { filterBtn, filterInput } from "./Filter.js";

class Footer {
  constructor($body) {
    this.$body = $body;
  }
  render() {
    const footerDiv = document.createElement("footer");
    footerDiv.setAttribute("id", "page_footer");

    const filterDiv = document.createElement("div");
    filterDiv.setAttribute("class", "footer-filter");
    
    filterDiv.appendChild(filterBtn("btn-md", "상품 더보기"));

    const priceSortBtn = filterBtn("btn-md", "가격순 정렬");
    priceSortBtn.addEventListener("click", () => {
      const event = new CustomEvent("filterClicked", {
        detail: { filterType: "price" },
      });
      document.dispatchEvent(event);
    });

    filterDiv.appendChild(priceSortBtn);

    const nameSortBtn = filterBtn("btn-md", "다나가순 정렬");
    nameSortBtn.addEventListener("click", () => {
      const event = new CustomEvent("filterClicked", {
        detail: { filterType: "name" },
      });
      document.dispatchEvent(event);
    });
    filterDiv.appendChild(nameSortBtn);

    const searchDiv = document.createElement("div");
    searchDiv.setAttribute("class", "search");
    searchDiv.appendChild(filterInput("input-search", "가격 검색"));
    searchDiv.appendChild(filterBtn("btn-search", "검색"));

    filterDiv.appendChild(searchDiv);
    footerDiv.appendChild(filterDiv);

    this.$body.appendChild(footerDiv);
  }
}

export default Footer;
