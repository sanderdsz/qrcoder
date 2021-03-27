const img = document.createElement('img');

function generate() {
  // Altura x largura do QR code 
  const height = 200;
  const width = 200;

  // Chamada core da API
  const api = 'https://chart.googleapis.com/chart';

  // Captura os inputs no html
  let firstInput = document.getElementById('first');
  let secondInput = document.getElementById('second');

  // Une os inputs em uma string
  let content = firstInput.value + secondInput.value;

  // Monta a query de chamada da api
  let queryString =  '?chs=' + height + 'x' + width + '&cht=qr&chl=' + content;

  // Cria um objeto img passando a query
  img.src = api + queryString;

  // Adiciona o objeto img na id result do html 
  result.appendChild(img);
}