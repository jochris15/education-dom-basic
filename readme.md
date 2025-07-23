# DOM

## What is DOM?
Apa itu DOM? DOM (Document Object Model) adalah representasi struktural dari dokumen HTML atau XML yang memungkinkan pemrogram untuk mengakses dan memanipulasi konten, struktur, dan gaya dokumen tersebut menggunakan JavaScript. DOM menyediakan antarmuka yang memungkinkan interaksi dengan elemen-elemen dalam halaman web.

DOM mengubah dokumen menjadi struktur pohon, di mana setiap elemen HTML menjadi node dalam pohon tersebut. Dengan DOM, kita dapat menambahkan, menghapus, atau memodifikasi elemen-elemen dalam halaman web secara dinamis.

**TLDRnya; DOM adalah cara untuk mengakses dan mengubah elemen-elemen dalam halaman web menggunakan JavaScript. Ini memungkinkan kita untuk membuat halaman web yang interaktif dan responsif terhadap tindakan pengguna. DOM juga bisa langsung diakses di javascript.**

## DOM Methods
- [DOM Document](#dom-document)
- [DOM HTML](#dom-html)
- [DOM CSS](#dom-css)
- [DOM Event Listener](#dom-event-listener)
- [DOM Alert & Prompt](#dom-alert--prompt)

## DOM Document

DOM menyediakan berbagai metode untuk mengakses elemen-elemen dalam dokumen HTML. Kita dapat menggunakan metode seperti `getElementById()`, `getElementsByClassName()`, `getElementsByTagName()`, dan `querySelector()` untuk mendapatkan referensi ke elemen-elemen tersebut.

### Basic Document Methods

```js
// Get element by ID
const element = document.getElementById('myElement');

// Get elements by class name
const elements = document.getElementsByClassName('myClass');

// Get elements by tag name
const divs = document.getElementsByTagName('div');

// Query selector (modern approach)
const element2 = document.querySelector('#myElement');
const elements2 = document.querySelectorAll('.myClass');
```

## DOM HTML

DOM juga menyediakan metode untuk memanipulasi konten HTML dalam elemen-elemen. Kita dapat mengubah teks, menambahkan atau menghapus elemen, dan mengatur atribut elemen.

### Content Manipulation

```js
// Get and set innerHTML
const container = document.getElementById('container');
console.log(container.innerHTML); // Get current HTML content

container.innerHTML = '<h2>New Content</h2><p>Updated paragraph</p>';

// Get and set textContent
const title = document.querySelector('.title');
console.log(title.textContent); // Get text only

title.textContent = 'Updated Title';

// Get and set attributes
const image = document.querySelector('img');
image.setAttribute('src', 'new-image.jpg');
image.setAttribute('alt', 'New Image');

const srcValue = image.getAttribute('src');
```

### Adding and Removing Elements

```js
// Create and append elements
const newParagraph = document.createElement('p');
newParagraph.textContent = 'This is a new paragraph';
document.body.appendChild(newParagraph);

// Insert before existing element
const container = document.getElementById('container');
const firstChild = container.firstElementChild;
container.insertBefore(newParagraph, firstChild);

// Remove elements
const elementToRemove = document.querySelector('.text');
elementToRemove.remove();
```

## DOM CSS

DOM juga memungkinkan kita untuk mengubah gaya elemen-elemen dalam dokumen HTML. Kita dapat mengatur properti CSS secara langsung melalui JavaScript atau dengan menambahkan atau menghapus kelas CSS.

### Style Manipulation

```js
// Direct style manipulation
const element = document.getElementById('myElement');

// Set individual styles
element.style.color = 'red';
element.style.backgroundColor = 'yellow';
element.style.fontSize = '20px';
element.style.margin = '10px';

// Set multiple styles at once
element.style.cssText = 'color: blue; background-color: lightgray; padding: 10px;';
```

### Class Manipulation

```js
const element = document.querySelector('.myClass');

// Add class
element.classList.add('newClass');
element.classList.add('class1', 'class2', 'class3');

// Remove class
element.classList.remove('oldClass');

// Toggle class
element.classList.toggle('active'); // Add if not present, remove if present

// Check if class exists
if (element.classList.contains('active')) {
    console.log('Element has active class');
}

// Replace class
element.classList.replace('oldClass', 'newClass');
```

## DOM Event Listener

DOM juga menyediakan metode untuk menangani interaksi pengguna dengan elemen-elemen dalam dokumen HTML. Kita dapat menambahkan event listener untuk berbagai jenis peristiwa seperti klik, input, submit, dan lainnya.

### Basic Event Listeners

```js
// Click event
const button = document.getElementById('myButton');

function handleClick() {
    console.log('Button clicked!');
}

button.addEventListener('click', handleClick);

// Event with parameters
function handleClick(event) {
    console.log('Clicked element:', event.target);
    console.log('Event type:', event.type);
    event.preventDefault(); // Prevent default behavior, ex : refreshing the page
}

button.addEventListener('click', handleClick);
```

### Common Event Types

```js
const input = document.getElementById('textInput');
const form = document.getElementById('myForm');

// Input events
function handleInput(event) {
    console.log('Input value:', event.target.value);
}

input.addEventListener('input', handleInput);

// Form events
function handleSubmit(event) {
    event.preventDefault(); // Prevent form submission
    console.log('Form submitted with value:', input.value);
}

form.addEventListener('submit', handleSubmit);
```

## DOM Alert & Prompt

DOM juga menyediakan metode untuk menampilkan dialog sederhana kepada pengguna, seperti alert, confirm, dan prompt. Meskipun ini berguna untuk interaksi cepat, disarankan untuk menggunakan modal kustom atau library UI modern untuk pengalaman pengguna yang lebih baik.

### Alert Dialog

```js
// Simple alert
alert('Hello World!');

// Alert with variable
const userName = 'John';
alert(`Welcome, ${userName}!`);
```

### Confirm Dialog

```js
// Confirm dialog returns boolean
const userConfirmed = confirm('Are you sure you want to delete this item?');

function handleDelete() {
    if (userConfirmed) {
        // Perform deletion logic
        alert('Item deleted successfully!');
    } else {
        alert('Deletion cancelled');
    }
}

// Confirm with event handler
document.getElementById('deleteButton').addEventListener('click', handleDelete);
```

### Prompt Dialog

```js
// Basic prompt
const userName = prompt('What is your name?');

if (userName !== null && userName !== '') {
    alert(`Hello, ${userName}!`);
} else {
    alert('No name provided');
}

// Prompt with default value
const age = prompt('What is your age?', '25');
```

## Summary

- **DOM Document**: Use methods like `getElementById()`, `querySelector()` to access elements
- **DOM HTML**: Manipulate content with `innerHTML`, `textContent`, and element creation
- **DOM CSS**: Change styles with `style` property and manage classes with `classList`
- **DOM Event Listeners**: Handle user interactions with `addEventListener()`
- **DOM Alert & Prompt**: Use browser dialogs for simple user communication (consider modern alternatives for better UX)
