const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const form1 = document.querySelector(".form1");
const form2 = document.querySelector(".form2");
const msg = document.querySelector("#msg");
const msg1 = document.querySelector("#msg1");
const input2 = document.querySelector("#input2");
const input1 = document.querySelector("#input1");

const re =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const onSubmit = (e) => {
  e.preventDefault();

  if (re.test(input2.value.trim())) {
    msg.innerText = "Kindly check yout mail for confirmation link";
  } else {
    msg.innerText = `Please check your email`;
    input2.classList.add("border-2");
  }
  console.log(2);
  input2.value = "";
};

form2.addEventListener("submit", onSubmit);

form1.addEventListener("submit", (e) => {
  e.preventDefault();
  if (re.test(input1.value.trim())) {
    msg1.innerText = "Kindly check yout mail for confirmation link";
  } else {
    msg1.innerText = `Please check your email`;
    msg1.classList.add("text-red-500");
    input1.classList.remove("outline");
    input1.classList.add("border-2");
  }
  console.log(2);
  input1.value = "";
});
