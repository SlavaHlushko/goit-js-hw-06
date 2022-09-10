const inputRef = document.querySelector('#name-input');
const outputRef = document.querySelector("#name-output");

const handleInputName = (event) => {
    const { value } = event.target;
    outputRef.textContent = value ? value : "Anonymous";
    console.log(value);
}

inputRef.addEventListener('input', handleInputName);