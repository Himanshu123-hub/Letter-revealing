# ✨ Text Scramble Effect | JavaScript DOM Project

## 📌 About the Project

The **Text Scramble Effect** is a creative JavaScript DOM project that transforms normal text into a random sequence of characters and gradually reveals the original text.

This effect creates an interesting animation where random letters continuously change until the original sentence becomes visible. It is inspired by modern website text animations and adds a stylish touch to user interfaces.

## 🚀 Features

- Random character generation using JavaScript.
- Smooth text-revealing animation.
- Dynamic DOM manipulation.
- Uses JavaScript `setInterval()` for animation timing.
- Original text is revealed character by character.
- Lightweight and easy-to-use project.

## 🛠️ Technologies Used

- **HTML5** – Structure of the webpage.
- **CSS3** – Styling and layout.
- **JavaScript** – DOM manipulation and animation logic.

## 🧠 JavaScript Concepts Used

This project helped me practice the following JavaScript concepts:

- `document.querySelector()` – Selecting HTML elements.
- `innerHTML` – Accessing and updating HTML content.
- `String.split()` – Converting strings into arrays.
- `Array.map()` – Iterating over array elements.
- `Math.random()` – Generating random characters.
- `Math.floor()` – Getting random integer indexes.
- `Array.join()` – Converting an array back into a string.
- `setInterval()` – Running the animation repeatedly.
- Variables and functions.

## ⚙️ How It Works

1. First, JavaScript selects the paragraph element from the HTML document.
2. The original text is stored in a variable.
3. A collection of uppercase and lowercase English letters is created.
4. The `randomText()` function generates random characters.
5. The `map()` method checks each character's index.
6. Characters before the current iteration position are revealed as original text.
7. The remaining characters are replaced with randomly generated letters.
8. The `iteration` variable increases gradually.
9. `setInterval()` executes the function every 30 milliseconds to create the animation.

## 📂 Project Structure

```text
Text-Scramble-Effect/
│
├── index.html
├── style.css
└── script.js
```

## ▶️ How to Run the Project

1. Clone this repository:

   ```bash
   git clone YOUR_REPOSITORY_URL
   ```

2. Open the project folder in VS Code.
3. Open `index.html` in your browser.
4. Watch the text scramble animation!

## 🎯 Learning Outcome

Building this project improved my understanding of JavaScript DOM manipulation, array methods, random number generation, string manipulation, and timed animations.

It was a great practice project for improving my JavaScript problem-solving skills and understanding how dynamic text effects work.

## 👨‍💻 Author

**Himanshu Gope**

BCA Student | Aspiring Frontend Developer

---

⭐ If you like this project, don't forget to give it a star!
