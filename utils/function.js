
export function getRandomDate(startDate, endDate) {
    const timeDiff = endDate.getTime() - startDate.getTime();
    const randomTime = Math.random() * timeDiff;
    const randomDate = new Date(startDate.getTime() + randomTime);
    return randomDate;
}

export const createEL = (type) => document.createElement(type);

export const getDatesContentEl = (item) => {
    
    const dateItemEl = createEL("div");
    const dateEl = createEL("div");
    const dateTileEl = createEL("div");
    const dateTimeEl = createEL("div");

    dateItemEl.className = "dateItem"
    dateEl.className = "date"
    dateTileEl.className = "dateTile"
    dateTimeEl.className = "dateTime"
    dateEl.textContent = item.date.toLocaleDateString()
    dateTileEl.textContent = item.title
    dateTimeEl.textContent = item.date.toLocaleTimeString()

    if (item.completed) {
        dateItemEl.classList.add("completedDate");
    }

    dateItemEl.append(dateEl, dateTileEl, dateTimeEl);
    return dateItemEl
}

export const datesGen = (arr, parent) => {
    parent.innerHTML = "";
    arr.forEach(e => {
        const element = getDatesContentEl(e)
        parent.append(element);

    });
}