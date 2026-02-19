import { adatLista } from "./adat.js";
import { eredmenySzamolas, randomSzam, listaDiv, tablazat} from "./fuggvenyek.js"

let ertekElem=document.getElementById("ertekeles")
let eredmElem=document.getElementById("eredmeny")
let gombElem=document.getElementById("gomb")
let asideElem=document.getElementById("szamok")
let articleElem=document.getElementById("tablazat")
gombElem.addEventListener("click", function(){
    eredmenySzamolas(ertekElem, eredmElem)
   
    }
)

let lista=randomSzam()
listaDiv(lista, asideElem)
tablazat(adatLista, articleElem)