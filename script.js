function showCode(questionId) {
    var codeDisplay = document.getElementById('codeDisplay');
    var code = '';
  
    // Simulated code retrieval based on question ID
    switch (questionId) {
      case 'arrayQ1':
        code = 'Code for Array Question 1';
        break;
      // Add more cases for other questions
    }
  
    codeDisplay.textContent = code;
  }
  