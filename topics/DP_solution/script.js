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
    {
      title: "Unique Paths 2 | DP on Grid with Maze Obstacles",
      description: ["https://bit.ly/4dfsUG7"],
      solution: "DP_solution/uniquePath2.html",
      nt: ["--"],
    },
    {
      title: "Minimum Path Sum in Grid",
      description: ["https://bit.ly/3UgrtyN"],
      solution: "DP_solution/MinPathSumInGrid.html",
      nt: [""],
    },
    {
      title: "Triangle | Fixed Starting Point and Variable Ending Point",
      description: ["https://bit.ly/3UxeREz"],
      solution: "DP_solution/triangle.html",
      nt: ["--"],
    },
    {
      title: "Triangle | Fixed Starting Point and Variable Ending Point",
      description: ["https://bit.ly/3UxeREz"],
      solution: "DP_solution/triangle.html",
      nt: ["--"],
    },
    {
      title: "Minimum/Maximum Falling Path Sum",
      description: ["https://bit.ly/3xWqtbp"],
      solution: "DP_solution/MaxMinFallingPath.html",
      nt: ["--"],
    },
    {
      title: "Cherry Pickup II | 3D DP",
      description: ["https://bit.ly/3QnEwNL"],
      solution: "DP_solution/CherryPickup2.html",
      nt: [
        "This is a 3D DP problem, tabulation and space optimization is not done yet will solve it later.",
      ],
    },
    {
      title: "Subset Sum Equals to Target",
      description: ["https://bit.ly/3ukNmRZ"],
      solution: "DP_solution/subsetSumEqToTarget.html",
      nt: [
        "Tabulation is not clear fully, space optimization is also not clear",
      ],
    },
    {
      title: "Partition Equal Subset Sum",
      description: ["https://bit.ly/34iIIsH"],
      solution: "DP_solution/partitionEqualSubsetSum.html",
      nt: [
        "this question is similar to Subset Sum Equals to Target, but here target just changed to totalSum/2 to for the 1st subset and for the 2nd subset other totalSum/2 would be the ans.",
      ],
    },
    {
      title:
        "Partition A Set Into Two Subsets With Minimum Absolute Sum Difference",
      description: ["https://bit.ly/3t62bqQ"],
      solution: "DP_solution/PartitionIn2SubsetWithMinDiff.html",
      nt: [
        "this question is similar to Subset Sum Equals to Target, but here target just changed to totalSum/2 to for the 1st subset and for the 2nd subset other totalSum/2 would be the ans.",
      ],
    },
    {
      title: "Counts Subsets with Sum K",
      description: ["https://bit.ly/3B5JBkU"],
      solution: "DP_solution/countOfSubsetSumEqToK.html",
      nt: [""],
    },
    {
      title: "Count Partitions With Given Difference",
      description: ["https://bit.ly/3r8mG5b"],
      solution: "DP_solution/countPartitionWithGivenDiff.html",
      nt: [""],
    },
    {
      title: "Knapsack",
      description: ["https://bit.ly/3KHpP3v"],
      solution: "DP_solution/Knapsack.html",
      nt: [
        "In this question have learned more about space optimization, recommended to check the code comments if not understood then check in corresponding video.",
      ],
    },
    {
      title: "Minimum Coins",
      description: ["https://bit.ly/3HJTeIl"],
      solution: "DP_solution/MinimumCoins.html",
      nt: [""],
    },
    {
      title: "Target Sum",
      description: ["https://bit.ly/3swy5uL"],
      solution: "DP_solution/targetSum.html",
      nt: [
        "this question is exact similar to Question 18: Count Partitions With Given Difference. In this question just changed the language.",
      ],
    },
    {
      title: "Coin Change 2",
      description: ["https://bit.ly/33Kd8o2"],
      solution: "DP_solution/coinChange2.html",
      nt: [""],
    },
    {
      title: "Unbounded Knapsack",
      description: ["https://bit.ly/3IvPdXS"],
      solution: "DP_solution/unboundedKnapsack.html",
      nt: [""],
    },
    {
      title: "Rod Cutting Problem",
      description: ["https://bit.ly/3H10kYJ"],
      solution: "DP_solution/RodCuttingProblem.html",
      nt: [""],
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
