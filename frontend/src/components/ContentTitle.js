class ContentTitle {
  constructor($page, $title, $class) {
    this.$page = $page;
    this.$title = $title;
    this.$class = $class;
  }

  render() {
    const div = document.createElement("div");
    div.setAttribute("class", this.$class);

    const h1 = document.createElement("h1");
    h1.appendChild(document.createTextNode(this.$title));

    div.appendChild(h1);

    this.$page.appendChild(div);

    return div;
  }
}

export default ContentTitle;
