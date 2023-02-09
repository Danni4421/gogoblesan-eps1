const objTarget = document.getElementById('targetObject');

const ubahLatar = () => {
 const inputHexa = document.getElementById('inputHexa');
 objTarget.style.backgroundColor = inputHexa.value;
}