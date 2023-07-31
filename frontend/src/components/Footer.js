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
    const searchInput = filterInput("input-search", "제품 검색");
    searchDiv.appendChild(searchInput);

    const searchBtn = filterBtn("btn-search", "검색");

    searchBtn.addEventListener("click", () => {
      const searchText = searchInput.value;
      const event = new CustomEvent("filterClicked", {
        detail: {
          filterType: "find",
          filterValue: searchText, // Send the search text with the event
        },
      });
      document.dispatchEvent(event);
    });

    const moreProductBtn = filterBtn("btn-md", "상품 더보기");
    moreProductBtn.id = "btn-more-product";
    moreProductBtn.addEventListener("click", () => {
      const event = new CustomEvent("loadMoreClicked");
      document.dispatchEvent(event);
    });

    filterDiv.appendChild(moreProductBtn);

    const resetBtn = filterBtn("btn-reset", "RESET");

    resetBtn.addEventListener("click", () => {
      const event = new CustomEvent("filterClicked", {
        detail: {
          filterType: "reset",
        },
      });
      document.dispatchEvent(event);
    });

    searchDiv.appendChild(searchBtn);
    filterDiv.appendChild(resetBtn);
    filterDiv.appendChild(searchDiv);
    footerDiv.appendChild(filterDiv);

    this.$body.appendChild(footerDiv);
  }
}

export default Footer;
