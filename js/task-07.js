'use strict';

const inputRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');
const handletext = (event) => {
    textRef.style.fontSize =` ${event.target.value}px`
}
inputRef.addEventListener('input', handletext);