

export function isValidToken(token) {
  // if no token or invalid return false
  if(!token || token.split('.').length < 3) {
    return false
  }
  // splits the token to grab the issued expire time.
  // if the token is not expire return true else false
  const data = JSON.parse(atob(token.split('.')[1]))
  const exp = new Date(data.exp * 1000)
  const now = new Date()
  return now < exp
}