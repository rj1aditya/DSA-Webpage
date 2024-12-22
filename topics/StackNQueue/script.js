document.addEventListener("DOMContentLoaded", function () {
  const questions = [
    {
      title: "Check for Balanced Parentheses | Stack and Queue",
      description: [
        "https://leetcode.com/problems/valid-parentheses/description/",
      ],
      solution: "StackNQueue/checkParenthesis.html",
      nt: "",
    },
    {
      title: "Conversion - Infix to Postfix, Infix to Prefix and so on",
      description: [
        "https://www.naukri.com/code360/problems/day-23-:-infix-to-postfix-_1382146?leftPanelTabValue=PROBLEM",
      ],
      solution: "StackNQueue/conversions.html",
      nt: "",
    },
    {
      title: "Min Stack",
      description: ["https://leetcode.com/problems/min-stack/description/"],
      solution: "StackNQueue/minstack.html",
      nt: "",
    },
    {
      title: "Next Greater Element",
      description: [
        "https://www.naukri.com/code360/problems/next-greater-element_670312?leftPanelTabValue=PROBLEM",
      ],
      solution: "StackNQueue/NGE.html",
      nt: "",
    },
    {
      title: "Next Greater Element II",
      description: [
        "https://leetcode.com/problems/next-greater-element-ii/description/",
      ],
      solution: "StackNQueue/nge2.html",
      nt: "",
    },
    {
      title: "Smaller on Left",
      description: [
        "https://www.geeksforgeeks.org/problems/smallest-number-on-left3403/1?itm_source=geeksforgeeks&itm_medium=article&itm_campaign=practice_card",
      ],
      solution: "StackNQueue/smallerOnLeft.html",
      nt: "",
    },
    {
      title: "Trapping Rain Water",
      description: [
        "https://leetcode.com/problems/trapping-rain-water/description/",
      ],
      solution: "StackNQueue/trapRain.html",
      nt: "",
    },
    {
      title: "Sum of Subarray Minimum",
      description: [
        "https://leetcode.com/problems/sum-of-subarray-minimums/description/",
      ],
      solution: "StackNQueue/SumofSubarrayMinimum.html",
      nt: "",
    },
    {
      title: "",
      description: [""],
      solution: "StackNQueue/.html",
      nt: "",
    },
    {
      title: "",
      description: [""],
      solution: "StackNQueue/.html",
      nt: "",
    },
    {
      title: "",
      description: [""],
      solution: "StackNQueue/.html",
      nt: "",
    },
    {
      title: "",
      description: [""],
      solution: "StackNQueue/.html",
      nt: "",
    },
    {
      title: "",
      description: [""],
      solution: "StackNQueue/.html",
      nt: "",
    },
    {
      title: "",
      description: [""],
      solution: "StackNQueue/.html",
      nt: "",
    },
    {
      title: "",
      description: [""],
      solution: "StackNQueue/.html",
      nt: "",
    },
    //Dummy #aa8fab
    {
      title: "",
      description: [""],
      solution: "StackNQueue/.html",
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
