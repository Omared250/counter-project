// selecting the father elemente wich will contain all the other elements
const rootElement = document.getElementById('root');

// creating the main content
const mainContainer = document.createElement('div');

// creatin the title, the paragraph with the information about the page
const counterTitle = document.createElement('h1');
counterTitle.textContent = 'Online Counter';

const paragraph = document.createElement('p');
paragraph.textContent = 'increase a number with a button click!';

// creating the counter
const counterContainer = document.createElement('div');

const lessCounter = document.createElement('button');
lessCounter.textContent = '-';

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

const plusCounter = document.createElement('button');
plusCounter.textContent = '+';

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