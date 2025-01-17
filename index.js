let img = document.querySelector(".image");
let left = document.querySelector(".previous");
let right = document.querySelector(".next");

let images = [
  "https://wallpapercave.com/wp/wp7465405.jpg",
  "https://wallpapercave.com/wp/wp2740020.jpg",
  "https://costacartrader.com/wp-content/uploads/2023/02/Best-New-Sports-and-Performance-Cars-2022_Chevrolet_Corvette.jpg",
  "https://cdn.motor1.com/images/mgl/mrz1e/s1/4x3/coolest-cars-feature.webp",
  "https://www.creativefabrica.com/wp-content/uploads/2023/04/06/futuristic-sports-car-Modern-car-Graphics-66382336-1.jpeg",
];

let index = 0;
let last = images.length - 1;
img.setAttribute("src", images[index]);

function next() {
  if (index == last) {
    index = 0;
  } else {
    index += 1;
  }
  img.setAttribute("src", images[index]);
}
function previous() {
  if (index == 0) {
    index = last;
  } else {
    index -= 1;
  }
  img.setAttribute("src", images[index]);
}
let x = setInterval(() => {
  let random = Math.floor((Math.random() * 10) % 5);
  img.setAttribute("src", images[random]);

  // next()
}, 2000);
//  setTimeout(() => {
//     clearTimeout(x)
//  },5000);

let body = document.querySelector("body");
body.addEventListener("keydown", (e) => {
  if (e.key == "ArrowRight") {
    next();
  }
  if (e.key == "ArrowLeft") {
    previous();
  }
});
left.addEventListener("click", previous);
right.addEventListener("click", next);
