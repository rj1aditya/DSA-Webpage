document.addEventListener('DOMContentLoaded', function() {
    const questions = [
        {
            title: 'Print 1-N',
            description: [
                'Print name N number of times',
                'Print from 1-N',
                'Printf from N-1',
                'Printf from 1-N using backtracking recursion',
                'Printf from N-1 using backtracking recursion'
            ],
            solution: 'recursion_solution/print_name.html',
            nt: '--'
        },
        {
            title: 'Parameterized and functional recursion',
            description: [
                'Sum of first N number using Parameterized and functional recursion.'
            ],
            solution: 'recursion_solution/sum_of_N_Number.html',
            nt: [
                'Parameterized means we pass the extra arguments into the function to collect the results in it then when end point come we print it.',
                'Function recursion is nothing but we return the answer by function itself.',
                'E.g. return fun(n-1)+func(n-2);'
            ]
        },
        {
            title: 'Functional recursion',
            description: [
                'Reverse an array and check String is palindrome using functional recursion.'
            ],
            solution: 'recursion_solution/reverseArray_Palindrome.html',
            nt: '--'
        },
        {
            title: 'Multiple recursion calls or Tree recursion',
            description: [
                'Fibonacci series.'
            ],
            solution: 'recursion_solution/fibonacciSeries.html',
            nt: '--'
        },
        {
            title: 'Print all subsequences of an array or a string',
            description: [
                'Print all subsequences of an array or a string.'
            ],
            solution: 'recursion_solution/printAllSubsequences.html',
            nt: '--'
        },
        {
            title: 'All Kind of patterns in Recursion',
            description: [
                'Print All subsequences of an array whose sum is K',
                'Print only subsequence of an array whose sum is K',
                'Print the total count of subsequences of and array whose sum is K'
            ],
            solution: 'recursion_solution/AllKind_PatternIn_Recursion.html',
            nt: ['so here we learn 3 type of different question could be asked in a problem, like',
                'print all or print only count or print any one.'
                ]
        },
        {
            title: 'Combination Sum1',
            description: [
                'https://leetcode.com/problems/combination-sum/description/'
            ],
            solution: 'recursion_solution/combinationSum1.html',
            nt: '--'
        },
        {
            title: 'Combination Sum2',
            description: [
                'https://leetcode.com/problems/combination-sum-ii/description/'
            ],
            solution: 'recursion_solution/combinationSum2.html',
            nt: '2nd type of recursion, in a recursion use a for loop'
        },
        {
            title: 'Subset sum1',
            description: [
                'https://practice.geeksforgeeks.org/problems/subset-sum-problem-1611555638/1'
            ],
            solution: 'recursion_solution/subsetSum1.html',
            nt: ['You will learn overlapping of the problem so memoization is done here.',
                'Try [2, 3, 1, 1] target=4.',
                'When you will draw a tree of recursion you will get overlapping if we start recursion from the last index.']
        },
        {
            title: 'Subset sum2',
            description: [
                'https://leetcode.com/problems/subsets-ii/submissions/808067059/'
            ],
            solution: 'recursion_solution/subsetSum2.html',
            nt: ['this is same question as combination sum2 but here we have to pick each combination.']
        },
        {
            title: 'Print all permutation of an array',
            description: [
                'https://leetcode.com/problems/permutations/description/','solve this problem using both way: using map and without using map'
            ],
            solution: 'recursion_solution/printAllPermutation.html',
            nt: '--'
        },
        {
            title: 'N Queens',
            description: [
                'https://leetcode.com/problems/n-queens/'
            ],
            solution: 'recursion_solution/NQueen.html',
            nt: ['Lower diagonal trick: start with filling 0 from the last row and first col, then to guess what could be the formula see the middle diagonal. Middle diagonal for lower diagonal case will be the n-1 number.']
        },
        {
            title: 'Sudoku',
            description: [
                'https://leetcode.com/problems/sudoku-solver/'
            ],
            solution: 'recursion_solution/Sudoku.html',
            nt: '--'
        },
        {
            title: 'M-Coloring Problem',
            description: [
                'https://practice.geeksforgeeks.org/problems/m-coloring-problem-1587115620/1'
            ],
            solution: 'recursion_solution/MColoring.html',
            nt: '--'
        },
        {
            title: 'Palindrome Partitioning',
            description: [
                'https://leetcode.com/problems/palindrome-partitioning/'
            ],
            solution: 'recursion_solution/palindromePartitioning.html',
            nt: '--'
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
