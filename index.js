window.onload = () => {
  let title = document.querySelector('#title');
  let text = 'Tím Maruška';
  write(title, text, 0, 100);
  //blink(title, 2000)
  let teamMembers = ['lukas','oliver', 'matus', 'katka', 'anett', 'lea', 'andrii', 'michal'];
  teamMembers.forEach(name => {
    fetch(`/ascii_obrazky/${name}.txt`).then(res => res.text()).then(data => {
      document.querySelector(`#img-${name}`).innerHTML = data;
    });
  });
  fetch(`/ascii_obrazky/tim.txt`).then(res => res.text()).then(data => {
    document.querySelector(`#img-tim`).innerHTML = data;
  });
}

function write(element, text, index, speed) {
  let writingTimer = setInterval(() => {
    let t = element.innerHTML;
    t = t.replace(/.$/, text[index]);
    t += '_';
    element.innerHTML = t;
    index+=1
    if(index === text.length) {
      clearInterval(writingTimer);
      blink(element, 500)
    }
  }, speed);
}
function blink(element, speed) {
  setInterval(() => {
    element.innerHTML=(element.innerHTML[element.innerHTML.length-1] === "_" ? element.innerHTML.slice(0,-1) : element.innerHTML + "_");
  }, speed);
}