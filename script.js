// Input field aur Buttons ko select karein
const inputField = document.querySelector('.input input');
const buttons = document.querySelectorAll('button');

// Memory variable (M+ aur M- ke liye)
let memory = 0;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.innerText;

        // 1. AC (All Clear) Logic
        if (value === 'AC') {
            inputField.value = "";
        }

        // 2. Calculation Logic (=)
        else if (value === '=') {
            try {
                // Agar input khali nahi hai to solve karein
                if (inputField.value !== "") {
                    inputField.value = eval(inputField.value);
                }
            } catch (error) {
                inputField.value = "Error";
            }
        }

        // 3. Percentage (%) Logic
        else if (value === '%') {
            if (inputField.value !== "") {
                inputField.value = eval(inputField.value) / 100;
            }
        }

        // 4. Memory Plus (M+) - Current value ko memory mein add karein
        else if (value === 'M+') {
            memory += parseFloat(inputField.value) || 0;
            inputField.value = ""; // Screen clear kar dein taake naya number likh sakein
            console.log("Memory:", memory);
        }

        // 5. Memory Minus (M-) - Current value ko memory se subtract karein
        else if (value === 'M-') {
            memory -= parseFloat(inputField.value) || 0;
            inputField.value = "";
            console.log("Memory:", memory);
        }

        // 6. Numbers aur Operators add karein
        else {
            inputField.value += value;
        }
    });
});
