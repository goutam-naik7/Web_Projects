let list = document.querySelectorAll(".list");
let itemBox = document.querySelectorAll(".itemBox");

for (let i = 0; i < list.length; i++) {
  // removing active of the current list
  list[i].addEventListener("click", function () {
    for (let j = 0; j < list.length; j++) {
      list[j].classList.remove("active");
    }

    // adding active to the clicked filter
    this.classList.add("active");

    // to filter the images
    let dataFilter = this.getAttribute("data-filter");

    for (let k = 0; k < itemBox.length; k++) {
      itemBox[k].classList.remove("active");
      itemBox[k].classList.add("hide");

      if (
        itemBox[k].getAttribute("data-item") == dataFilter ||
        dataFilter == "all"
      ) {
        itemBox[k].classList.remove("hide");
        itemBox[k].classList.add("active");
      }
    }
  });
}
