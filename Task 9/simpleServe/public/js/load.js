var urlParams = new URLSearchParams(window.location.search)
console.log(urlParams.get('key1'))
console.log(urlParams.get('key2'))
console.log(urlParams.get('key3'))

let page1 = document.getElementById('page1')
let page2 = document.getElementById('page2')
let page3 = document.getElementById('page3')

page1.addEventListener('change', function () {
  loadContent('text1', '01.html')
})
page2.addEventListener('change', function () {
  loadContent(document.getElementById('text2'), '02.html')
})
page3.addEventListener('change', function () {
  loadContent(document.getElementById('text3'), '03.html')
})

const loadContent = (container, contentName) => {
  var xmlhttp = new XMLHttpRequest()
  var theUrl = 'http://localhost:3000/getPage'
  xmlhttp.open('POST', theUrl)
  xmlhttp.setRequestHeader('Content-Type', 'application/json;charset=UTF-8')
  xmlhttp.send(JSON.stringify({ fileName: contentName }))

  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState != 4) return
    if (xmlhttp.status == 200) {
      console.log(xmlhttp.responseText)
      document.getElementById(container).innerHtml = xmlhttp.responseText
    } else {
      alert(xmlhttp.status + ': ' + xmlhttp.statusText)
    }
  }
}
