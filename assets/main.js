window.onload = function () {
  var contactButton = document.getElementById('contactMe');
  var closeButton = document.getElementById('close-popup');

  contactButton.onclick = function (e) {
    document.querySelector('.popup-backdrop').classList.add('show')
  }
  closeButton.onclick = function (e) {
    document.querySelector('.popup-backdrop').classList.remove('show')
  }
}