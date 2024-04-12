document.addEventListener("DOMContentLoaded", function () {
  const questions = [
    {
      title: "Count Ways To Reach The N-th Stairs",
      description: [
        "https://www.naukri.com/code360/problems/count-ways-to-reach-nth-stairs_798650?source=youtube&campaign=striver_dp_videos&utm_source=youtube&utm_medium=affiliate&utm_campaign=striver_dp_videos&leftPanelTabValue=PROBLEM",
      ],
      solution: "DP_solution/NStair.html",
      nt: "The expression 1e9+7 represents the number 1,000,000,007. Its commonly used in programming as a prime number close to (10^9) for computations involving large numbers. This helps prevent integer overflow and ensures that results fit within the range of standard integer types.",
    },
    {
      title: "Frog jump",
      description: [
        "https://www.naukri.com/code360/problems/frog-jump_3621012?source=youtube&campaign=striver_dp_videos&utm_source=youtube&utm_medium=affiliate&utm_campaign=striver_dp_videos",
      ],
      solution: "DP_solution/FrogJump.html",
      nt: "",
    },
    {
      title: "Frog Jump with K Distance",
      description: ["https://atcoder.jp/contests/dp/tasks/dp_b"],
      solution: "DP_solution/FrogJumpWithKDistance.html",
      nt: "--",
    },
    {
      title: "Maximum Sum of Non-Adjacent Elements",
      description: ["https://bit.ly/3PURfqU"],
      solution: "DP_solution/MaxSumOfNonAdjcElems.html",
      nt: "--",
    },
    {
      title: "House Robber II",
      description: ["https://bit.ly/49vceYm"],
      solution: "DP_solution/HouserRobber2.html",
      nt: [
        "This question is similar to Maximum Sum of Non-Adjacent Elements only modification to handle cirle neighboorhood so it is handle by taking max of 2 ans in first ans not considering 0th element then in second ans not considering last the element. Reason is as mentioned in the question 1st and last neighbour are adjacent, so in the ans either 0th element wont come or last element wont come thats why we eleminate either 0th element or last element",
        "this question is only solved in tabulation mode since similar question to Maximum Sum of Non-Adjacent Elements.",
      ],
    },
    {
      title: "Ninjas Training ***",
      description: ["https://bit.ly/49w8Lsr"],
      solution: "DP_solution/ninjaTraining.html",
      nt: ["--"],
    },
    {
      title: "Unique paths",
      description: ["https://bit.ly/3TOpWzq"],
      solution: "DP_solution/UniquePath.html",
      nt: [
        "This question has been solved in two way, coz in first way TC was not sufficient.",
      ],
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
          const noteParagraph = document.createElement("p");
          noteParagraph.textContent = note;
          notesContainer.appendChild(noteParagraph);
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
          const paragraph = document.createElement("p");
          paragraph.textContent = desc;
          description.appendChild(paragraph);
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
