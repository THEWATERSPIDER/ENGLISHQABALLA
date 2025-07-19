// ALW Cipher mapping
const ALW_CIPHER = {
    'A': 1, 'L': 2, 'W': 3, 'H': 4, 'S': 5, 'D': 6, 'O': 7, 'Z': 8, 'K': 9, 'V': 10,
    'G': 11, 'R': 12, 'C': 13, 'N': 14, 'Y': 15, 'J': 16, 'U': 17, 'F': 18, 'Q': 19, 
    'B': 20, 'M': 21, 'X': 22, 'I': 23, 'T': 24, 'E': 25, 'P': 26
};

// Reverse mapping for ALW Cipher
const REVERSE_ALW = {};
Object.keys(ALW_CIPHER).forEach(key => {
    REVERSE_ALW[ALW_CIPHER[key]] = key;
});

// WAKANABA Table as shown in the document
const WAKANABA_TABLE = [
    ['A', 'W', 'K', 'N', 'B'],
    ['O', 'H', 'V', 'Y', 'M'],
    ['U', 'S', 'G', 'J', 'X'],
    ['I', 'D', 'R', 'F', 'T'],
    ['E', 'Z', 'C', 'Q', 'P']
];

// Vowels in order of rows
const VOWELS = ['A', 'O', 'U', 'I', 'E'];

// Tab functionality
function initializeTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.getAttribute('data-tab');

            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Add active class to clicked button and corresponding content
            button.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        });
    });
}

// Calculate ALW value for a word
function calculateALW(word) {
    return word.toUpperCase().split('').reduce((sum, letter) => {
        return sum + (ALW_CIPHER[letter] || 0);
    }, 0);
}

// Count only letters (excluding spaces and punctuation)
function countLetters(word) {
    return word.replace(/[^A-Za-z]/g, '').length;
}

// Perform Count Well calculation
function calculateCountWell(word1, word2) {
    // Calculate ALW values
    const word1Value = calculateALW(word1);
    const word2Value = calculateALW(word2);
    
    // Count letters
    const word1Letters = countLetters(word1);
    const word2Letters = countLetters(word2);
    
    // Count Well calculations
    const word1Result = word1Value * word2Letters;
    const word2Result = word2Value * word1Letters;
    const finalTotal = word1Result + word2Result;
    
    return {
        word1: {
            text: word1,
            value: word1Value,
            letters: word1Letters,
            result: word1Result
        },
        word2: {
            text: word2,
            value: word2Value,
            letters: word2Letters,
            result: word2Result
        },
        total: finalTotal
    };
}

// Calculate simple ALW with letter breakdown
function calculateSimpleALW(text) {
    const cleanText = text.toUpperCase().replace(/[^A-Z]/g, '');
    const letters = cleanText.split('');
    const breakdown = letters.map(letter => ({
        letter: letter,
        value: ALW_CIPHER[letter] || 0
    }));
    const total = breakdown.reduce((sum, item) => sum + item.value, 0);
    
    return {
        originalText: text.toUpperCase(),
        cleanText: cleanText,
        breakdown: breakdown,
        total: total
    };
}

// Find the row of a letter in the WAKANABA table
function findRowInWakanaba(letter) {
    for (let i = 0; i < WAKANABA_TABLE.length; i++) {
        if (WAKANABA_TABLE[i].includes(letter)) {
            return i;
        }
    }
    return -1;
}

// Convert a single digit to a barbarous syllable
function digitToSyllable(digit) {
    // Rule 4: When the number 2 appears, it becomes LA
    if (digit === 2) {
        return 'LA';
    }
    
    // Rule 6: When a Zero (0) appears, it is treated as if it were a 7
    if (digit === 0) {
        digit = 7;
    }
    
    // Get the letter from the ALW cipher
    const letter = REVERSE_ALW[digit];
    
    // If letter not found, return empty
    if (!letter) return '';
    
    // Find the row in WAKANABA table
    const row = findRowInWakanaba(letter);
    
    // If letter not found in WAKANABA table, return empty
    if (row === -1) return '';
    
    // Rule 2: If vowel, add L
    if (VOWELS.includes(letter)) {
        return letter + 'L';
    }
    // Rule 1: If consonant, add vowel from its corresponding line
    else {
        return letter + VOWELS[row];
    }
}

