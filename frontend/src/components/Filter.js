export const filterBtn = (className, text) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.classList.add(className);
  btn.appendChild(document.createTextNode(text));

  return btn;
};

export const filterInput = (className, placeholder) => {
  const input = document.createElement("input");
  input.setAttribute("placeholder", placeholder);
  input.classList.add("input");
  input.classList.add(className);

  return input;
};
