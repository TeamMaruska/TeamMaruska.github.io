window.onload = () => {
  let title = document.querySelector('#title');
  let text = 'Tím Maruška';
  write(title, text, 0, 100);

  let teamMembers = ['oliver', 'matus', 'katka', 'anett', 'lea', 'andrii', 'michal'];
  teamMembers.forEach(name => {
    fetch(`/ascii_obrazky/${name}.txt`).then(res => res.text()).then(data => {
      document.querySelector(`#img-${name}`).innerHTML = data;
    });
  });
}

function write(element, text, index, speed) {
  if(index == text.length) return;
  let t = element.innerHTML;
  t = t.replace(/.$/, text[index]);
  t += '_';
  element.innerHTML = t;
  setTimeout(() => {write(element, text, index+1, speed)}, speed);
}