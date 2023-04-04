const viewsCountElement = document.getElementById('views-count');

let viewsCount = parseInt(localStorage.getItem('viewsCount')) || 0;
viewsCountElement.textContent = viewsCount;

function incrementViewsCount() {
  viewsCount++;
  viewsCountElement.textContent = viewsCount;
  localStorage.setItem('viewsCount', viewsCount);
}

window.addEventListener('load', incrementViewsCount);
