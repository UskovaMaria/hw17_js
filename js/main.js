const doc = document;
const box = doc.querySelector('.box');
console.log(box);
const btnAdd = doc.querySelector('.add'); 
console.log(btnAdd);
const btnDel =  doc.querySelector('.del');
console.log(btnDel);
const btnAfter = doc.querySelector('.after');
console.log(btnAfter);
const btnBefore = doc.querySelector('.before');
console.log(btnBefore);
let count = 1; 

btnAdd.onclick = function() {
  const item = doc.createElement('div'); 
  console.log(item);
  item.className = 'item';
  item.innerHTML = count;

  item.onclick = function() {  
    unActiveAll();
    this.classList.toggle('active');
  } 

  count++;

  box.append(item);
}

btnDel.onclick = function() {
  const del = doc.querySelectorAll('.item');
  console.log(del);
  
  del.onclick = function() {
    unActiveAll();
    
    this.remove();
  }
}
  
btnBefore.onclick = function() {
  const before = doc.querySelectorAll('.item');
  console.log(before);
  before.onclick = function() {
    unActiveAll();
    
  }
}


btnAfter.onclick = function() {
  const after = doc.querySelectorAll('.item');
  console.log(after);
  after.onclick = function() {
    unActiveAll();
    
  }
}

function unActiveAll() {
  const items = doc.querySelectorAll('.item');
  items.forEach(function(item) { 
    item.classList.remove('active');            
  });
}
