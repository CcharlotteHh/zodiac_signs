var xmlhttp = new XMLHttpRequest();
var url = "./assets/js/signs.json";

xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    data = JSON.parse(this.responseText);
    console.log(data);
    showData();
  }
};

xmlhttp.open("GET", url, true);
xmlhttp.send();

var current = 0;
var data = null;

function showData() {
  var previousBtn = document.getElementById("previousBtn");
  previousBtn.addEventListener("click", previousButton);
  var nextBtn = document.getElementById("nextBtn");
  nextBtn.addEventListener("click", nextButton);
  var nameContainer = document.getElementById("nameContainer");
  var dateContainer = document.getElementById("dateContainer");
  var traitContainer = document.getElementById("traitContainer");
  var img1 = document.getElementById("sign_img");
  img1.src = data[0].images;

  

  var name = data[0].name;
  var date = data[0].date;
  var trait = data[0].trait;
  
  nameContainer.innerHTML = `${name}`;
  dateContainer.innerHTML = `${date}`;
  traitContainer.innerHTML = `${trait}`;
  
}

function nextButton() {
  current++;
  if (current > data.length - 1) {
    current = 0;
  }
  update(current);
  console.log(current);
}

function previousButton() {
  current--;
  if (current < 0) {
    current = data.length - 1;
  }
  update(current);
  console.log(current);
}

function update(currentId) {
  var nameContainer = document.getElementById("nameContainer");
  var dateContainer = document.getElementById("dateContainer");
  var traitContainer = document.getElementById("traitContainer");
  var img1 = document.getElementById("sign_img");

  var name = data[currentId].name;
  var date = data[currentId].date;
  var trait = data[currentId].trait;

 
  img1.src = data[currentId].images;
  
  nameContainer.innerHTML = `${name}`;
  dateContainer.innerHTML = `${date}`;
  traitContainer.innerHTML = `${trait}`;

}
