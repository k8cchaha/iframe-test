const btnA = document.getElementById('btnA')
const btnB = document.getElementById('btnB')
const btnC = document.getElementById('btnC')


const iframeA = document.getElementById('iframeA');
const iframeB = document.getElementById('iframeB');
const iframeC = document.getElementById('iframeC');

btnA.onclick = clickBtnA;

btnC.onclick = ()=>{
  if (iframeC) {
    const doc = iframeC.contentWindow.document;
    doc.querySelector('.leaflet-control-zoom-out').style.backgroundColor = ColorCode()
  }
}

function clickBtnA() {
  if (iframeA) {
    const doc = iframeA.contentWindow.document;
    doc.querySelector('.main').style.backgroundColor = ColorCode()
  }
}

function ColorCode() {
  var makingColorCode = '0123456789ABCDEF';
  var finalCode = '#';
  for (var counter = 0; counter < 6; counter++) {
     finalCode =finalCode+ makingColorCode[Math.floor(Math.random() * 16)];
  }
  return finalCode;
}