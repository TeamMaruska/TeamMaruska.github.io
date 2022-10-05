window.onload = () => {
  let title = document.querySelector('#title');
  let text = 'Tím Maruška';
  write(title, text, 0, 100);
}
function write(element, text, index, speed) {
  if(index == text.length) return;
  let t = element.innerHTML;
  t = t.replace(/.$/, text[index]);
  t += '_';
  element.innerHTML = t;
  setTimeout(() => {write(element, text, index+1, speed)}, speed);
}
