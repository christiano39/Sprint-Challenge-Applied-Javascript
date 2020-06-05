/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

const carouselContainer = document.querySelector('.carousel-container')

function Carousel(){
  const carouselDiv = document.createElement('div')
  const leftButton = document.createElement('div')
  const rightButton = document.createElement('div')
  const mountainImg = document.createElement('img')
  const computerImg = document.createElement('img')
  const treesImg = document.createElement('img')
  const turntableImg = document.createElement('img')

  carouselDiv.classList.add('carousel')
  leftButton.classList.add('left-button')
  rightButton.classList.add('right-button')
  leftButton.textContent = '<'
  rightButton.textContent = '>'

  mountainImg.src = './assets/carousel/mountains.jpeg'
  computerImg.src = './assets/carousel/computer.jpeg'
  treesImg.src = './assets/carousel/trees.jpeg'
  turntableImg.src = './assets/carousel/turntable.jpeg'

  //////////////////////////////////////////////

  const photos = [mountainImg, computerImg, treesImg, turntableImg]
  let i = 0
  photos[i].style.display = 'block'
  
  rightButton.addEventListener('click', e => {
    if (i < photos.length - 1){
      i++
      photos[i - 1].style.display = 'none'
      photos[i].style.display = 'block'
    }else {
      i = 0
      photos[photos.length - 1].style.display = 'none'
      photos[i].style.display = 'block'
    }
  })

  leftButton.addEventListener('click', e => {
    if (i > 0){
      i--
      photos[i + 1].style.display = 'none'
      photos[i].style.display = 'block'
    }else {
      i = photos.length - 1
      photos[0].style.display = 'none'
      photos[i].style.display = 'block'
    }
  })

  //////////////////////////////////////////////

  carouselDiv.appendChild(leftButton)
  carouselDiv.appendChild(mountainImg)
  carouselDiv.appendChild(computerImg)
  carouselDiv.appendChild(treesImg)
  carouselDiv.appendChild(turntableImg)
  carouselDiv.appendChild(rightButton)

  return carouselDiv
}

carouselContainer.appendChild(Carousel())