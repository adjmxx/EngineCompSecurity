function iniciar() {
  document.miformulario.addEventListener("invalid", validacion1, true);
  document.formulariosugerencia.addEventListener("invalid", validacion2, true);
  document.getElementById("enviar1").addEventListener("click", enviar1, false);
  document.getElementById("enviar2").addEventListener("click", enviar2, false);
  documet.miformulario.addEventListener("input", controlar1, false);
  document.formulariosugerencia.addEventListener("input", controlar2, false);
}
function validacion1(e) {
  var elemento1=e.target;
  elemento1.style.background='#FFDDDD';
}
function validacion2(e) {
  var elemento2=e.target;
  elemento2.style.background='#FFDDDD';
}
function enviar1() {
  var elemento1=document.getElementById("parrafo");
  var valido1=document.miformulario.checkValidity();  

  if(valido1) {
    document.miformulario.submit();
  }else if(elemento1.validity.patternMismatch || elemento1.validity.valueMissing){

  alert('Tu idea debe contener al menos 4 caracteres y, debe ser clara y cuerente');
  }
}
function enviar2() {
  var elemento2=document.getElementById("tusugerencia");
  var valido2=document.formulariosugerencia.checkValidity();

  if(valido2){
    document.formulariosugerencia.submit();
  }else if(elemento2.validity.patternMismatch || elemento2.validity.valueMissing){
     alert('La sugerencia debe contener minimo 4 caracteres y no contener palabras obsenas');
  }

}
function controlar1(e) {
  var elemento1=e.target;
  if(elemento1.validity.valid){
    elemento1.style.background='#FFFFFF';
  }else{
    elemento1.style.background='#FFDDDD';
  }
}
function controlar2(e) {
  var elemento2=e.target;
  if(elemento2.validity.valid){
    elemento2.style.background='#FFFFFF';
  }else{
    elemento2.style.background='#FFDDDD';
  }
}
window.addEventListener("load", iniciar, false);