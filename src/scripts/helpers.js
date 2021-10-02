
const __elem = (elem) => document.querySelector(elem);
const __elems = (elems) => document.querySelectorAll(elems);
const __arrElems = (elems) => Array.prototype.slice.apply(elems);

const nullIf = (value) => (value == undefined || value == null || value.trim().length == 0);
const nullIfArr = (value) => ((value == undefined || value == null || value == '') || value.length == 0);
const nullIfValue = (value, textNull = '') => (value == null || value.trim().length == 0 ? textNull : value);

// Object spread -> Object.assign
const _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

const acceptImages = ['png', 'PNG', 'jpg', 'jpeg', 'gif', 'svg'];

const acceptFiles = [
  { ext: 'xls', icon: 'file-excel'},
  { ext: 'xlsx', icon: 'file-excel'},
  { ext: 'ppt', icon: 'file-powerpoint'},
  { ext: 'pptx', icon: 'file-powerpoint'},
  { ext: 'doc', icon: 'file-word'},
  { ext: 'docx', icon: 'file-word'},
  { ext: 'pdf', icon: 'file-pdf' },
  { ext: 'zip', icon: 'file-archive'},
  { ext: 'rar', icon: 'file-archive'}
];

const convertFormDataToJson = (formData)=>{
  let object = {};
  formData.forEach((value, key)=> object[key] = value);

  let json = JSON.stringify(object);
  return JSON.parse(json);
}

const getPositionElem= (el)=> {
  var xPos = 0;
  var yPos = 0;

  while (el) {
    if (el.tagName == "BODY") {
      // deal with browser quirks with body/window/document and page scroll
      var xScroll = el.scrollLeft || document.documentElement.scrollLeft;
      var yScroll = el.scrollTop || document.documentElement.scrollTop;

      xPos += (el.offsetLeft - xScroll + el.clientLeft);
      yPos += (el.offsetTop - yScroll + el.clientTop);
    } else {
      // for all other non-BODY elements
      xPos += (el.offsetLeft - el.scrollLeft + el.clientLeft);
      yPos += (el.offsetTop - el.scrollTop + el.clientTop);
    }

    el = el.offsetParent;
  }
  return {
    x: xPos,
    y: yPos
  };
}

const htmlTextLimite= (html, length= 150)=>{
  let d = document.createElement('div');
  d.innerHTML = html;

  let text_substr= d.textContent.substr(0, length);
  return (text_substr + ( text_substr.length > length ? '...' : '' ));
}

//numeros y letras
const soloNumeros = (e) =>{
  var key = window.Event ? e.which : e.keyCode;
  return ((key >= 48 && key <= 57) || (key == 8));
}

const soloLetras = (e) => {
  var key = e.keyCode || e.which;
  var tecla = String.fromCharCode(key).toLowerCase();
  var letras = " áéíóúabcdefghijklmnñopqrstuvwxyz";
  var especiales = "8-37-39-46";

  var tecla_especial = false
  for (var i in especiales) {
      if (key == especiales[i]) {
          tecla_especial = true;
          break;
      }
  }

  if (letras.indexOf(tecla) == -1 && !tecla_especial) {
      return false;
  }
}

function numeros(e){
  let val = e.target.value;
  if(!val) return true;
  return (Number(val) == 0 ? Number(val) == false : Number(val));
}

function letras(e){
  let val = e.target.value;
  if(!val) return true;
  let regex = new RegExp("^[a-zA-Z ]+$");
  return regex.test(val); 
}

// json or object
function cloneObjectOrJSON(obj) {
  // basic type deep copy
  if (obj === null || obj === undefined || typeof obj !== 'object') {
      return obj
  }
  // array deep copy
  if (obj instanceof Array) {
      var cloneA = [];
      for (var i = 0; i < obj.length; ++i) {
          cloneA[i] = cloneJSON(obj[i]);
      }
      return cloneA;
  }
  // object deep copy
  var cloneO = {};
  for (var i in obj) {
      cloneO[i] = cloneObjectOrJSON(obj[i]);
  }
  return cloneO;
}

function validateInputs(values, errorsValues, keyValidate = null, previousErrors = {}) {
  let errors = errorsValues;
  let resultErrors = cloneObjectOrJSON(previousErrors);

  if(keyValidate){
    let key = keyValidate;
    if(resultErrors.hasOwnProperty(key)) delete resultErrors[key];
    // resultErrors[key] = errors[key];
    if (!values[key]) resultErrors[key] = errors[key];
    else {
      if(resultErrors[key]) delete resultErrors[key];
    }
    return resultErrors;
  }

  for (let key in values) {
    if (!values[key]) resultErrors[key] = errors[key];
  }

  return resultErrors;
}

function printJsonStringify(dataStringify){
  const f = {
      brace: 0
  }; //

  if(!dataStringify) return null;

  return dataStringify.replace(/({|}[,]*|[^{}:]+:[^{}:,]*[,{]*)/g, function (m, p1) {
      var rtnFn = function() {
              return '<div style="text-indent: ' + (f['brace'] * 20) + 'px;">' + p1 + '</div>';
          },
          rtnStr = 0;
      if (p1.lastIndexOf('{') === (p1.length - 1)) {
          rtnStr = rtnFn();
          f['brace'] += 1;
      } else if (p1.indexOf('}') === 0) {
          f['brace'] -= 1;
          rtnStr = rtnFn();
      } else {
          rtnStr = rtnFn();
      }
      return rtnStr;
  }) 
}

function formToJSON( elem ) {
  let output = {};
  new FormData( elem ).forEach(
    ( value, key ) => {
      // Check if property already exist
      if ( Object.prototype.hasOwnProperty.call( output, key ) ) {
        let current = output[ key ];
        if ( !Array.isArray( current ) ) {
          // If it's not an array, convert it to an array.
          current = output[ key ] = [ current ];
        }
        current.push( value ); // Add the new value to the array.
      } else {
        output[ key ] = value;
      }
    }
  );
  // return JSON.stringify( output );
  return output;
}

export {
  __elem,
  __elems,
  __arrElems,
  nullIf,
  nullIfArr,
  nullIfValue,
  acceptImages,
  acceptFiles,
  convertFormDataToJson,
  getPositionElem,
  htmlTextLimite,
  soloNumeros,
  soloLetras,
  numeros,
  letras,
  cloneObjectOrJSON,
  validateInputs,
  printJsonStringify,
  formToJSON
}
