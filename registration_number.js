var InputTxt = document.getElementById('myText');
var eventBtn = document.getElementById('myBtn');
var listReg = document.getElementById('listReg')

var addReg = function addNum(){
  var li = document.createElement('P');
  var mDiv = document.createElement("div");
  mDiv.className = 'container';
  mDiv.appendChild(li);
  li.textContent = InputTxt.value;
  listReg.appendChild(mDiv);
  console.log(InputTxt.value);
};

eventBtn.addEventListener('click',addReg);
