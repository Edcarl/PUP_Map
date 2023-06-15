const map = document.getElementById('map');
const imageContainer = document.getElementById('image-container');
const hoverImage = document.getElementById('hover-image');
const textContainer = document.getElementById('text-container');
const descriptionContainer = document.getElementById('desc-container')

    map.addEventListener('mouseover', (event) => {
      const target = event.target;

      if (target.getAttribute('data-image-src')) {
        const imageSrc = target.getAttribute('data-image-src');
        hoverImage.src = imageSrc;
        imageContainer.style.display = 'block';

        const text = target.getAttribute('data-text');
        if (text) {
          textContainer.innerText = text;
          textContainer.style.display = 'block';
        } else {
          textContainer.style.display = 'none';
        }

        const description = target.getAttribute('description');
         if (description) {
           descriptionContainer.innerText = description;
           descriptionContainer.style.display = 'block';
         } else {
           descriptionContainer.style.display = 'none';
         }
      }
    });

    map.addEventListener('mouseout', () => {
      imageContainer.style.display = 'none';
      textContainer.style.display = 'none';
      descriptionContainer.style.display = 'none';
    });