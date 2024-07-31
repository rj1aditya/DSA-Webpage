document.addEventListener("DOMContentLoaded", function () {
  const questions = [
    {
      title: "Breadth-First Search (BFS)",
      description: [
        "https://www.geeksforgeeks.org/problems/bfs-traversal-of-graph/1",
      ],
      solution: "Graph/bfsAlgo.html",
      nt: "",
    },
    {
      title: "Depth-First Search (DFS)",
      description: [
        "https://www.geeksforgeeks.org/problems/depth-first-traversal-for-a-graph/1",
      ],
      solution: "Graph/DFS.html",
      nt: "",
    },
    {
      title: "Number of Provinces",
      description: [
        "https://leetcode.com/problems/number-of-provinces/description/",
      ],
      solution: "Graph/NumberOfProvinces.html",
      nt: "",
    },
    {
      title: "Number of Islands",
      description: [
        "https://leetcode.com/problems/number-of-islands/description/",
      ],
      solution: "Graph/NumberOfIsland.html",
      nt: "",
    },
    {
      title: "Flood Fill Algorithm",
      description: ["https://leetcode.com/problems/flood-fill/description/"],
      solution: "Graph/FloodFillAlgorithm.html",
      nt: "",
    },
    {
      title: "Rotten Oranges",
      description: [
        "https://leetcode.com/problems/rotting-oranges/description/",
      ],
      solution: "Graph/RottenOranges.html",
      nt: "",
    },
    {
      title: "Detect a Cycle in an Undirected Graph using BFS/DFS",
      description: [
        "https://www.geeksforgeeks.org/problems/detect-cycle-in-an-undirected-graph/1",
      ],
      solution: "Graph/detectCycleUsingBFS.html",
      nt: "",
    },
    {
      title: "Distance of nearest cell having 1 | 0/1 Matrix",
      description: [
        "https://www.geeksforgeeks.org/problems/distance-of-nearest-cell-having-1-1587115620/1",
      ],
      solution: "Graph/DistanceOfNearestCell.html",
      nt: "",
    },
    {
      title: "Surrounded Regions | Replace O's with X's",
      description: [
        "https://www.geeksforgeeks.org/problems/replace-os-with-xs0052/1",
      ],
      solution: "Graph/SurroundedRegions.html",
      nt: "",
    },
    {
      title: "Number of Enclaves",
      description: [
        "https://leetcode.com/problems/number-of-enclaves/description/",
      ],
      solution: "Graph/NumberofEnclaves.html",
      nt: "",
    },
    {
      title: "Number of Distinct Islands",
      description: [
        "https://www.geeksforgeeks.org/problems/number-of-distinct-islands/0",
      ],
      solution: "Graph/NumberofDistinctIslands.html",
      nt: "",
    },
    {
      title: "Bipartite Graph",
      description: [""],
      solution: "Graph/BipartiteGraph.html",
      nt: "",
    },
    {
      title: "",
      description: [""],
      solution: "Graph/.html",
      nt: "",
    },
    {
      title: "",
      description: [""],
      solution: "Graph/.html",
      nt: "",
    },
    //Dummy
    {
      title: "",
      description: [""],
      solution: "Graph/.html",
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
