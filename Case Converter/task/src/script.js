const textArea = document.querySelector('#text');
const upperCase = document.querySelector('#upper-case');
const lowerCase = document.querySelector('#lower-case');
const properCase = document.querySelector('#proper-case');
const sentenceCase = document.querySelector('#sentence-case');
const saveTextButton = document.querySelector('#save-text-file')

upperCase.addEventListener('click', () => {
   const textFromTextArea = textArea.value.toUpperCase();
    textArea.value = textFromTextArea
});

lowerCase.addEventListener('click', () => {
    const textFromTextArea = textArea.value.toLowerCase();
    textArea.value = textFromTextArea
});

properCase.addEventListener('click', () => {
    const textFromTextArea = textArea.value.split(' ');

    for (let i = 0; i < textFromTextArea.length; i++){
        textFromTextArea[i] = textFromTextArea[i].charAt(0).toUpperCase() + textFromTextArea[i].substr(1).toLowerCase();
    }

    textArea.value = textFromTextArea.join(' ')
});

sentenceCase.addEventListener('click', () => {
    const textFromTextArea = textArea.value.split('. ')

    for (let i = 0; i < textFromTextArea.length; i++){
        textFromTextArea[i] = textFromTextArea[i].charAt(0).toUpperCase() + textFromTextArea[i].substr(1).toLowerCase();
    }

    textArea.value = textFromTextArea.join('. ')
});

saveTextButton.addEventListener('click', () => {
    download('text.txt', textArea.value)
});

function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

