const httpGet = (url, cb, err = console.error) => {
  const request = new XMLHttpRequest()
  request.open('GET', url, true)
  request.onload = () => cb(request.responseText)
  request.onerror = () => err(request)

  request.send()
}

exports.httpGet = httpGet
