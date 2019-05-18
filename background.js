const msg = { status: 'false' }
// Definimos accion a realizar.
const ctaAction = (tab) => {
  chrome.tabs.sendMessage(tab.id, msg);
}

// asignamos una accion a nuestro cta de la extencion.
chrome.browserAction.onClicked.addListener(ctaAction);