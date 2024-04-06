document.addEventListener('DOMContentLoaded', function() {
    const questions = [
        {
            title: 'Count Ways To Reach The N-th Stairs',
            description: ['https://www.naukri.com/code360/problems/count-ways-to-reach-nth-stairs_798650?source=youtube&campaign=striver_dp_videos&utm_source=youtube&utm_medium=affiliate&utm_campaign=striver_dp_videos&leftPanelTabValue=PROBLEM'
            ],
            solution: 'DP_solution/NStair.html',
            nt: 'The expression 1e9+7 represents the number 1,000,000,007. Its commonly used in programming as a prime number close to \(10^9\) for computations involving large numbers. This helps prevent integer overflow and ensures that results fit within the range of standard integer types.'
        },
        // Add more question objects here
    ];
    //this section is to add element dynamically and make hidden element visible
    {
        const questionList = document.querySelector('.question-list');

        questions.forEach((question, index) => {
            const listItem = document.createElement('li');
            const questionTitle = document.createElement('h3');
            const description = document.createElement('div');
            const solutionLink = document.createElement('a');
            const nts = document.createElement('h4');
    
            questionTitle.textContent = `Question ${index + 1}: ${question.title}`;
            nts.textContent = 'notes';
            questionTitle.classList.add('question-title');
            nts.classList.add('notes');
            const notesContainer = document.createElement('div');
            notesContainer.classList.add('note');
            if (Array.isArray(question.nt)) {
                question.nt.forEach(note => {
                    const noteParagraph = document.createElement('p');
                    noteParagraph.textContent = note;
                    notesContainer.appendChild(noteParagraph);
                });
            } else {
                notesContainer.textContent = question.nt;
            }
            nts.appendChild(notesContainer);
            
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
            description.appendChild(nts);
    
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
    
        const noteTitles = document.querySelectorAll('.notes');
    
        noteTitles.forEach(title => {
            title.addEventListener('click', function() {
                const notesContainer = this.parentElement.querySelector('.note'); // Adjusted to find .note within parent element
                notesContainer.style.display = (notesContainer.style.display === 'none') ? 'block' : 'none';
            });
        });
    }
});
