document.addEventListener("DOMContentLoaded", function () {
  const questions = [
    {
      title: "Second Largest/Smalles Number",
      description: ["https://bit.ly/3GJie4l"],
      solution: "Array/secondLargestSmallestElem.html",
      nt: "",
    },
    {
      title: "Remove Duplicates from Sorted Array",
      description: ["https://bit.ly/3if2k8G"],
      solution: "Array/removeDuplicatesFromSortedArray.html",
      nt: "",
    },
    {
      title: "Left Rotate an Array by One",
      description: ["https://bit.ly/3ZeXGrO"],
      solution: "Array/leftRotateByOne.html",
      nt: "",
    },
    {
      title: "Rotate array by k step",
      description: ["http://bit.ly/3IQQdrt"],
      solution: "Array/rotateArrayByKStep.html",
      nt: "",
    },
    {
      title: "Move Zero's to End",
      description: ["https://bit.ly/3XbsF6k"],
      solution: "Array/moveAllZeroToEnd.html",
      nt: "",
    },
    {
      title: "Merge 2 Sorted Array",
      description: ["https://bit.ly/3IpS7Rd"],
      solution: "Array/merge2SortedArray.html",
      nt: "",
    },
    {
      title: "Intersection Of Two Sorted Arrays",
      description: ["http://bit.ly/3KSSx3Z"],
      solution: "Array/intersectionOf2SortedArr.html",
      nt: "",
    },
    {
      title: "Missing Number",
      description: ["https://bit.ly/3ZdwAkN"],
      solution: "Array/findMissingNumber.html",
      nt: "",
    },
    {
      title: "Find The Single Element",
      description: ["https://bit.ly/3VOlEHp"],
      solution: "Array/findTheSinlgeElement.html",
      nt: "same question is solved in binary search problems - Question 9: Single Element in Sorted Array",
    },
    {
      title: "Longest Subarray With Sum K",
      description: ["https://bit.ly/3GHyBOS"],
      solution: "Array/longestSubarrayWithSumK.html",
      nt: "",
    },
    {
      title: "Longest Subarray With Sum K, Array contains -ve also",
      description: ["http://bit.ly/3mNSZ9u"],
      solution: "Array/longestSubarrayWithSumK2.html",
      nt: "",
    },
    //Dummy #aa8fab
    {
      title: "",
      description: [""],
      solution: "Array/.html",
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
