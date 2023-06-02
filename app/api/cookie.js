
export const setCookie = (key, value, expires) => {
    const expiration = new Date(new Date().getTime() + expires * 100000)

    document.cookie = `${key}=${value} expires=${expiration} path=/`
}

export const getCookie = (name) => {
    const cookies = document.cookie.split('')
  
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim()
      if (cookie.startsWith(name + '=')) {
        return cookie.substring(name.length + 1)
      }
    }
  
    return null
}

export const removeCookie = (name) => {
  const cookies = document.cookie.split('')
  const newCookies = []

  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i].trim()
    if (cookie.startsWith(name + '=')) {
      const expiration = new Date(new Date().getTime() - 10000000000)
      cookie = `${name}="" expires=${expiration} path=/`
    }
    newCookies.push(cookie)
  }

  document.cookie = newCookies.join("")
}