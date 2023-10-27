var nextTask;
var elemcounter =[0,0,0,0,0,0,0]
var taskBtn = document.getElementById("addBtn");
var dayBtn = document.getElementById("DayDropdown");
taskBtn.onclick = function(){
    var timeSelector = document.getElementById("timeSelector")
    var taskInp = document.getElementById("Task");
    var errorDivText = document.getElementById("taskErrorText");
    var errorDivDay = document.getElementById("taskErrorDay");
    var errorDivTime = document.getElementById("taskErrorTime");
    nextTask = taskInp.value;
    if (nextTask.trim() === '' || dayBtn.textContent === "" || timeSelector.value.trim() === '')
    {
        if (nextTask.trim() === '') {
            errorDivText.textContent = "Please Enter Your Task";
        } else {
            errorDivText.textContent = '';
        }
        if (dayBtn.textContent === '') {
            errorDivDay.textContent = "Please Enter Day Of The Task";
        } else {
            errorDivDay.textContent = '';
        }
        if (timeSelector.value.trim() === '') {
            errorDivTime.textContent = "Please Enter Time Of The Task";
        } else {
            errorDivTime.textContent = '';
        }
    }
    else{
        errorDivText.textContent = '';
        errorDivDay.textContent = '';
        errorDivTime.textContent = '';
        //!!!add row

        if (dayBtn.textContent === "Sunday"){
            var htmlcode = '<tr class = "table-danger"><th scope="row" class ="taskNameSunday"></th><td class ="timeToDoSunday"></td><td class = "doneStatement"><i class="Wrong-icon fa-regular fa-circle-xmark"></i></td></tr>'
            const tBody = document.getElementById("taskScheduleSunday");
            tBody.innerHTML+= htmlcode;
            //add Task
            var taskName = document.querySelectorAll(".taskNameSunday");
            taskName[elemcounter[0]].textContent = taskInp.value;
            //add Time
            var taskTime = document.querySelectorAll(".timeToDoSunday");
            taskTime[elemcounter[0]].textContent = timeSelector.value;
            elemcounter[0]++;
            console.log(elemcounter)
        }
        else if (dayBtn.textContent === "Monday"){
            var htmlcode = '<tr class = "table-danger"><th scope="row" class ="taskNameMonday"></th><td class ="timeToDoMonday"></td><td class = "doneStatement"><i class="Wrong-icon fa-regular fa-circle-xmark"></i></td></tr>'
            const tBody = document.getElementById("taskScheduleMonday");
            tBody.innerHTML+= htmlcode;
            //add Task
            var taskName = document.querySelectorAll(".taskNameMonday");
            taskName[elemcounter[1]].textContent = taskInp.value;
            //add Time
            var taskTime = document.querySelectorAll(".timeToDoMonday");
            taskTime[elemcounter[1]].textContent = timeSelector.value;
            elemcounter[1]++;
            console.log(elemcounter)
        }
        else if (dayBtn.textContent === "Tuesday"){
            var htmlcode = '<tr class = "table-danger"><th scope="row" class ="taskNameTuesday"></th><td class ="timeToDoTuesday"></td><td class = "doneStatement"><i class="Wrong-icon fa-regular fa-circle-xmark"></i></td></tr>'
            const tBody = document.getElementById("taskScheduleTuesday");
            tBody.innerHTML+= htmlcode;
            //add Task
            var taskName = document.querySelectorAll(".taskNameTuesday");
            taskName[elemcounter[2]].textContent = taskInp.value;
            //add Time
            var taskTime = document.querySelectorAll(".timeToDoTuesday");
            taskTime[elemcounter[2]].textContent = timeSelector.value;
            elemcounter[2]++;
            console.log(elemcounter)
        }
        else if (dayBtn.textContent === "Wednesday"){
            var htmlcode = '<tr class = "table-danger"><th scope="row" class ="taskNameWednesday"></th><td class ="timeToDoWednesday"></td><td class = "doneStatement"><i class="Wrong-icon fa-regular fa-circle-xmark"></i></td></tr>'
            const tBody = document.getElementById("taskScheduleWednesday");
            tBody.innerHTML+= htmlcode;
            //add Task
            var taskName = document.querySelectorAll(".taskNameWednesday");
            taskName[elemcounter[3]].textContent = taskInp.value;
            //add Time
            var taskTime = document.querySelectorAll(".timeToDoWednesday");
            taskTime[elemcounter[3]].textContent = timeSelector.value;
            elemcounter[3]++;
            console.log(elemcounter)
        }
        else if (dayBtn.textContent === "Thursday"){
            var htmlcode = '<tr class = "table-danger"><th scope="row" class ="taskNameThursday"></th><td class ="timeToDoThursday"></td><td class = "doneStatement"><i class="Wrong-icon fa-regular fa-circle-xmark"></i></td></tr>'
            const tBody = document.getElementById("taskScheduleThursday");
            tBody.innerHTML+= htmlcode;
            //add Task
            var taskName = document.querySelectorAll(".taskNameThursday");
            taskName[elemcounter[4]].textContent = taskInp.value;
            //add Time
            var taskTime = document.querySelectorAll(".timeToDoThursday");
            taskTime[elemcounter[4]].textContent = timeSelector.value;
            elemcounter[4]++;
            console.log(elemcounter)
        }
        else if (dayBtn.textContent === "Friday"){
            var htmlcode = '<tr class = "table-danger"><th scope="row" class ="taskNameFriday"></th><td class ="timeToDoFriday"></td><td class = "doneStatement"><i class="Wrong-icon fa-regular fa-circle-xmark"></i></td></tr>'
            const tBody = document.getElementById("taskScheduleFriday");
            tBody.innerHTML+= htmlcode;
            //add Task
            var taskName = document.querySelectorAll(".taskNameFriday");
            taskName[elemcounter[5]].textContent = taskInp.value;
            //add Time
            var taskTime = document.querySelectorAll(".timeToDoFriday");
            taskTime[elemcounter[5]].textContent = timeSelector.value;
            elemcounter[5]++;
            console.log(elemcounter)
        }
        else if (dayBtn.textContent === "Saturday"){
            var htmlcode = '<tr class = "table-danger"><th scope="row" class ="taskNameSaturday"></th><td class ="timeToDoSaturday"></td><td class = "doneStatement"><i class="Wrong-icon fa-regular fa-circle-xmark"></i></td></tr>'
            const tBody = document.getElementById("taskScheduleSaturday");
            tBody.innerHTML+= htmlcode;
            //add Task
            var taskName = document.querySelectorAll(".taskNameSaturday");
            taskName[elemcounter[6]].textContent = taskInp.value;
            //add Time
            var taskTime = document.querySelectorAll(".timeToDoSaturday");
            taskTime[elemcounter[6]].textContent = timeSelector.value;
            elemcounter[6]++;
            console.log(elemcounter)
        }
    }
    //Wrong Icon > Correct
    const wrongIcon = document.querySelectorAll('.Wrong-icon')
    wrongIcon.forEach(correction => {
        correction.addEventListener('click',function(){
            const divChange = correction.closest('.table-danger')
            divChange.classList.add('table-success')
            divChange.classList.remove('table-danger')
            correction.className = "Correct-icon fa-regular fa-circle-check"
        })
    })
}
//Drop down menu Function
const dropDownItems = document.querySelectorAll(".dropdown-item");
dropDownItems.forEach(item => {
    item.addEventListener("click",function(){
        dayBtn.textContent = item.textContent;
    })
})
var displayDay = 0;
//Switch Tap function
const dayAnchor = document.querySelectorAll('.nav-item a');
  dayAnchor.forEach((i,index) => {
    i.addEventListener('click', function (event) {
      dayAnchor[displayDay].classList.remove('active','text-dark')
      dayAnchor[displayDay].classList.add('text-secondary')
      displayDay = index;
      i.classList.add('active' , 'text-dark');
    });
  });
  function switchTab(tabId) {
    const tab = document.querySelector(tabId);
    if (tab) {
      const tabPane = new bootstrap.Tab(tab);
      tabPane.show();
    }
  }
  //Enter Key function
const inputField = document.getElementById("Task");
inputField.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        taskBtn.click(); 
    }});