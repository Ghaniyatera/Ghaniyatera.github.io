const form = document.getElementById("form")
const username = document.getElementById("username")
const email = document.getElementById("email")
const password = document.getElementById("password")
const retypePassword = document.getElementById("retypePassword")

//untuk menghindari redirect halaman
form.addEventListener("submit", e => {
    e.preventDefault()
    validateInputs()
})

const setError = (element, message) => {
    const inputControl = element.parentElement
    const errorDisplay = inputControl.querySelector(".error")

    errorDisplay.innerText = message

    //hilangkan class success
    inputControl.classList.add("error")
    inputControl.classList.remove("success")}

    const setSuccess = element => {
        const inputControl = element.parentElement
        const errorDisplay = inputControl.querySelector(".error")
        errorDisplay.innerText = ""
        inputControl.classList.add("success")
        inputControl.classList.remove("error")
    }

    //U MENGECEK EMAIL VALID ATAU TIDAK
    const isValidEmail = email => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        return re.test(String(email).toLowerCase())
    }



const validateInputs = () => {
    const emailValue = email.value.trim() //klo user tambah spasi atau karakter lain bs diignore
    const usernameValue = username.value.trim()
    const passwordValue = password.value.trim()
    const retypePasswordValue = retypePassword.value.trim()

    //cek email
    if (emailValue === ""){
        setError(email, "Masukkan Email")
    } else if (isValidEmail(emailValue) == false){
        //jk email tdk sesuai format
        setError(email, "Email tidak valid")
    } else {
        setSuccess(email)
    }
    
    //cek username
    if (usernameValue === ""){
        setError(username, "Masukkan Username")
    } else if(usernameValue.length < 5){
        setError(username, "Username harus lebih dari 4 karakter")
    } else {
        setSuccess (username)
    }

    //cek password
    if (passwordValue === ""){
        setError (password, "Masukkan password")
    } else if (passwordValue.length < 5){
        setError(password, "Password harus lebih dari 4 karakter")
    } else {
        setSuccess(password)
    }

    //cek retype password
    if (retypePasswordValue === ""){
        setError (retypePassword, "Masukkan password")
    } else if (retypePasswordValue !== passwordValue){
        setError(retypePassword, "Password tidak sama")
    } else {
        setSuccess(retypePassword)
    }

}
