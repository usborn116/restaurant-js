export default function contact() {
   const element = document.getElementById('content');

   const title = document.createElement('h2');
   title.innerHTML = 'Contact Page'
   const email = document.createElement('p');
   email.innerHTML = 'test@restaurant.com'
   const phone = document.createElement('p');
   phone.innerHTML = '123-456-7890'

 
   element.appendChild(title);
   element.appendChild(email);
   element.appendChild(phone);
  }