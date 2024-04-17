const form = document.getElementById("form");
const nameInp = document.getElementById("name");
const surnameInp = document.getElementById("surname");
const ageInp = document.getElementById("age");
const nationality = document.getElementById("nationality");
const position = document.getElementById("position");
const experience = document.getElementById("experience");
const table = document.getElementById("table");
const del = document.getElementById("delete");
const edit = document.getElementById("edit");

let workers = [];
let id = 0;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let newWorker = {
    id: id,
    name: nameInp.value,
    surname: surnameInp.value,
    age: ageInp.value,
    nationality: nationality.value,
    position: position.value,
    experience: experience.value,
  };

  let check = true;
  for (let i = 0; i < workers.length; i++) {
    if (newWorker.name == workers[i].name) {
      check = false;
    }
  }
  if (check) {
    workers.push(newWorker);
  } else {
    alert("Bu ad artiq siyahida var basqa ad qeyd eliyin");
  }

  nameInp.value = "";
  surnameInp.value = "";
  ageInp.value = "";
  nationality.value = "Azerbaijan";
  position.value = "Frontend";
  experience.value = "Junior";

  id++;

  renderUI(workers);
});

const renderUI = (items) => {
  let innerHTML = "";

  for (let i = 0; i < items.length; i++) {
    innerHTML += `
        <tr>
            <td >${workers[i].name}</td>
            <td>${workers[i].surname}</td>
            <td>${workers[i].age}</td>
            <td>${workers[i].nationality}</td> 
            <td>${workers[i].position}</td> 
            <td>${workers[i].experience}</td>
            <td><button onclick="deleteHandler(${workers[i].id})" id="delete" class="btn btn-danger ">delete</button></td>
            <td><button onclick="editHandler(${workers[i].id})" id="edit" class="btn btn-primary  ">edit</button></td> 
        </tr>`;
  }

  table.innerHTML = innerHTML;
};

const deleteHandler = (id) => {
  let target = workers.find((x) => x.id == id);
  let indexOftarget = workers.indexOf(target);
  workers.splice(indexOftarget, 1);
  renderUI(workers);
};

const editHandler = (id) => {
  let target = workers.find((x) => x.id == id);
  let newName = prompt("Yeni ad daxil edin");
  let newSurName = prompt("Yeni soyad daxil edin");
  let newAge = prompt("yas daxil edin");
  let newNationality = prompt("Yeni nationalitydaxil edin");
  let newPosition = prompt("Yeni positiondaxil edin");
  let newExperience = prompt("experience daxil edin");
  target.name = newName;
  target.surname = newSurName;
  target.age = newAge;
  target.nationality = newNationality;
  target.position = newPosition;
  target.experience = newExperience;
  renderUI(workers);
};
