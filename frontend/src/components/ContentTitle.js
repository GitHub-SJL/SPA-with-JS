class ContentTitle {
  constructor($upper, $title, $class) {
    this.$upper = $upper;
    this.$title = $title;
    this.$class = $class;
  }

  render() {
    const div = document.createElement("div");
    div.setAttribute("class", this.$class);

    const h1 = document.createElement("h1");
    h1.appendChild(document.createTextNode(this.$title));

    div.appendChild(h1);

    this.$upper.appendChild(div);

    return div;
  }
}

export default ContentTitle;
