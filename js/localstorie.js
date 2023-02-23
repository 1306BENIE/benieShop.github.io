let email = document.querySelector("#email")

let password = document.querySelector("#password")

let login = document.querySelector("#login")


login.addEventListener('click',function(){
	let baseDeDonneeEmail = localStorage.getItem("Email")
	let baseDeDonneePassword = localStorage.getItem("PassWord")

	if((email.value === baseDeDonneeEmail) && (password.value === baseDeDonneePassword)){
		window.location.href = 'connexion.html'
	}
})

























