let page1 = document.getElementById('page1')
let page2 = document.getElementById('page2')
let page3 = document.getElementById('page3')

page1.addEventListener('change', function () {
  loadContent('text1', '01.html')
})
page2.addEventListener('change', function () {
  loadContent('text2', '02.html')
})
page3.addEventListener('change', function () {
  loadContent('text3', '03.html')
})

const loadContent = (container, contentName) => {
  let div = document.getElementById(container)
  if (div.innerHTML) {
    div.innerHTML = null
    rewriteUrl()
    return
  }
  var xmlhttp = new XMLHttpRequest()
  var theUrl = 'http://localhost:3000/getPage'
  xmlhttp.open('POST', theUrl)
  xmlhttp.setRequestHeader('Content-Type', 'application/json;charset=UTF-8')
  xmlhttp.send(JSON.stringify({ fileName: contentName }))

  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState != 4) return
    if (xmlhttp.status == 200) {
      div.innerHTML = xmlhttp.responseText
      rewriteUrl()
    } else {
      alert(xmlhttp.status + ': ' + xmlhttp.statusText)
    }
  }
}

const rewriteUrl = () => {
  const key1 = document.getElementById('text1').innerHTML ? true : false
  const key2 = document.getElementById('text2').innerHTML ? true : false
  const key3 = document.getElementById('text3').innerHTML ? true : false
  history.pushState(
    null,
    null,
    '/?key1=' + key1 + '&key2=' + key2 + '&key3=' + key3
  )
}

const startLoad = () => {
  const urlParams = new URLSearchParams(window.location.search)
  if (urlParams.get('key1') == 'true') {
    page1.checked = true
    loadContent('text1', '01.html')
  }
  if (urlParams.get('key2') == 'true') {
    page2.checked = true
    loadContent('text2', '02.html')
  }
  if (urlParams.get('key3') == 'true') {
    page3.checked = true
    loadContent('text3', '03.html')
  }
}

startLoad()
