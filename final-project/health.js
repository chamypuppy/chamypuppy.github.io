const healths = [
  {
    healths: "πͺμμ²΄(16λΆ)π\nπμ μ°μ(11λΆ)πββοΈ",
    todayshealth: "μ€λμ μμ²΄ κ·Όλ ₯ + μ μ°μ",
  },
  {
    healths:"π¦΅νμ²΄(16λΆ)π\nπμ μ°μ(11λΆ)πββοΈ",
    todayshealth: "μ€λμ νμ²΄ κ·Όλ ₯ + μ μ°μ",
    img: "pudding.png",
},
  {
    healths: "πμ€λμ νΉ μ¬μΈμ~!π",
    todayshealth: "πμ€λμ μ¬λ λ !π",
},
  {
    healths: "πββοΈλ³΅λΆ(7λΆ)π\nπμ μ°μ(11λΆ)πββοΈ",
    todayshealth: "μ€λμ λ³΅λΆ μ΄λ + μ μ°μ",
},
  {
    healths: "πμ€μΏΌνΈ νλ°ν(12λΆ)πββοΈ\nπμ μ°μ(11λΆ)πββοΈ",
    todayshealth: "μ€λμ μ€μΏΌνΈ νλ°ν + μ μ°μ",
},
];

const health = document.getElementById("health");
const toDaysHealth = healths[Math.floor(Math.random() * healths.length)];

const recommendedhealth = document.querySelector("#health span:first-child");
const recommendedExercise = document.querySelector("#health span:last-child");

recommendedhealth.innerText = toDaysHealth.todayshealth;
recommendedExercise.innerText =toDaysHealth.healths;