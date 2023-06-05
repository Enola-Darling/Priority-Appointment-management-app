import { setGlobalArray } from "./utils/http.js";

let listDate = []


setGlobalArray('/todos')
    .then(data => {
        listDate = data.map((element) => {
            element.priority = Math.floor(Math.random() * 6);
            return element
        });
        console.log(listDate);    
    }); 

const getByPriority = (min, max) => {
    const result = []
    listDate.forEach((element) => {
        if (min <= element.priority && element.priority <= max) {
            result.push(element)
        }
    })
    return result
}

   