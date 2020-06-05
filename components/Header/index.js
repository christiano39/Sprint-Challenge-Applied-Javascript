// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header(date, temp) {
    const headerDiv = document.createElement('div')
    const dateSpan = document.createElement('span')
    const h1 = document.createElement('h1')
    const tempSpan = document.createElement('span')

    headerDiv.classList.add('header')
    dateSpan.classList.add('date')
    tempSpan.classList.add('temp')

    dateSpan.textContent = date
    h1.textContent = 'Lambda Times'
    tempSpan.textContent = temp

    headerDiv.appendChild(dateSpan)
    headerDiv.appendChild(h1)
    headerDiv.appendChild(tempSpan)

    return headerDiv
}

let today = 'June 5, 2020'
let todaysTemp = '85°'

const newHeader = Header(today, todaysTemp);
const headerContainer = document.querySelector('.header-container')

headerContainer.appendChild(newHeader)
