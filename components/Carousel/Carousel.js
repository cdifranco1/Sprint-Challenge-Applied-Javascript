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

const imgSrc = {
  mountains: "./assets/carousel/mountains.jpeg", 
  computer: "./assets/carousel/computer.jpeg",
  trees: "./assets/carousel/trees.jpeg",
  turntable: "./assets/carousel/turntable.jpeg"
}

function createCarousel(images){
  const container = document.createElement('div'),
        leftButton = document.createElement('div'),
        mountains = document.createElement('img'),
        computer = document.createElement('img'),
        trees = document.createElement('img'),
        turntable = document.createElement('img');
        rightButton = document.createElement('div')

  container.classList.add("carousel");
  leftButton.classList.add("left-button");
  rightButton.classList.add("right-button");

  leftButton.textContent = '<';
  rightButton.textContent = '>';

  mountains.src = images.mountains;
  computer.src = images.computer;
  trees.src = images.trees;
  turntable.src = images.turntable;

  container.append(leftButton, mountains, computer, trees, turntable, rightButton)

  let currentIndex = 0;
  mountains.style.display = 'block';

  leftButton.addEventListener("click", () => {
    const imgs = Array.from(document.querySelectorAll('.carousel img'));
    if (currentIndex !== 0){
      imgs[currentIndex].style.display = 'none';
      imgs[currentIndex - 1].style.display = 'block';
      currentIndex--;
    } else {
      imgs[currentIndex].style.display = 'none';
      imgs[imgs.length - 1].style.display = 'block';
      currentIndex = imgs.length - 1;
    }
  })

  rightButton.addEventListener("click", () => {
    const imgs = Array.from(document.querySelectorAll('.carousel img'));
    if (currentIndex !== (imgs.length - 1)){
      imgs[currentIndex].style.display = 'none';
      imgs[currentIndex + 1].style.display = 'block';
      currentIndex++;
    } else {
      imgs[currentIndex].style.display = 'none';
      imgs[0].style.display = 'block';
      currentIndex = 0;
    }
  })

  return container;
}


document.querySelector('.carousel-container').append(createCarousel(imgSrc));