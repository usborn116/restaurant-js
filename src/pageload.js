import Icon from './icon.png';

export default function pageload() {
    const element = document.getElementById('content');

   // Add the image to our existing div.
   const myIcon = new Image();
   myIcon.src = Icon;
   const title = document.createElement('h2');
   title.innerHTML = 'My Restaurant!'
   const description = document.createElement('p');
   description.innerHTML = 'This is a great restaurant!!!!'

 
   element.appendChild(myIcon);
   element.appendChild(title);
   element.appendChild(description);
  }