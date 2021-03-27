import * as qrcode from './qrcode';

var qrcode = new QRCode("qrcode");

function makeCode () {    
  var firstInput = document.getElementById('first')
  var secondInput = document.getElementById('second')
  var all = firstInput.value + secondInput.value
  qrcode.makeCode(all);
}