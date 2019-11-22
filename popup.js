let ctaStatus = document.getElementById('ctaStatus');
const ctaClearList = document.getElementById('ctaClearList');
const formularioUsuarios = document.getElementById('formularioUsuarios');
const listUsuariosRender = document.getElementById('containerList');

formularioUsuarios.onsubmit = function(element) {
  const name = formularioUsuarios[0].value;
  const color = formularioUsuarios[1].value;

  chrome.storage.local.get(null,function (list){
    console.log(list);
    if(list.users){
      list.users.push({username:`${name}`, color:`${color}`}) 
    }else {
      list.users = [];
      list.users.push({username:`${name}`, color:`${color}`});
    }
    chrome.storage.local.set(list,function (){
      console.log(`Storage Succesful ${list}`);
    });
  });

  element.preventDefault()
};

ctaStatus.onclick = function(element) {
  chrome.storage.local.get(null,function (obj){
    console.log(obj);
    });
    element.preventDefault()
};


ctaClearList.onclick = function(element) {
  chrome.storage.local.clear(function(elements){
    console.log(`Se eliminaron ${element}`)
  })
    element.preventDefault()
};

chrome.storage.local.get(null,function (list){
  let listItem;
  for (user of list.users){
    console.log(user)
    listItem = document.createElement('li');
    listItem.style.backgroundColor =user.color;
    listItem.innerHTML = `${user.username}`;
    listUsuariosRender.appendChild(listItem);
  }
})