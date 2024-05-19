let startBtn = document.getElementById("start_btn");
let resetBtn = document.getElementById("reset_btn");
let stopBtn = document.getElementById("stop_btn");
let getTimeBtn = document.getElementById("getTime_btn");
let clearTimeBtn = document.getElementById("clearTime_btn");
let counterText = document.getElementById("counterText");
let getTimeDetails = document.getElementById("time_details");

let counter = 0;
let intervalID;
const startTimer = () => {
  intervalID = setInterval(() => {
    counterText.innerText = counter++;
  }, 1000);
};

const resetTimer = () => {
  counter = 0;
  counterText.innerText = counter;
  clearInterval(intervalID);
};

const stopTimer = () => {
  clearInterval(intervalID);
};

const getTime = () => {
  const para = document.createElement("p");
  para.innerText = `The stop time is  ${counter - 1}`;
  getTimeDetails.append(para);
};

const clearTime = () => {
  getTimeDetails.innerText = "";
};
startBtn.addEventListener("click", startTimer);

resetBtn.addEventListener("click", resetTimer);

stopBtn.addEventListener("click", stopTimer);

getTimeBtn.addEventListener("click", getTime);

clearTimeBtn.addEventListener("click", clearTime);
