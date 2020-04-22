const loadChapter = (page) => {
  let xmlhttp = new XMLHttpRequest()
  let theUrl = 'http://localhost:3000/getPage'
  xmlhttp.open('POST', theUrl)
  xmlhttp.setRequestHeader('Content-Type', 'application/json')
  xmlhttp.send(JSON.stringify({ fileName: 'glava' + page + '.html' }))
  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState != 4) return
    if (xmlhttp.status == 200) {
      let elem = document.createElement('div')
      elem.setAttribute('id', page)
      elem.innerHTML = xmlhttp.responseText
      document.body.appendChild(elem)
    } else {
      alert(xmlhttp.status + ': ' + xmlhttp.statusText)
    }
  }
}

const checkLoading = () => {
  const rect = document.body.getBoundingClientRect()
  if (rect.bottom - window.innerHeight <= 10) {
    const urlParams = new URLSearchParams(window.location.search)
    const nowPage = parseInt(urlParams.get('page'))
    if (nowPage + 1 > 9) return
    loadChapter(nowPage + 1)
    rewriteURL(nowPage + 1)
  }
}

const start = () => {
  const urlParams = new URLSearchParams(window.location.search)
  if (urlParams.get('page')) {
    for (let i = 1; i <= parseInt(urlParams.get('page')); i++) loadChapter(i)
    rewriteURL(parseInt(urlParams.get('page')))
  } else {
    loadChapter(1)
    rewriteURL(1)
  }

  document.addEventListener('DOMContentLoaded', function () {
    setTimeout(function () {
      window.scrollTo(
        0,
        document.getElementById(urlParams.get('page')).offsetTop
      )
    }, 1000)
    window.addEventListener('scroll', checkLoading)
    checkLoading()
  })
}

const rewriteURL = (page) => {
  history.pushState(null, null, '/?page=' + page)
}

start()
