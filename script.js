console.log('hello is this working');

const showImage = () => {
  // document.getElementsByClassName("card-image").classList.toggle('hidden');
  document.querySelectorAll(".crew-image").forEach(image => {image.classList.toggle('show')
    });
  console.log('WWWHHHHHAT')
}

