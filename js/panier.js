let panier = document.querySelectorAll(".panier");



function savePanier(panier){
    localStorage.setItem("panier", JSON.stringify(panier));
}

function getPanier(){
    let panier = localStorage.getItem("panier");
    if (panier === null) {
        return [];
    } else {
        return JSON.parse(panier);
    }
}

function ajoutPanier(product){
    let panier = localStorage.getItem("panier");
    if (panier.length !== 0){
        panier.push(product);
    }else {
        panier = []
        panier.push(product);
    }
    savePanier(panier);
}

function supprimePanier(product){
    let panier = getPanier();
    panier = panier.filter(p => p.id != product.id);
    savePanier(panier);
}
function changeQuantite(product, quantity){
    let panier = getPanier();
    let chercheProduit = basket.find(p => p.id == product.id)
    if (chercheProduit != undefined) {
        chercheProduit.quantity += quantity;
        if (chercheProduit.quantity <= 0) {
            supprimePanier(chercheProduit);
        } else {
            savePanier(panier);
        }
        }
    }
   
function getNumeroProduit(){
    let panier = getPanier();
    let numero = 0;
    for (let product of panier){
        numero += product.quantity;
    }
    return numero
}

function getTotalPrice(){
    let panier = getPanier();
    let total = 0;
    for (let product of panier){
        total += product.quantity * product.price;
    }
    return total
}
let nombr = document.getElementById("nombr");
function nombre() {
    let recup = localStorage.getItem("panier");
    recup = JSON.parse(recup)
    console.log(recup.length)
    nombr.innerText = recup.length;
    
}

panier.forEach(element => element.addEventListener("click",(e)=> {
    let data =  {elem:element.textContent}
    let recup = localStorage.getItem("panier");
    recup = JSON.parse(recup)
    if(recup.length !== null){
        recup.push(data)
        localStorage.setItem("panier",JSON.stringify(recup))
    }
    else{
        recup = [];
        recup.push(data);
        localStorage.setItem("panier",JSON.stringify(recup))
    }
    nombre();
}));














