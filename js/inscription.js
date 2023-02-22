let nom = document.querySelector("#firstName")

let prenom = document.querySelector("#lastName")

let email = document.querySelector("#emailsign")

let motDePasse = document.querySelector("#passwordsign")

let enregistrer = document.querySelector("#enregistrer")





// console.log(email, password, login)


enregistrer.addEventListener('click',function(){
	
	localStorage.setItem("Nom", nom.value)
	localStorage.setItem("Prenom", prenom.value)
	localStorage.setItem("Email", email.value)
	localStorage.setItem("PassWord", motDePasse.value)
	window.location.replace('http://127.0.0.1:5500/connexion.html')
})