const httpPost = (url, data, cb, err = console.error) => {
  const request = new XMLHttpRequest()
  request.open('POST', url, true)
  request.setRequestHeader('Content-type', 'application/json; charset=utf-8')
  request.onload = () => cb(request.responseText)
  request.onerror = () => err(request)

  request.send(data)
}

exports.httpPost = httpPost
