const desserts = [
  {
    dessert: "How about eating cake?๐ฐ",
    todaysDessert: "Today's recommended dessert",
    img: "cake.jpg",
    comment: "์ผ์ดํฌ๋ ์ ๋์์ฆ๊ฐ ์ด์ดํ \n๋ธ๊ธฐ ์ผํธ ์ผ์ดํฌ๊ฐ ์ฒด๊ณ !๐ฐ",
  },
  {
    dessert:"Purrr ~~ pudding๐ฎ",
    todaysDessert: "Today's recommended dessert",
    img: "pudding.jpg",
    comment: "์ด์ง ์ด ๋ง์ด ๋๋ ์บฌ๋ผ๋ฉ ์๋ฝ์ \n์ปค์คํ๋ ํธ๋ฉ์ ์์์ ์ด์ด ๋น๋๋ต๋๋ค๐ฎ๐",
},
  {
    dessert: "cookies",
    todaysDessert: "Today's recommended dessert",
    img: "cookie.jpg",
    comment: "๐ช๋ ์ ๊ฐ ๋ง๋  ์ด์ฝ์นฉ ์ฟ ํค๊ฐ \n์ ์ผ ๋ง๋์ ใใ",
},
  {
    dessert: "crepe",
    todaysDessert: "Today's recommended dessert",
    img: "crepe.jpg",
    comment: "๐ํฌ๋ ํ์๋ ๊ณผ์ผ์ด๋ ๊ณผ์๋\n ์์ด์คํฌ๋ฆผ ์ด๊ฒ์ ๊ฒ ๋ค์ด๊ฐ๊ณ  \n๋ฐ์ญํด์ ์ข์์๐ฆ",
},
];


const dessertBox = document.querySelector("#dessert-box");
const dessertImg = document.getElementById("dessert-img");
const todaysDessert = desserts[Math.floor(Math.random() * desserts.length)];
const recommendedDessert = document.querySelector(".dessert span:first-child");
const dessertName = document.querySelector(".dessert span:last-child");

recommendedDessert.innerText = todaysDessert.todaysDessert;
dessertName.innerText = todaysDessert.dessert;

const img = document.createElement("img");
img.src = todaysDessert.img;
dessertImg.appendChild(img);

const commentDiv = document.createElement("div");
commentDiv.innerText = todaysDessert.comment;
dessertBox.appendChild(commentDiv);
