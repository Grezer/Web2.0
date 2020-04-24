let currentSymbol = ''
let dictionary = new Array()
let inputArea = document.getElementById('inputArea')
let resultsArea = document.getElementById('resultsArea')

inputArea.addEventListener('input', () => {
  let inVal = inputArea.value.toLowerCase()
  if (inVal.length == 0) {
    dictionary = new Array()
    currentSymbol = ''
    clearResultsArea()
    return
  }
  if (inVal[0] == currentSymbol[0]) {
    processData(inVal)
    return
  }

  let xmlhttp = new XMLHttpRequest()
  let theUrl = 'http://localhost:3000/getWords'
  xmlhttp.open('POST', theUrl)
  xmlhttp.setRequestHeader('Content-Type', 'application/json')
  xmlhttp.send(JSON.stringify({ fileName: inVal[0] + '.txt' }))
  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState != 4) return
    if (xmlhttp.status == 200) {
      dictionary = xmlhttp.responseText.match(/[^\r\n]+/g) // было ооооочень трудно до этого допереть
      currentSymbol = inVal[0]
      processData(inVal)
    } else {
      console.log('err' + ': ' + xmlhttp.responseText)
    }
  }
})

function processData(searchigValue) {
  clearResultsArea()
  let addedResults = 0
  for (let line of dictionary) {
    var patt = new RegExp('^' + searchigValue)
    if (patt.test(line)) {
      addedResults++
      appendResult(line)
    }
    if (addedResults >= 6) return
  }
}

function appendResult(str) {
  resultsArea.appendChild(document.createElement('li')).innerText = str
}

const clearResultsArea = () => {
  resultsArea.innerHTML = ''
}