// Convert a number to a barbarous word using WAKANABA rules
function numberToBarbarousWord(num) {
    // Rule 5: Double numbers are halved
    if (num === 11) return 'AL';
    if (num === 22) return 'LA';
    if (num === 33) return 'WA';
    if (num === 44) return 'HO';
    if (num === 55) return 'SU';
    if (num === 66) return 'DO';
    if (num === 77) return 'OL';
    if (num === 88) return 'ZE';
    if (num === 99) return 'KE';
    
    // For numbers 26 or less, convert directly
    if (num <= 26) {
        return digitToSyllable(num);
    }
    // Rule 3: For numbers above 26, split into individual digits
    else {
        // Convert each digit separately
        const digits = num.toString().split('').map(d => parseInt(d));
        const syllables = [];
        
        // Process each digit
        for (let i = 0; i < digits.length; i++) {
            syllables.push(digitToSyllable(digits[i]));
        }
        
        // Join with hyphens
        return syllables.join('-');
    }
}

// Generate Kamea from two words
function generateKamea(word1, word2) {
    // Clean and convert words to uppercase
    const verticalWord = word1.toUpperCase().replace(/[^A-Z]/g, '');
    const horizontalWord = word2.toUpperCase().replace(/[^A-Z]/g, '');
    
    // Create kamea grid
    const kamea = [];
    
    // For each letter in the vertical word (rows)
    for (let i = 0; i < verticalWord.length; i++) {
        const row = [];
        const verticalLetter = verticalWord[i];
        const verticalValue = ALW_CIPHER[verticalLetter] || 0;
        
        // For each letter in the horizontal word (columns)
        for (let j = 0; j < horizontalWord.length; j++) {
            const horizontalLetter = horizontalWord[j];
            const horizontalValue = ALW_CIPHER[horizontalLetter] || 0;
            
            // Calculate cell value (sum of the two letter values)
            const cellValue = verticalValue + horizontalValue;
            row.push(cellValue);
        }
        
        kamea.push({
            letter: verticalLetter,
            values: row
        });
    }
    
    return {
        verticalWord: verticalWord,
        horizontalWord: horizontalWord,
        grid: kamea
    };
}

// Generate barbarous words for each row of the kamea
function generateBarbarousWords(kamea) {
    const barbarousWords = [];
    
    // For each row in the kamea
    for (let i = 0; i < kamea.grid.length; i++) {
        const row = kamea.grid[i];
        const rowValues = row.values;
        const barbarousRow = [];
        
        // Convert each value in the row to a barbarous word
        for (let j = 0; j < rowValues.length; j++) {
            const value = rowValues[j];
            const word = numberToBarbarousWord(value);
            barbarousRow.push(word);
        }
        
        barbarousWords.push({
            letter: row.letter,
            words: barbarousRow
        });
    }
    
    return barbarousWords;
}

// Calculate the Grand Word of the Kamea
function calculateGrandWord(kamea) {
    // Initialize total
    let grandTotal = 0;
    
    // Sum all values in the kamea
    const allValues = [];
    for (let i = 0; i < kamea.grid.length; i++) {
        const row = kamea.grid[i];
        for (let j = 0; j < row.values.length; j++) {
            allValues.push(row.values[j]);
            grandTotal += row.values[j];
        }
    }
    
    // Convert to barbarous word
    const grandWord = numberToBarbarousWord(grandTotal);
    
    return {
        values: allValues,
        grandTotal: grandTotal,
        grandWord: grandWord
    };
}

// Display Count Well results
function displayResults(calculation) {
    const resultsDiv = document.getElementById('results');
    const errorDiv = document.getElementById('error-message');
    
    // Hide error message
    errorDiv.style.display = 'none';
    
    // Update word 1 results
    document.getElementById('word1-text').textContent = calculation.word1.text;
    document.getElementById('word1-value').textContent = calculation.word1.value;
    document.getElementById('word1-count').textContent = calculation.word1.letters;
    document.getElementById('word1-calc').textContent = 
        `${calculation.word1.value} × ${calculation.word2.letters} = ${calculation.word1.result}`;
    
    // Update word 2 results
    document.getElementById('word2-text').textContent = calculation.word2.text;
    document.getElementById('word2-value').textContent = calculation.word2.value;
    document.getElementById('word2-count').textContent = calculation.word2.letters;
    document.getElementById('word2-calc').textContent = 
        `${calculation.word2.value} × ${calculation.word1.letters} = ${calculation.word2.result}`;
    
    // Update final result
    document.getElementById('final-total').textContent = calculation.total;
    document.getElementById('breakdown').textContent = 
        `${calculation.word1.result} + ${calculation.word2.result} = ${calculation.total}`;
    
    // Show results
    resultsDiv.style.display = 'block';
}

