
let carouselItems = document.querySelectorAll('.carousel-items');
let numbersOfItems = 5

function startCarousel() {
  for (let numbersOfItems = 0; numbersOfItems.length; numbersOfItems++){
    const carouselItems = document.querySelectorAll('.carousel-items');
    const translateXValue = -numbersOfItems * 100;
    carouselItems.forEach(item => {
      item.style.transform = `translateX(${translateXValue}%)`;
  });
  }
}
startCarousel()
