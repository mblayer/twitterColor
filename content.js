const listName = [
  { username: '@M_Blayer', color: '#324a02' }
];
chrome.storage.local.get(null,function (obj){
  if(obj.users){
    for (const user of obj.users) {
      listName.push(user);
    }
  };
});

// selecciona y asigna bgcolor segun corresponde.
const updatedBgColor = () => {
  const list = document.querySelectorAll("div[data-testid=tweet]");
  for (let element of list) {
    const item = element.childNodes[1] ?
        element.childNodes[1]
          .getElementsByClassName('css-901oao css-16my406 r-1qd0xha r-ad9z0x r-bcqeeo r-qvutc0')[2]
          .textContent : false;
    for (let user of listName) {
      user.username.indexOf(item) !== -1 ? element.parentElement.style.backgroundColor = user.color : '';
    }
  }
};
// Reitera la ejecucion de nuestra funcion.
const intervalId = setInterval(updatedBgColor, 3000);