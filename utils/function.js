
export function getRandomDate(startDate, endDate) {
    const timeDiff = endDate.getTime() - startDate.getTime();
    const randomTime = Math.random() * timeDiff;
    const randomDate = new Date(startDate.getTime() + randomTime);
    return randomDate;
}

export const createEL = (type) => document.createElement(type);

export const datesContent = (item, parent) => {
    const dateItemEl = createEL("div");
    const dateEl = createEL("div");
    const dateTileEl = createEL("div");
    const dateTimeEl = createEL("div");

    dateItemEl.className = "dateItem"
    dateEl.className = "date"
    dateTileEl.className = "dateTile"
    dateTimeEl.className = "dateTime"
    dateEl.textContent = item.date.tiLocaleDateString()
    dateTileEl.textContent = item.title
    dateTimeEl.textContent = item.date.toLocaleTimeString()

    dateItemEl.append(dateEl, dateTileEl, dateTimeEl);
    parent.append(dateItemEl);

}

export const datesGen = (arr, parent) => {
    arr.forEach(element => {
        datesContent(element, parent)
    });
}