function displayResult(data){
  document.getElementById('results').innerHTML = `
  <table>
    <caption>Analysis of the article</caption>
    <tr><td>Polarity</td><td>${data.polarity}</td></tr>
    <tr><td>Subjectivity</td><td>${data.subjectivity}</td></tr>
  </table>`;
}

function sendMessage(message){
  document.getElementById('results').innerHTML = `
  <div class='message'>
    <p>${message}</p>
  </div>`;
}

function disableBtn(btn){
  btn.setAttribute('disabled', '');
} 

function enableBtn(btn){
  btn.removeAttribute('disabled');
}

export {
  displayResult,
  sendMessage,
  disableBtn,
  enableBtn
}