document.addEventListener("DOMContentLoaded", function () {
  const questions = [
    {
      title: "Decimal to binary",
      description: [
        "https://www.geeksforgeeks.org/problems/decimal-to-binary-1587115620/1",
      ],
      solution: "Bitmanipulation/d2b.html",
      nt: "",
    },
    {
      title: "Binary to Decimal",
      description: [
        "https://www.geeksforgeeks.org/problems/binary-number-to-decimal-number3525/0",
      ],
      solution: "Bitmanipulation/b2d.html",
      nt: "",
    },
    {
      title: "Bit Operations",
      description: ["Bit Operations"],
      solution: "Bitmanipulation/bitOperations.html",
      nt: "",
    },
    {
      title: "Minimum Bit Flips to Convert Number",
      description: [
        "https://leetcode.com/problems/minimum-bit-flips-to-convert-number/description/",
      ],
      solution: "Bitmanipulation/MinBitFlipsToGoal.html",
      nt: "",
    },
    {
      title: "Power Set",
      description: [
        "https://www.geeksforgeeks.org/problems/power-set4302/1?itm_source=geeksforgeeks&itm_medium=article&itm_campaign=practice_card",
      ],
      solution: "Bitmanipulation/powerSet.html",
      nt: "",
    },
    {
      title: "Single Number",
      description: ["https://leetcode.com/problems/single-number/description/"],
      solution: "Bitmanipulation/SingleNumber.html",
      nt: "",
    },
    {
      title: "Single Numer 2",
      description: [
        "https://leetcode.com/problems/single-number-ii/description/",
      ],
      solution: "Bitmanipulation/singleNumber2.html",
      nt: "",
    },
    {
      title: "Single Number 3",
      description: [
        "https://leetcode.com/problems/single-number-iii/description/",
      ],
      solution: "Bitmanipulation/singleNumber3.html",
      nt: "Go to video to understand the concept",
    },
    {
      title: "XOR of Numbers in a Given Range",
      description: ["see the image in solution page"],
      solution: "Bitmanipulation/xorOfGivenRange.html",
      nt: "",
    },
    {
      title: "Divide Two Integers",
      description: [
        "https://leetcode.com/problems/divide-two-integers/description/",
      ],
      solution: "Bitmanipulation/DivideTwoIntegers.html",
      nt: "",
    },
    //Dummy #aa8fab
    {
      title: "",
      description: [""],
      solution: "Bitmanipulation/.html",
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
