const boxes = document.getElementsByClassName('box');

let count=0;
const arr = [];
const eventListeners = [];
function addEventListener(){
for(let i = 0;i<boxes.length;i++){
  const handleClick = function(){
     let id = boxes[i].getAttribute("id");
      arr.push(id);
      boxes[i].style.backgroundColor='green';
      count++;
      console.log(count);
      if(count === 7){
        count=0;
        removeColor(arr);
      }
  };
    eventListeners.push(handleClick);
    boxes[i].addEventListener('click',handleClick);


}
}
addEventListener();

function removeColor(arr){
  for(let i = arr.length-1;i>=0;i--){
    setInterval(()=>{
      const box = document.getElementById(arr[i]);
      box.style.backgroundColor = 'white';
      box.removeEventListener('click',eventListeners[i]);
      if(i===0){
        addEventListener();
      }
    },i*2000);
    arr.length=0;
    eventListeners.length=0;
  }

}