

const names = ['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', 'Tina', 'Bert', 'Jada']
const para = document.createElement('p');

// Add your code here
function chooseName() {
    const randomNumber = Math.floor(Math.random() *names.length);
    const choice = names [randomNumber];

    para.context(choice)
}


// Don't edit the code below here!

section.innerHTML = ' ';

section.appendChild(para);
    