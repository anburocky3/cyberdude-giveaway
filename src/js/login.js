const loginFormEl = document.querySelector('form#loginForm')

const checkIfUserLoggedIn = () => {
  const userObj = JSON.parse(localStorage.getItem('user'))

  if (userObj) {
    window.location.replace('/src/dashboard.html')
  }
}

checkIfUserLoggedIn()

const handleLoginForm = (e) => {
  e.preventDefault()

  const formData = new FormData(loginFormEl)
  const { email, password } = Object.fromEntries(formData)

  // Try to login
  loginUser(email, password)
    .then((user) => {
      //  Login state in localStorage
      localStorage.setItem('user', JSON.stringify(user))

      window.location.replace('/src/dashboard.html')
    })
    .catch(({ errorCode }) => {
      if (errorCode === 'auth/user-not-found') {
        alert("Username/Password doesn't exist")
      }
      loginFormEl.reset()
    })
}

loginFormEl.addEventListener('submit', handleLoginForm)
