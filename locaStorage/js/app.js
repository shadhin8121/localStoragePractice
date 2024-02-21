let form = document.querySelector("form");
let container = document.querySelector(".container");

function submitSmething(event) {
  event.preventDefault();
  let name = event.target.name.value;
  let email = event.target.email.value;
  let phone = event.target.phone.value;
  sendingDataToLocalStorage(name, email, phone);
  displayData();
}

function sendingDataToLocalStorage(name, email, phone) {
  try {
    let fk = localStorage.getItem("userDetails");
    let userDetails = fk ? JSON.parse(fk) : [];
    userDetails.push({
      name: name,
      email: email,
      phone: phone,
    });
    localStorage.setItem("userDetails", JSON.stringify(userDetails));
  } catch (err) {
    console.log(err);
  }
}

function displayData() {
  try {
    let datas = localStorage.getItem("userDetails");
    let userDetails = JSON.parse(datas);
    container.innerHTML = "";
    userDetails.forEach((value, index, array) => {
      let adds = `
      <div class="info">
      <div><b>name:</b> ${value.name}</div>

      <div><b>Email: </b>${value.email}</div>
      <div><b>Phone:</b> ${value.phone}</div>
    </div>
      `;
      container.innerHTML += adds;
    });
  } catch (error) {
    throw "there is something wrong";
  }
}

form.addEventListener("submit", submitSmething);
document.addEventListener("DOMContentLoaded", displayData);
