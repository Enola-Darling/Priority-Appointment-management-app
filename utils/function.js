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
  const infoDateWrapper = createEL("div");
  const dateTileEl = createEL("div");
  const iconTimeWrapper = createEL("div");
  const timeIcon = createEL("i");
  // <i class="fa-solid fa-clock" style="color: #808080;"></i>
  const dateTimeEl = createEL("div");

  dateItemEl.className = "dateItem";
  dateEl.className = "date";
  infoDateWrapper.className = "infoWrapper";
  dateTileEl.className = "dateTile";
  iconTimeWrapper.className = "iconWrapper";
  dateTimeEl.className = "dateTime";
  timeIcon.className = "fa-solid fa-clock";
  dateEl.textContent = item.date.toLocaleDateString();
  dateTileEl.textContent = item.title;
  dateTimeEl.textContent = item.date.toLocaleTimeString();

  if (item.completed) {
    dateItemEl.classList.add("completedDate");
  }
  iconTimeWrapper.append(timeIcon, dateTimeEl);
  infoDateWrapper.append(dateTileEl, iconTimeWrapper);
  dateItemEl.append(dateEl, infoDateWrapper);
  return dateItemEl;
};

export const datesGen = (arr, parent) => {
  parent.innerHTML = "";
  arr.forEach((e) => {
    const element = getDatesContentEl(e);
    parent.append(element);
  });
};
