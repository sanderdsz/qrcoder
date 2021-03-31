const img = document.createElement('img');

function generate() {
  // Captura os inputs no html
  let firstInput = document.getElementById('first');
  let secondInput = document.getElementById('second');
  let thirdInput = document.getElementById('third');
  let fourthInput = document.getElementById('fourth');
  
  if (!firstInput.checkValidity()) {
    document.getElementById("first").innerHTML = firstInput.validationMessage;
  } if (!secondInput.checkValidity()) {
    document.getElementById("second").innerHTML = secondInput.validationMessage;
  } else {

    // Cria cookies de cada input
    document.cookie = `name=${firstInput.value};`
    document.cookie = `email=${secondInput.value};`
    document.cookie = `event=${thirdInput.value};`
    document.cookie = `date=${fourthInput.value};`

    // Redireciona para página de sucesso
    window.location.href="./src/pages/success.html";
  }
}

// Verifica a página aberta
let sPath = window.location.pathname;

if(sPath == "/src/pages/success.html") {
  // Altura x largura do QR code 
  const height = 200;
  const width = 200;

  // Chamada core da API
  const api = 'https://chart.googleapis.com/chart';

  // Monta a query de chamada da api
  let queryString =  '?chs=' + height + 'x' + width + '&cht=qr&chl=' + document.cookie;
  
  // Cria um objeto img passando a query
  img.src = api + queryString;

  // Adiciona o objeto img na id result do html 
  document.getElementById("result").appendChild(img);

  // Adiciona o objeto receiptNumber na página como numeral random 
  let receiptNumber = Math.floor(Math.random() * 10000)
  document.getElementById("receiptNumber").append(`#${receiptNumber}`)

  // Lógica que captura os cookies dentro do array e retorna baseado no name 
  const decodedCookie = decodeURIComponent(document.cookie);
  const splitedCookie = decodedCookie.split(';')
  function getCookie(cookieName) {
    let name = cookieName + "="
    for(var i = 0; i < splitedCookie.length; i++) {
      let cookied = splitedCookie[i];
      while (cookied.charAt(0) == ' ') {
        cookied = cookied.substring(1);
      } if (cookied.indexOf(name) == 0) {
        return cookied.substring(name.length, cookied.length)
      }
    }
    return ""
  }
  // Adiciona os cookies nos campos da tela de recibo 
  let receiptName = getCookie("name");
  document.getElementById("receiptName").append(`${receiptName}`)
  let receiptEmail = getCookie("email");
  document.getElementById("receiptEmail").append(`${receiptEmail}`)
  let receiptEvent = getCookie("event");
  document.getElementById("receiptEvent").append(`${receiptEvent}`)
  let receiptDate = getCookie("date");
  document.getElementById("receiptDate").append(`${receiptDate}`)

  // Função de retorno da tela do recibo
  function returnPage() {
    window.location.href="/";
  }
}

