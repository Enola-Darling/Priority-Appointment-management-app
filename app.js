import { setGlobalArray} from "./utils/http.js";
import { getRandomDate} from "./utils/function.js";

let listDate = []

setGlobalArray('/todos')
    .then(data => {
        listDate = data.map((element) => {
            element.priority = Math.floor(Math.random() * 6);
            element.date = getRandomDate(new Date('2023-01-01'), new Date('2023-12-31'))
            return element
        });
        console.log(listDate);    
    }); 

const getByPriority = (min, max) => listDate.filter((element) => 
        (min <= element.priority && element.priority <= max));

   