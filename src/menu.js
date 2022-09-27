export default function menu() {
    const element = document.getElementById('content');
 
    const title = document.createElement('h2');
    title.innerHTML = 'Menu'
    const item = document.createElement('p');
    item.innerHTML = 'Pepperoni Pizza'
    const item1 = document.createElement('p');
    item1.innerHTML = 'Kale Salad'
 
  
    element.appendChild(title);
    element.appendChild(item);
    element.appendChild(item1);
   }