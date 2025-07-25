// 1. DOM Document Methods Demo
function demonstrateDocumentMethods() {
    const results = document.getElementById('documentResults');

    // Get element by ID
    const byId = document.getElementById('targetElement');

    // Get elements by class name
    const byClass = document.getElementsByClassName('testClass');

    // Get elements by tag name
    const byTag = document.getElementsByTagName('p');

    // Query selector
    const byQuerySelector = document.querySelector('#targetElement');
    const byQuerySelectorAll = document.querySelectorAll('.testClass');

    // Console.log exists at terminal browser
    console.log(byQuerySelector);

    // Hanya untuk kepentingan demo
    results.innerHTML = `
        <h4>Results:</h4>
        <p>getElementById: ${byId ? byId.textContent : 'Not found'}</p>
        <p>getElementsByClassName: Found ${byClass.length} elements</p>
        <p>getElementsByTagName: Found ${byTag.length} paragraph elements</p>
        <p>querySelector: ${byQuerySelector ? byQuerySelector.textContent : 'Not found'}</p>
        <p>querySelectorAll: Found ${byQuerySelectorAll.length} elements</p>
    `;
}

// 2. DOM HTML Manipulation Demo
function changeContent() {
    const container = document.getElementById('htmlContainer');

    // Change innerHTML
    container.innerHTML = `
        <h3 class="title">Updated Title via innerHTML</h3>
        <p>This content was changed using innerHTML</p>
        <strong>New HTML elements added!</strong>
    `;
}

function addNewElement() {
    const container = document.getElementById('htmlContainer');
    const newParagraph = document.createElement('p');
    newParagraph.textContent = `New paragraph added at ${new Date().toLocaleTimeString()}`;

    // Added CSS Method
    newParagraph.style.backgroundColor = '#e7f3ff';
    newParagraph.style.padding = '5px';
    container.appendChild(newParagraph);
}

function removeElement() {
    const container = document.getElementById('htmlContainer');
    const lastChild = container.lastElementChild;
    if (lastChild) {
        lastChild.remove();
    }
}

// 3. DOM CSS Manipulation Demo
function changeStyles() {
    const element = document.getElementById('cssTarget');
    element.style.color = 'red';
    element.style.backgroundColor = 'lightblue';
    element.style.fontSize = '20px';
    element.style.padding = '15px';
    element.style.border = '2px solid red';
    element.style.borderRadius = '8px';
}

function toggleClass() {
    const element = document.getElementById('cssTarget');
    element.classList.toggle('highlight');
}

function addActiveClass() {
    const element = document.getElementById('cssTarget');
    element.classList.toggle('active');
}

function resetStyles() {
    const element = document.getElementById('cssTarget');
    element.style.cssText = '';
    element.className = '';
    element.textContent = 'Element untuk styling (Reset)';
}

// 4. DOM Event Listeners Demo
document.addEventListener('DOMContentLoaded', function () {
    const clickButton = document.getElementById('clickButton');
    const textInput = document.getElementById('textInput');
    const form = document.getElementById('demoForm');
    const eventResults = document.getElementById('eventResults');

    // Click event
    function handleClick(event) {
        eventResults.innerHTML += `<p>Button clicked at ${new Date().toLocaleTimeString()}</p>`;
        console.log('Button clicked!', event);
    }

    clickButton.addEventListener('click', handleClick);

    // Input event
    function handleInput(event) {
        eventResults.innerHTML = `<p>Input value: "${event.target.value}"</p>`;
    }

    textInput.addEventListener('input', handleInput);

    // Form submit event
    function handleSubmit(event) {
        event.preventDefault();
        const formInput = document.getElementById('formInput');
        eventResults.innerHTML += `<p>Form submitted with value: "${formInput.value}"</p>`;
        formInput.value = ''; // Clear input
    }

    form.addEventListener('submit', handleSubmit);
});

// 5. DOM Alert & Prompt Demo
function showAlert() {
    alert('Hello! This is a simple alert dialog.');
}

function showConfirm() {
    const result = confirm('Do you want to continue?');
    const resultsDiv = document.getElementById('dialogResults');
    resultsDiv.innerHTML = `<p>Confirm result: ${result ? 'User clicked OK' : 'User clicked Cancel'}</p>`;
}

function showPrompt() {
    const name = prompt('What is your name?', 'Enter your name here');
    const resultsDiv = document.getElementById('dialogResults');

    if (name !== null && name !== '') {
        resultsDiv.innerHTML = `<p>Hello, ${name}! Nice to meet you.</p>`;
    } else {
        resultsDiv.innerHTML = `<p>No name provided or prompt was cancelled.</p>`;
    }
}