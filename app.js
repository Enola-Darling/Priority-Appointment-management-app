import { setGlobalArray} from "./utils/http.js";
import { datesGen, getRandomDate } from "./utils/function.js";

const getByPriority = (min, max) => listDate.filter((element) => 
        (min <= element.priority && element.priority <= max)).sort((a, b) => 
            a.date - b.date || a.priority - b.priority);

let listDate = []

const highPriorityWrapperEl = document.querySelector("#highPriorityDates .datesItems"); 
const mediumPriorityWrapperEl = document.querySelector("#mediumPriorityDates .datesItems"); 
const lowPriorityWrapperEl = document.querySelector("#lowPriorityDates .datesItems");
const completedButtonEl = document.querySelector(".completedButton");

setGlobalArray('/todos')
    .then(data => {
        listDate = data.map((element) => {
            element.priority = Math.floor(Math.random() * 6);
            element.date = getRandomDate(new Date('2023-01-01'), new Date('2023-12-31'))
            return element
        });
        console.log(listDate);
        const arrHighPriority = getByPriority(4, 6);
        const arrMediumPriority = getByPriority(2, 4);
        const arrLowPriority = getByPriority(0, 1);    
        datesGen(arrHighPriority, highPriorityWrapperEl);
        datesGen(arrMediumPriority, mediumPriorityWrapperEl);
        datesGen(arrLowPriority, lowPriorityWrapperEl);
    }); 

let buttonIsClicked = false;
completedButtonEl.addEventListener("click", (e) => {
    buttonIsClicked = !buttonIsClicked;
    let arrHighPriority = getByPriority(4, 6);
    let arrMediumPriority = getByPriority(2, 4);
    let arrLowPriority = getByPriority(0, 1);
    
    const filter = (x) => x.completed;
    if (!buttonIsClicked) {
        arrHighPriority = arrHighPriority.filter(filter);
        arrMediumPriority = arrMediumPriority.filter(filter);
        arrLowPriority = arrLowPriority.filter(filter);
        completedButtonEl.classList.add("active");
    } else {
        completedButtonEl.classList.remove("active");
    }
    datesGen(arrHighPriority, highPriorityWrapperEl);
    datesGen(arrMediumPriority, mediumPriorityWrapperEl);
    datesGen(arrLowPriority, lowPriorityWrapperEl);
});

