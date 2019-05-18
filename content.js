const listName = [
  { username: '@M_Blayer', color: '#324a02' }
]

// selecciona y asigna bgcolor segun corresponde.
const updatedBgColor = () => {
  const list = document.getElementsByClassName('tweet');
  for (element of list) {
    const item = element.childNodes[3] ?
      element.childNodes[3].getElementsByClassName('username u-dir u-textTruncate')[0].textContent : false;
    for (user of listName) {
      user.username.indexOf(item) !== -1 ? element.style.backgroundColor = user.color : '';
    }
  }
}
// Reitera la ejecucion de nuestra funcion.
const intervalId = setInterval(updatedBgColor, 3000);

// Actuamos segun respuesta del navegador.
const eventMessage = (message, sender, sendResponse)=>{
  console.log(message);
  message ? clearInterval(intervalId):'';
  return message
}
// Esperamos una accion desde el navegador
chrome.runtime.onMessage.addListener(eventMessage);