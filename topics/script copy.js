document.addEventListener('DOMContentLoaded', function() {
    const questions = [
        {
            id: 'question1',
            title: 'Question 1: Print 1-N',
            description: [
                'Print name N number of times',
                'Print from 1-N',
                'Printf from N-1',
                'Printf from 1-N using backtracking recursion',
                'Printf from N-1 using backtracking recursion'
            ],
            solution: 'recursion_solution/print_name.html'
        },
        // Add more question objects here
    ];

    const questionList = document.querySelector('.question-list');

    questions.forEach(question => {
        const listItem = document.createElement('li');
        const questionTitle = document.createElement('h3'); // Create <h3> element for question title
        const description = document.createElement('div');
        const solutionLink = document.createElement('a');

        questionTitle.textContent = question.title;
        questionTitle.classList.add('question-title'); // Add the question-title class to the question title element

        description.classList.add('description');
        question.description.forEach(desc => {
            const paragraph = document.createElement('p');
            paragraph.textContent = desc;
            description.appendChild(paragraph);
        });

        solutionLink.href = question.solution;
        solutionLink.target = '_blank';
        solutionLink.textContent = 'Solution';

        description.appendChild(solutionLink);

        listItem.appendChild(questionTitle);
        listItem.appendChild(description);

        questionList.appendChild(listItem);
    });
    
    // Add event listeners for toggling descriptions and notes
    const questionTitles = document.querySelectorAll('.question-title');

    questionTitles.forEach(title => {
        title.addEventListener('click', function() {
            const description = this.nextElementSibling;
            description.style.display = (description.style.display === 'block') ? 'none' : 'block';
        });
    });

    const notes = document.querySelectorAll('.notes');

    notes.forEach(note => {
        note.addEventListener('click', function() {
            const description = this.nextElementSibling;
            description.style.display = (description.style.display === 'block') ? 'none' : 'block';
        });
    });
});
