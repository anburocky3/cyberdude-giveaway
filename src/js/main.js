const mainEl = document.querySelector('main')
const successfulUIEl = document.getElementById('formSubmitted')
const formEl = document.querySelector('form')

const submitForm = (e) => {
  e.preventDefault()

  const formData = new FormData(formEl)

  console.log([...formData.entries()])
  console.log([...formData.values()])

  // Update UI logic
  //   updateUI()
}

const updateUI = () => {
  //  update UI
  mainEl.classList.add('hidden')
  successfulUIEl.classList.remove('hidden')
}

formEl.addEventListener('submit', submitForm)
