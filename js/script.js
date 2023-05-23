
function createScrollElement(cinema) {



   const scrollElement = document.createElement('div');
   scrollElement.classList.add('scroll-element');
   const status = document.createElement('div');
   status.classList.add('status');
   scrollElement.appendChild(status);
   const rating = document.createElement('div');
   const image = document.createElement('img');
   image.setAttribute('src', cinema.pathImg)
   scrollElement.appendChild(image);
   return scrollElement;
}

const contentrScroll = document.querySelectorAll('.content-scroll');




fetch('./json/cinema.json')
   .then(response => response.json())
   .then(data => {
      foo(data);
   });

function foo(data) {

   data.forEach(element => {
      let scrollTitle;
      let scrollContainer;
      contentrScroll.forEach((el) => {
         scrollTitle = el.querySelector('.scroll-title')
         scrollContainer = el.querySelector('.scroll-container');
         let createEl = createScrollElement(element);
         if ((element.category).includes(scrollTitle.textContent)) {

            scrollContainer.appendChild(createEl);
         }



      })

   });
}




// btn[0].onclick = () => {
//    scrollContainer.scrollBy({ left: -300, top: 0, behavior: 'smooth' });
// }
// btn[1].onclick = () => {
//    scrollContainer.scrollBy({ left: 300, top: 0, behavior: 'smooth' });
// }


const btn = document.querySelectorAll('.btn-scroll');

btn.forEach((el) => {
   el.addEventListener('click', () => {
      let parent = el.parentElement;
      console.log(el.textContent)
      if (el.textContent == '<') {

         parent.querySelector('.scroll-container').scrollBy({ left: -300, top: 0, behavior: 'smooth' });
      }
      else if (el.textContent == '>') {

         parent.querySelector('.scroll-container').scrollBy({ left: 300, top: 0, behavior: 'smooth' });
      }

   })



})