// Display simple ALW results
function displaySimpleResults(calculation) {
    const resultsDiv = document.getElementById('simple-results');
    const errorDiv = document.getElementById('simple-error-message');
    
    // Hide error message
    errorDiv.style.display = 'none';
    
    // Update word/phrase
    document.getElementById('simple-word').textContent = calculation.originalText;
    
    // Create letter breakdown
    const breakdownDiv = document.getElementById('letter-breakdown');
    breakdownDiv.innerHTML = '';
    
    calculation.breakdown.forEach(item => {
        const letterSpan = document.createElement('span');
        letterSpan.className = 'letter-item';
        letterSpan.textContent = `${item.letter} = ${item.value}`;
        breakdownDiv.appendChild(letterSpan);
    });
    
    // Update total
    document.getElementById('simple-total').textContent = calculation.total;
    
    // Show results
    resultsDiv.style.display = 'block';
}

// Display Kamea results
function displayKameaResults(kamea, barbarousWords) {
    const resultsDiv = document.getElementById('kamea-results');
    const errorDiv = document.getElementById('kamea-error-message');
    const gridDiv = document.getElementById('kamea-grid');
    const barbarousDiv = document.getElementById('barbarous-words-list');
    
    // Hide error message
    errorDiv.style.display = 'none';
    
    // Update phrase
    document.getElementById('kamea-phrase').textContent = 
        `${kamea.verticalWord} ${kamea.horizontalWord}`;
    
    // Clear previous results
    gridDiv.innerHTML = '';
    barbarousDiv.innerHTML = '';
    
    // Create kamea grid
    
    // Create header row with horizontal word letters
    const headerRow = document.createElement('div');
    headerRow.className = 'kamea-row';
    
    // Empty corner cell
    const cornerCell = document.createElement('div');
    cornerCell.className = 'kamea-cell kamea-corner';
    headerRow.appendChild(cornerCell);
    
    // Horizontal word letters as headers
    for (let i = 0; i < kamea.horizontalWord.length; i++) {
        const headerCell = document.createElement('div');
        headerCell.className = 'kamea-cell kamea-header';
        headerCell.textContent = kamea.horizontalWord[i];
        headerRow.appendChild(headerCell);
    }
    
    gridDiv.appendChild(headerRow);
    
    // Create rows for each letter in vertical word
    for (let i = 0; i < kamea.grid.length; i++) {
        const row = kamea.grid[i];
        const rowElement = document.createElement('div');
        rowElement.className = 'kamea-row';
        
        // Vertical word letter as header
        const letterCell = document.createElement('div');
        letterCell.className = 'kamea-cell kamea-header';
        letterCell.textContent = row.letter;
        rowElement.appendChild(letterCell);
        
        // Values for each cell
        for (let j = 0; j < row.values.length; j++) {
            const valueCell = document.createElement('div');
            valueCell.className = 'kamea-cell';
            
            const valueSpan = document.createElement('span');
            valueSpan.className = 'kamea-value';
            valueSpan.textContent = row.values[j];
            
            valueCell.appendChild(valueSpan);
            rowElement.appendChild(valueCell);
        }
        
        gridDiv.appendChild(rowElement);
    }
    
    // Create barbarous words list
    for (let i = 0; i < barbarousWords.length; i++) {
        const row = barbarousWords[i];
        const rowElement = document.createElement('div');
        rowElement.className = 'barbarous-row';
        
        // Row header (letter from vertical word)
        const headerElement = document.createElement('div');
        headerElement.className = 'barbarous-row-header';
        headerElement.textContent = `Row ${row.letter}:`;
        rowElement.appendChild(headerElement);
        
        // Barbarous words for this row
        const wordsElement = document.createElement('div');
        wordsElement.className = 'barbarous-word';
        wordsElement.textContent = row.words.join(' ');
        rowElement.appendChild(wordsElement);
        
        barbarousDiv.appendChild(rowElement);
    }
    
    // Calculate and display the Grand Word
    const grandWordResult = calculateGrandWord(kamea);
    
    // Display the calculation
    document.getElementById('grand-word-calculation').textContent = 
        `Sum of all values: ${grandWordResult.grandTotal}`;
    
    // Display the Grand Word
    document.getElementById('grand-word-value').textContent = grandWordResult.grandWord;
    
    // Show results
    resultsDiv.style.display = 'block';
}

