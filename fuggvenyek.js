


export function eredmenySzamolas(ertekElem, eredmElem){
    let ertek=Number(ertekElem.value);
    console.log(ertek)
    let szoveg="";
    if (ertek>=1 && ertek<=5){
        switch (ertek){
            case 1:
                szoveg= "Elégtelen";
                break;
            case 2:
                szoveg= "Elégséges";
                break;
            case 3:
                szoveg= "Közepes";
                break;
            case 4:
                szoveg= "Jó";
                break;
            case 5:
                szoveg= "Jeles";
                break;
            default:
                szoveg="Hibás"
                break;
            }
            console.log(szoveg)
        eredmElem.innerHTML=szoveg;
    }
}

export function randomSzam(){
    let lista=[]
    for (let index = 0; index < 12; index++) {
        let szam=Math.floor(Math.random()*101)-10;
        lista.push(szam);
    }
    console.log(lista);
    return lista;

}

export function listaDiv(lista, asideElem){
    let szoveg="";
    
    for (let index = 0; index < lista.length; index++) { 
        szoveg+=`<div>${lista[index]}</div>`
    }
    asideElem.innerHTML=szoveg;
}

export function tablazat(adatok, articleElem){
    let szoveg=`<table>
                <tr>
                    <td>NEV</td>
                    <td>ATLAG</td>
                </tr>`;
    for (let index = 0; index < adatok.length; index++) {
        szoveg+=`<tr>
                    <td>${adatok[index].nev}</td>
                    <td>${adatok[index].atlag}</td>
                </tr>`
    }
    szoveg+="</table>";
    articleElem.innerHTML=szoveg;

}