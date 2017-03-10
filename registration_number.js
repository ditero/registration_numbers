var InputTxt = document.getElementById('myText');
var eventBtn = document.getElementById('myBtn');
var listReg = document.getElementById('listReg')
var errorMsg = document.getElementById('errorMsg');

var addReg = function addNum(){
  var li = document.createElement('P');
  var mDiv = document.createElement("div");
  mDiv.className = 'container';

  if (InputTxt.value.length != 0) {

    mDiv.appendChild(li);
    li.textContent = InputTxt.value;
    listReg.appendChild(mDiv);

  }
  else {
    errorMsg.innerHTML = "Please enter registration number.";
  }


};

eventBtn.addEventListener('click',addReg);
