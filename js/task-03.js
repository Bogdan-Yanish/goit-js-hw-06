const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryList = document.querySelector('.gallery');

galleryList.style.cssText =
  "display: flex; flex-direction: column";

let markup = '';

images.forEach(img => {
    markup = images
        .map(
            img =>
                `<li class="gallery__item" style="list-style: none; margin: 20px">
                <img class="gallery__img" 
                src="${img.url}" 
                alt="${img.alt}"
                style="max-width: 100%; height: auto; display: block">
                </li>`)
        .join('');
});

galleryList.insertAdjacentHTML('beforebegin', markup);




