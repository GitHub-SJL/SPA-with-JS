export const productDiv = (index, img, h5, p) => {
  const product_div = document.createElement("div");
  product_div.setAttribute("key", Number(index));
  product_div.setAttribute("class", "shoes");

  product_div.appendChild(img);
  product_div.appendChild(h5);
  product_div.appendChild(p);

  return product_div;
};
export const productImg = (src) => {
  const product_img = document.createElement("img");
  product_img.setAttribute("src", src);
  product_img.setAttribute("class", "shoes-img");

  return product_img;
};
export const productH5 = (name) => {
  const product_h5 = document.createElement("h5");
  product_h5.setAttribute("class", "shoes-name");
  product_h5.appendChild(document.createTextNode(name));
  return product_h5;
};
export const productP = (price) => {
  const product_p = document.createElement("p");
  product_p.setAttribute("class", "shoes-price");
  product_p.appendChild(document.createTextNode(price));

  return product_p;
};
