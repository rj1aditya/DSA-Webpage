document.addEventListener("DOMContentLoaded", function () {
  const questions = [
    {
      title: "Assign Cookies",
      description: ["https://leetcode.com/problems/assign-cookies/"],
      solution: "Greedy/assignCookies.html",
      nt: "",
    },
    {
      title: "Lemonade Change",
      description: [
        "https://leetcode.com/problems/lemonade-change/description/",
      ],
      solution: "Greedy/LemonadeChange.html",
      nt: "",
    },
    {
      title: "Shortest Job First (or SJF) CPU Scheduling",
      description: [
        "https://www.geeksforgeeks.org/problems/shortest-job-first/1?utm_source=youtube&utm_medium=collab_striver_ytdescription&utm_campaign=shortest-job-first",
      ],
      solution: "Greedy/SJF.html",
      nt: "",
    },
    {
      title: "JumpGame1",
      description: ["https://leetcode.com/problems/jump-game/description/"],
      solution: "Greedy/JumpGame1.html",
      nt: "",
    },
    {
      title: "JumpGame2",
      description: ["https://leetcode.com/problems/jump-game-ii/description/"],
      solution: "Greedy/JumpGame2.html",
      nt: "",
    },
    {
      title: "Job Sequencing Problem",
      description: [
        "https://www.naukri.com/code360/problems/job-sequencing-problem_1169460?leftPanelTabValue=PROBLEM",
      ],
      solution: "Greedy/JobSequencing.html",
      nt: "",
    },
    {
      title: "N Meeting in One Room",
      description: [
        "https://leetcode.com/problems/maximum-length-of-pair-chain/description/",
      ],
      solution: "Greedy/NMeetingInOneroom.html",
      nt: "",
    },
    {
      title: "Non Overlapping Intervals",
      description: [
        "https://leetcode.com/problems/non-overlapping-intervals/description/",
      ],
      solution: "Greedy/nonOverLappingIntervals.html",
      nt: "This problem is similar to prev problem[N Meeting in One Room]",
    },
    {
      title: "insert intervals",
      description: [
        "https://leetcode.com/problems/insert-interval/description/",
      ],
      solution: "Greedy/insertintervals.html",
      nt: "",
    },
    {
      title: "Minimum number of platforms required in a railway station",
      description: [
        "https://www.geeksforgeeks.org/problems/minimum-platforms-1587115620/1?itm_source=geeksforgeeks&itm_medium=article&itm_campaign=practice_card",
      ],
      solution: "Greedy/minimumPlatform.html",
      nt: "",
    },
    {
      title: "Valid Parenthesis String",
      description: [
        "https://leetcode.com/problems/valid-parenthesis-string/description/",
      ],
      solution: "Greedy/validParenthesis.html",
      nt: "",
    },
    {
      title: "Candy Problem",
      description: ["https://leetcode.com/problems/candy/"],
      solution: "Greedy/CandyProblem.html",
      nt: "",
    },
    {
      title: "Fractional Knapsack Algorithm",
      description: [
        "https://www.geeksforgeeks.org/problems/fractional-knapsack-1587115620/1",
      ],
      solution: "Greedy/FractionalKnapsackAlgo.html",
      nt: "",
    },
    //Dummy #aa8fab
    {
      title: "",
      description: [""],
      solution: "Greedy/.html",
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
