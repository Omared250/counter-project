// selecting the father elemente wich will contain all the other elements
const rootElement = document.getElementById('root');

// creating the main content
const mainContainer = document.createElement('div');
mainContainer.classList.add('main-container')

// creatin the title, the paragraph with the information about the page
const counterTitle = document.createElement('h1');
counterTitle.textContent = 'Online Counter';
counterTitle.classList.add('title')

const paragraph = document.createElement('p');
paragraph.textContent = 'increase a number with a button click!';
paragraph.classList.add('paragraph')

// creating the counter
const counterContainer = document.createElement('div');
counterContainer.classList.add('counter-container')

const lessCounter = document.createElement('button');
lessCounter.textContent = '-';
lessCounter.classList.add('buttons')

// making lessCounter functional

lessCounter.addEventListener('click', () => {
    if (numberCounter.textContent <= 0) {
        return window.alert('Is not possible to count less than 0!');
    } else {
        return numberCounter.textContent--
    }
})

const numberCounter = document.createElement('p');
numberCounter.textContent = 0;
numberCounter.classList.add('number-counter')

const plusCounter = document.createElement('button');
plusCounter.textContent = '+';
plusCounter.classList.add('buttons')

// making plusCounter functional

plusCounter.addEventListener('click', () => {
    numberCounter.textContent++
})

// append counter elements to its father container
counterContainer.appendChild(lessCounter);
counterContainer.appendChild(numberCounter);
counterContainer.appendChild(plusCounter);

// append all elements to the main
mainContainer.appendChild(counterTitle);
mainContainer.appendChild(paragraph);
mainContainer.appendChild(counterContainer);

// append to the root
rootElement.appendChild(mainContainer);