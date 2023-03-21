const mainEl = document.querySelector('main')
const successfulUIEl = document.getElementById('formSubmitted')
const formEl = document.querySelector('form')

const validateForm = () => {
  const formInputsEl = formEl.querySelectorAll('input, select, textarea')
  let isFormDirty = true

  formInputsEl.forEach((field) => {
    if (!field.hasAttribute('required')) {
      field.required = true
      isFormDirty = false
    }
  })

  return isFormDirty
}

const submitForm = (e) => {
  e.preventDefault()

  // do validation here
  if (validateForm()) {
    const formData = new FormData(formEl)

    const recordObj = Object.fromEntries(formData)
    createRecord(recordObj)

    // Update UI logic
    updateUI()
  }
}

const updateUI = () => {
  //  update UI
  mainEl.classList.add('hidden')
  successfulUIEl.classList.remove('hidden')
}

formEl.addEventListener('submit', submitForm)
