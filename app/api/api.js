

export const registerUser = (data) => {
    return new Promise((resolve, reject) => {
      fetch('http://localhost:80/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      .then(response => response.json())
      .then(data => resolve(data))
      .catch(error => reject(error))
    })
}

export const loginUser = (data) => {
    return new Promise((resolve, reject) => {
      fetch('http://localhost:80/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      .then(response => response.json())
      .then(data => resolve(data))
      .catch(error => reject(error))
    })
}