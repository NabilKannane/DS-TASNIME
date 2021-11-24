
/*
1- Initialiser un projet git dans le dossier DS                                                $git init
2- Ecrire le code HTML et CSS pour réaliser cette page                                          
3- Faire un commit des changements avec le message "satatic page"                               
4- Completer la fonction  updateList pour afficher la liste des produits 
5- Faire un commit des changements avec le message "updateList"
6- Un clique sur (+) permet d'ajouter un produit au panier. 
Completer le code de "addProd" pour ajouter des element au panier et modifier le prix total
7-Faire un commit des changements avec le message "addProd"
8-Completer le code de "delProd" pour supprimer un element au panier
9-Faire un commit des changements avec le message "delProd"
10-Completer le code de "searchfun" pour filtrer les element de la liste
11- Faire un commit des changements avec le message "searchfun"
12- utiliser ajax pour récuperer la list des produit de http://este.ovh:8080/prods
*/


/********************* VARIABLES ********************/
let menu = document.querySelector('#menu');

updateList(products);
function updateList(products){
    //Mettre à jour la liste des produit
for(let i=0 ; i<products.length ;i++){     
      let newdiv = document.createElement('div');
        menu.appendChild(newdiv);
        newdiv.classList.add("produit");
        var btnadd = document.createElement('button');
          btnadd.innerHTML="+";
          btnadd.classList.add('btnadd');
          
          btnadd.setAttribute('value' , products[i].id-1)
        //  btnadd.setAttribute('onClick','addProd('+products[i].id+')')
        newdiv.appendChild(btnadd);
        let pcimg = document.createElement('img');
        pcimg.setAttribute('src' , '../imgs/'+(i+1)+'.png')

        newdiv.appendChild(pcimg);

        let pc = document.createElement('h3');
        pc.innerHTML = products[i].name+"<br> PRIX : "+products[i].price;
        newdiv.appendChild(pc);


 btnadd.addEventListener('click' , addProd)

  }   

  
}

var tabShop = []
var quantite =0
function addProd(e){
 
  alert(e.target.value);
  //alert(e.target.getAttribute("value"))
  console.log(tabShop.includes(e.target.value))
if(tabShop.includes(e.target.value)){
  console.log(e.target.value)
  quantite =products[e.target.value].qtt++;
  let item = document.querySelector ('#d'+e.target.value);
  item.innerHTML=products[e.target.value].name +" Qtn : "+quantite+" PRIX :";
}else{
  console.log("22222")
  var divpanier = document.createElement('div');
  divpanier.setAttribute('id' , "d"+e.target.value)
  divpanier.setAttribute('class' , "divpanier ")
let panier = document.getElementById('panier');
panier.appendChild(divpanier);
divpanier.innerHTML=products[e.target.value].name +" Qtn : "+quantite+" PRIX :";
tabShop.push(e.target.value)
}
  
  
  


  
  

}

function delProd(e){
// Suppression d'un produit du panier (e : event object)

}

function updateChart(){
// fonction pour mettre à jour le panier 
}

function searchfun(e){
  /////  alert (cherche.value);
}


