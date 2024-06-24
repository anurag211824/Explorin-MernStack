// async function main(){
//     const data= await fetch("https://opentdb.com/api.php?amount=10")
//     .then((res)=>{
//         return res.text();
//     })
//     .catch((err)=>console.error(err));
//     console.log(data);
// }

Questions = [];
quesTag = document.getElementById("ques");

async function fetchQuestions() {
  try {
    const resp = await fetch("https://opentdb.com/api/php?amount=10");

    if (!resp.ok) {
      throw new Error("could not fetch questions!");
    }
    const data = await resp.json();
    Questions = data.results;
  } catch (err) {
    console.error(err);
    ques.innerHTML = `
        <h5 style="background-color:"red">${err}</h5>
        
        `;
  }
}

let currentQuestions = 0;
let score = 0;

if (Questions.length == 0) {
  ques.innerHTML = `
    <h5>Please wait! <br> Loading Questions......</h5>
    `;
}
function loadQues() {
  const opt = document.getElementById("opt");

  let currentQuesText = Questions[currentQuestions].Questions;
  console.log(currentQuesText);
  ques.innerText = currentQuesText;

  opt.innerHTML = "";
  const correctAnswer = Questions[currentQuestions].correctAnswer;
  const incorrectAnswers = Questions[currentQuestions].incorrectAnswers;

  const options = [correctAnswer, ...incorrectAnswers];

  options.sort((o1, o2) => Math.random() < 0.5);
}
