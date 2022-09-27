const Oqe = document.getElementById("oqe_txt")
const MaisComuns = document.getElementById("msComuns_txt")
const gonorr = document.getElementById("gonoTxt")
const cancrom = document.getElementById("cancrom")
const sifi = document.getElementById("sifilis")
const hepatB = document.getElementById("hepatB")
const hepatC = document.getElementById("hepatC")
const herpes = document.getElementById("herpe")
const hpv = document.getElementById("hpv")
const hivAidsT = document.getElementById("aidsHivT")
const pres = document.getElementById("pres")
const escondidos = {"Oqe": Oqe, "MaisComuns": MaisComuns, "gonoTxt": gonorr, "cancrom": cancrom, "sifi": sifi, "hepaB": hepatB, "hepaC": hepatC, "herpe": herpes, "hpv": hpv, "aidsHiv": hivAidsT, "pres": pres}
function mostrar(obj){
  for(item in escondidos){
    if(item == obj){
      const objetoE = escondidos[item]
      objetoE.classList.toggle("none")
    }
  }
}
function hepati(){
	mostrar("hepaB")
	mostrar("hepaC")
}
mostrar("oi")
//console.log(escondidos)
