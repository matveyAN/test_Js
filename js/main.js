document.addEventListener('DOMContentLoaded', function () {

document.querySelector('button').addEventListener('click', function (e) {
  var content = document.querySelector('textarea');
  var div = document.createElement('div');
  var box = document.getElementById('box');
  box.insertAdjacentElement('beforeend',div);
  div.textContent = content.value;
  div.className = 'text';
  content.value = "";
  e.preventDefault();
});


});