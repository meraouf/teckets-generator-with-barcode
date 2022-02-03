let logoImg = document.querySelector('#logo-in');
let logo =  document.querySelector('#logo');

let code = document.querySelector('#code');
let codeGen = document.querySelector('#code-gen');

let title =document.querySelector('#title');
let titleGen = document.querySelector('#title-gen');

let btnGenerate = document.querySelector('#btn-gen');
btnGenerate.addEventListener('click', () => {
    let [file] = logoImg.files;
    logo.src = URL.createObjectURL(file); 
    titleGen.innerHTML = title.value;
    JsBarcode(codeGen, code.value);
    document.querySelector('.tecket-date').innerHTML = new Date().toLocaleDateString();
    document.querySelector('#preview').style.display = 'block';
});