// Display error message
function displayError(message) {
    const resultsDiv = document.getElementById('results');
    const errorDiv = document.getElementById('error-message');
    
    resultsDiv.style.display = 'none';
    errorDiv.textContent = message;
    errorDiv.style.display = 'block';
}

// Display simple error message
function displaySimpleError(message) {
    const resultsDiv = document.getElementById('simple-results');
    const errorDiv = document.getElementById('simple-error-message');
    
    resultsDiv.style.display = 'none';
    errorDiv.textContent = message;
    errorDiv.style.display = 'block';
}

// Display kamea error message
function displayKameaError(message) {
    const resultsDiv = document.getElementById('kamea-results');
    const errorDiv = document.getElementById('kamea-error-message');
    
    resultsDiv.style.display = 'none';
    errorDiv.textContent = message;
    errorDiv.style.display = 'block';
}

// Main Count Well calculation function
function performCalculation() {
    const input = document.getElementById('phrase-input').value.trim();
    
    if (!input) {
        displayError('Please enter two words separated by a space.');
        return;
    }
    
    // Split input into words (handle multiple spaces)
    const words = input.split(/\s+/).filter(word => word.length > 0);
    
    if (words.length !== 2) {
        displayError('Please enter exactly two words separated by a space.');
        return;
    }
    
    // Check if words contain only letters
    const validWordPattern = /^[A-Za-z]+$/;
    if (!validWordPattern.test(words[0]) || !validWordPattern.test(words[1])) {
        displayError('Words should contain only letters (A-Z).');
        return;
    }
    
    // Perform calculation
    const calculation = calculateCountWell(words[0], words[1]);
    displayResults(calculation);
}

// Main simple ALW calculation function
function performSimpleCalculation() {
    const input = document.getElementById('simple-input').value.trim();
    
    if (!input) {
        displaySimpleError('Please enter a word or phrase.');
        return;
    }
    
    // Check if input contains at least one letter
    if (!/[A-Za-z]/.test(input)) {
        displaySimpleError('Input must contain at least one letter.');
        return;
    }
    
    // Perform calculation
    const calculation = calculateSimpleALW(input);
    displaySimpleResults(calculation);
}

// Main Kamea calculation function
function performKameaCalculation() {
    const input = document.getElementById('kamea-input').value.trim();
    
    if (!input) {
        displayKameaError('Please enter two words separated by a space.');
        return;
    }
    
    // Split input into words (handle multiple spaces)
    const words = input.split(/\s+/).filter(word => word.length > 0);
    
    if (words.length !== 2) {
        displayKameaError('Please enter exactly two words separated by a space.');
        return;
    }
    
    // Check if words contain only letters
    const validWordPattern = /^[A-Za-z]+$/;
    if (!validWordPattern.test(words[0]) || !validWordPattern.test(words[1])) {
        displayKameaError('Words should contain only letters (A-Z).');
        return;
    }
    
    // Generate kamea
    const kamea = generateKamea(words[0], words[1]);
    
    // Generate barbarous words
    const barbarousWords = generateBarbarousWords(kamea);
    
    // Display results
    displayKameaResults(kamea, barbarousWords);
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Initialize tabs
    initializeTabs();
    
    // Calculator event listeners
    document.getElementById('calculate-btn').addEventListener('click', performCalculation);
    document.getElementById('simple-calculate-btn').addEventListener('click', performSimpleCalculation);
    document.getElementById('kamea-calculate-btn').addEventListener('click', performKameaCalculation);

    document.getElementById('phrase-input').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performCalculation();
        }
    });

    document.getElementById('simple-input').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSimpleCalculation();
        }
    });
    
    document.getElementById('kamea-input').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performKameaCalculation();
        }
    });

    // Auto-uppercase input
    document.getElementById('phrase-input').addEventListener('input', function(e) {
        e.target.value = e.target.value.toUpperCase();
    });

    document.getElementById('simple-input').addEventListener('input', function(e) {
        e.target.value = e.target.value.toUpperCase();
    });
    
    document.getElementById('kamea-input').addEventListener('input', function(e) {
        e.target.value = e.target.value.toUpperCase();
    });

    // Example calculation on page load
    document.getElementById('phrase-input').value = 'AZURE LIDDED';
    performCalculation();
    
    // Example for kamea
    document.getElementById('kamea-input').value = 'BLACK STONE';
});
