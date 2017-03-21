var InputTxt = document.getElementById('myText');
var eventBtn = document.getElementById('myBtn');
var listReg = document.getElementById('listReg')
var errorMsg = document.getElementById('errorMsg');
var locations = document.getElementsByClassName('myLocations');


var registeredNum = [];
registeredNum.type;
var addReg = function addNum(){
var er = "Please enter registration number.";
  var li = document.createElement('P');
  var mDiv = document.createElement("div");
  mDiv.className = 'container';
var addTxt =  InputTxt.value;
var regNum = addTxt.toUpperCase();
  if (addTxt.length != 0) {
    registeredNum.push(regNum);
    mDiv.appendChild(li);
    li.textContent = regNum;
    listReg.appendChild(mDiv);
    errorMsg.innerHTML = "";
   InputTxt.value = "";
  }
  else {
    errorMsg.innerHTML = er;
  }

};

function findLoc(){

  while(listReg.hasChildNodes()) {
      listReg.removeChild(listReg.firstChild);
  }

    for (var i = 0; i < locations.length; i++) {

        for(var x = 0; x< registeredNum.length; x++){

              if(registeredNum[x].startsWith(locations[i].value)||registeredNum[x].endsWith(locations[i].value)){
            var li = document.createElement('P');
              var mDiv = document.createElement("div");
              mDiv.className = 'container';
                var dspR = registeredNum[x];
                mDiv.appendChild(li);
                li.textContent = dspR;
                listReg.appendChild(mDiv);
            }
            else if (locations[i].value === 'ALL') {
              var li = document.createElement('P');
              var mDiv = document.createElement("div");
              mDiv.className = 'container';
                var dspR = registeredNum[x];
                mDiv.appendChild(li);
                li.textContent = dspR;
                listReg.appendChild(mDiv);
            }

        }

    }

};
eventBtn.addEventListener('click',addReg);
