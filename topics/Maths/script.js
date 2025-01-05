document.addEventListener("DOMContentLoaded", function () {
  const questions = [
    {
      title: "Prime Number",
      description: [
        "https://www.geeksforgeeks.org/problems/prime-number2314/1",
      ],
      solution: "Maths/PrimeNumber.html",
      nt: "",
    },
    {
      title: "All prime factors of a number",
      description: [
        "https://www.geeksforgeeks.org/problems/prime-factors5052/0",
      ],
      solution: "Maths/primefactors.html",
      nt: "",
    },
    {
      title: "Power Exponentiation",
      description: ["https://leetcode.com/problems/powx-n/description/"],
      solution: "Maths/PowerExponentiation.html",
      nt: "",
    },
    {
      title: "Sieve of Eratosthenes",
      description: [
        "https://www.geeksforgeeks.org/problems/sieve-of-eratosthenes5242/1",
      ],
      solution: "Maths/SieveofEratosthenes.html",
      nt: "",
    },
    {
      title: "Count Prime in range",
      description: ["Count Prime in range"],
      solution: "Maths/CountPrimeInRange.html",
      nt: "",
    },
    {
      title: "",
      description: [""],
      solution: "Maths/.html",
      nt: "",
    },
    //Dummy #aa8fab
    {
      title: "",
      description: [""],
      solution: "Maths/.html",
      nt: "",
    },
    // Add more question objects here
  ];
  {
    // Add event listeners for toggling descriptions and notes
    const questionList = document.querySelector(".question-list");

    questions.forEach((question, index) => {
      const listItem = document.createElement("li");
      const questionTitle = document.createElement("h3");
      const description = document.createElement("div");
      const solutionLink = document.createElement("a");
      const nts = document.createElement("h4");

      questionTitle.textContent = `Question ${index + 1}: ${question.title}`;
      nts.textContent = "notes";
      questionTitle.classList.add("question-title");
      nts.classList.add("notes");
      const notesContainer = document.createElement("div");
      notesContainer.classList.add("note");
      if (Array.isArray(question.nt)) {
        question.nt.forEach((note) => {
          const noteParaslidingWindow = document.createElement("p");
          noteParaslidingWindow.textContent = note;
          notesContainer.appendChild(noteParaslidingWindow);
        });
      } else {
        notesContainer.textContent = question.nt;
      }
      nts.appendChild(notesContainer);

      description.classList.add("description");
      question.description.forEach((desc) => {
        if (desc.startsWith("http")) {
          // Check if the description is a URL
          const link = document.createElement("a");
          link.href = desc;
          link.textContent = desc; // You can set any text you want for the link
          link.target = "_blank"; // Open in new tab
          description.appendChild(link);
          description.appendChild(document.createElement("br")); // Add a line break
          description.appendChild(document.createElement("br")); // Add a line break
        } else {
          const paraslidingWindow = document.createElement("p");
          paraslidingWindow.textContent = desc;
          description.appendChild(paraslidingWindow);
        }
      });

      solutionLink.href = question.solution;
      solutionLink.target = "_blank";
      solutionLink.textContent = "Solution";

      description.appendChild(solutionLink);
      description.appendChild(nts);

      listItem.appendChild(questionTitle);
      listItem.appendChild(description);

      questionList.appendChild(listItem);
    });

    const questionTitles = document.querySelectorAll(".question-title");

    questionTitles.forEach((title) => {
      title.addEventListener("click", function () {
        const description = this.nextElementSibling;
        description.style.display =
          description.style.display === "block" ? "none" : "block";
      });
    });

    const noteTitles = document.querySelectorAll(".notes");

    noteTitles.forEach((title) => {
      title.addEventListener("click", function () {
        const notesContainer = this.parentElement.querySelector(".note");
        notesContainer.style.display =
          notesContainer.style.display === "none" ? "block" : "none";
      });
    });
  }
});
