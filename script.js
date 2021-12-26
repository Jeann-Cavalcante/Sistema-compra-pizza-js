const c = (el) => document.querySelector(el);
const cs = (el) => document.querySelectorAll(el);

pizzaJson.map((item, index) => {
  let pizzaItem = c(".models .pizza-item").cloneNode(true);

  pizzaItem.setAttribute("data-key", index);

  pizzaItem.querySelector(".pizza-item--img img").src = item.img;
  pizzaItem.querySelector(".pizza-item--price").innerHTML = `R$ ${item.price.toFixed(2)}`;
  pizzaItem.querySelector(".pizza-item--name").innerHTML = item.name;
  pizzaItem.querySelector(".pizza-item--desc").innerHTML = item.description;

  pizzaItem.querySelector('.abrir').addEventListener("click", (e) => {
    e.preventDefault();
    let key = e.target.closest(".pizza-item").getAttribute("data-key");

    c('.pizzaInfo h1').innerHTML = pizzaJson[key].name;

    //animação de abrir o card
    c(".pizzaWindowArea").style.opacity = "0";
    c('.pizzaWindowArea').style.display = "flex";
    setTimeout(() => {
      c(".pizzaWindowArea").style.opacity = "1";
    }, 200);
  });

  c(".pizza-area").append(pizzaItem);

  //cancelar e fechar o card
  c('.pizzaInfo--cancelButton').addEventListener("click", () => {
    c('.pizzaWindowArea').style.opacity = "0";
    setTimeout(() => {
      c('.pizzaWindowArea').style.display = "none";
    }, 200);
  });
});
