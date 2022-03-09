var verbs = [];
const conocimiento = ['', 'Bosqueja', 'Cita', 'Cuenta', 'Copia', 'Define', 'Dibuja', 'Ejemplifica', 'Encuentra', 'Enlista', 'Enumera escoge', 'Expresa', 'Identifica', 'Ilustra', 'Indica', 'Integra', 'Menciona', 'Muestra', 'Nombra', 'Ordena', 'Organiza recita', 'Reconoce', 'Recopila', 'Recuerda registra', 'Reproduce', 'Selecciona'];
const comprension = ['', 'Actúa', 'Aprecia', 'Analiza', 'Argumenta', 'Asocia', 'Asume', 'Clasifica', 'Compara', 'Comprende', 'Contrasta', 'Debate', 'Describe', 'Determina', 'Diferencia', 'Discute', 'Distingue', 'Esquematiza', 'Estima', 'Evalúa', 'Expone extiende', 'Ilustra', 'Informa', 'Interpreta ordena', 'Parafrasea predice', 'Reafirma', 'Relaciona', 'Resume', 'Revisa', 'Seria', 'Sustenta', 'Traduce', 'Valora'];
const uso = ['', 'Aplica', 'Calcula', 'Configura', 'Construye', 'Convierte', 'Crea', 'Decide', 'Desarrolla', 'Detecta', 'Dirige', 'Diseña', 'Ejecuta', 'Ejerce', 'Elabora', 'Elige', 'Emplea establece', 'Examina', 'Gestiona', 'Implementa', 'Indaga', 'Integra', 'Interviene', 'Investiga', 'Maneja', 'Manipula', 'Modela', 'Opera', 'Practica', 'Produce', 'Programa', 'Propone', 'Realiza', 'Refuerza', 'Resuelve', 'Soluciona', 'Usa', 'Utiliza'];
const transferencia = ['', 'Adiestra', 'Apoya', 'Ayuda', 'Capacita colabora comparte', 'Comunica contribuye', 'Convierte', 'Corrige', 'Demuestra', 'Descubre', 'Detalla', 'Enseña', 'Experimenta', 'Explica', 'Forma', 'Inculca', 'Instruye', 'Muestra', 'Orienta', 'Prepara', 'Provee', 'Sustenta', 'Transfiere', 'Transforma', 'Transmite', 'Traslada'];

verbs.push(conocimiento, comprension, uso, transferencia);

function updateVerbs(){
  let selectTax = document.getElementById("nivel-tax");
  let selectVerb = document.getElementById("verbs");
  let nivelTax = selectTax.value;
  let list = 0;
  switch (nivelTax) {
    case 'conocimiento':
      list = 0;
      break;
    case 'comprension':
      list = 1;
      break;
    case 'uso':
      list = 2;
      break;
    case 'transferencia':
      list = 3;
      break;
    default:
      list = 0;
  }

  removeAll(selectVerb);

  for(let i=0; i<verbs[list].length; i++){
    console.log(verbs[list][i]);
    let newOption = new Option(verbs[list][i],verbs[list][i]);
    selectVerb.add(newOption, undefined);
  }
}

function removeAll(selectBox) {
    while (selectBox.options.length > 0) {
        selectBox.remove(0);
    }
}

function updateResult(){
  let verb = document.getElementById("verbs").value;
  let tema = document.getElementById("tema").value;
  let utilidad = document.getElementById("utilidad").value;
  let lugar = document.getElementById("lugar").value;
  let resultado = document.getElementById("resultado");

  let cat = verb + " " + tema + " " +  utilidad + " " + lugar;
  cat = addPeriod(cat);
  resultado.value = cat;
}

function addPeriod(text){
  text = text.split('');
  while(text[text.length - 1] === ' '){
    text.pop();
  }
  if (text[text.length - 1] !== '.'){
    text.push('.');
  }
  text = text.join('');
  return text;
}

function copyToClipboard() {
  /* Get the text field */
  var copyText = document.getElementById("resultado");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

   /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText.value);

  /* Alert the copied text */
  alert("Texto copiado: " + copyText.value);
}

updateVerbs();
