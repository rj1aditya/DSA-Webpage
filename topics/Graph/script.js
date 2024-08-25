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
      description: [
        "https://leetcode.com/problems/is-graph-bipartite/description/",
      ],
      solution: "Graph/BipartiteGraph.html",
      nt: "",
    },
    {
      title: "Detect cycle in a directed graph using DFS",
      description: [
        "https://www.geeksforgeeks.org/problems/detect-cycle-in-a-directed-graph/1",
      ],
      solution: "Graph/detectCycleInDirectedGraph.html",
      nt: "",
    },
    {
      title: "Find Eventual Safe States",
      description: [
        "https://www.geeksforgeeks.org/problems/eventual-safe-states/0",
      ],
      solution: "Graph/FindEventualSafeStates.html",
      nt: [
        "In this problem, focus which are terminal node, and nodes which are only ending up on the terminal node are safe node, if node are ending up on terminal node and on itself node as well then that is not the safe node.",
        "Terminal node: Node which has no outdegree or 0 outdegree",
      ],
    },
    {
      title: "Topological Sort Algorithm",
      description: [
        "https://www.geeksforgeeks.org/problems/topological-sort/1",
      ],
      solution: "Graph/TopologicalSortAlgo.html",
      nt: "In Topological Sort Algo, We use Stack DS, So when we visit the node using DFS alog, and when all the nodes attacked to that node is over then we insert the node in the stack.",
    },
    {
      title: "Kahn's Algorithm | Topological Sort Algorithm",
      description: [
        "https://www.geeksforgeeks.org/problems/topological-sort/1",
      ],
      solution: "Graph/kahnsAlgoForTopoAlgo.html",
      nt: "In this we use BFS, and indegree graph. So first in the indegree graph we fill it by the indegree of the node. so which ever node has least indegree we insert those node first in the queue.",
    },
    {
      title: "Detect a Cycle in Directed Graph using BFS/Kanh's Algo",
      description: [""],
      solution: "Graph/detectCycleInDirectedGraphBFS.html",
      nt: "Detect a Cycle in Directed Graph using BFS, needs to build this using kanh's algo",
    },
    {
      title: "Course Schedule I| Prerequisite Tasks | Topological Sort",
      description: ["https://leetcode.com/problems/course-schedule/"],
      solution: "Graph/CourseSchedule1.html",
      nt: "",
    },
    {
      title: "Course Schedule II | Prerequisite Tasks | Topological Sort",
      description: ["https://www.geeksforgeeks.org/problems/course-schedule/1"],
      solution: "Graph/CourseSchedule2.html",
      nt: "",
    },
    {
      title: "Alien Dictonary",
      description: [
        "https://www.geeksforgeeks.org/problems/alien-dictionary/1",
      ],
      solution: "Graph/AlienDictonary.html",
      nt: "",
    },
    {
      title: "Shortest Path in Directed Acyclic Graph ",
      description: [
        "https://www.geeksforgeeks.org/problems/shortest-path-in-undirected-graph/0",
      ],
      solution: "Graph/shortestPathInDirectedAcyclicGraph.html",
      nt: "",
    },
    {
      title: "Shortest Path in Undirected Graph with Unit Weights",
      description: [
        "https://www.geeksforgeeks.org/problems/shortest-path-in-undirected-graph-having-unit-distance/1",
      ],
      solution: "Graph/ShortestPathInUnDirectedGraphWithUnitWeight.html",
      nt: "",
    },
    {
      title: "Word Ladder - I | Shortest Path",
      description: ["https://www.geeksforgeeks.org/problems/word-ladder/1"],
      solution: "Graph/WordLadderI.html",
      nt: "",
    },
    {
      title: "Word Ladder - II | Shortest Path",
      description: ["https://www.geeksforgeeks.org/problems/word-ladder-ii/1"],
      solution: "Graph/WordLadderII.html",
      nt: "",
    },
    {
      title: "Dijkstra's Algorithm",
      description: [
        "https://www.geeksforgeeks.org/problems/implementing-dijkstra-set-1-adjacency-matrix/1",
        "https://www.naukri.com/code360/problems/dijkstra-s-shortest-path_920469?count=25&page=1&search=&sort_entity=order&sort_order=ASC&leftPanelTabValue=PROBLEM",
      ],
      solution: "Graph/DijkstraAlgorithm.html",
      nt: "",
    },
    {
      title: "Dijkstra's Algorithm using set DS",
      description: [
        "https://www.geeksforgeeks.org/problems/implementing-dijkstra-set-1-adjacency-matrix/1",
        "https://www.naukri.com/code360/problems/dijkstra-s-shortest-path_920469?count=25&page=1&search=&sort_entity=order&sort_order=ASC&leftPanelTabValue=PROBLEM",
      ],
      solution: "Graph/DijkstraAlgorithmUsingSetDS.html",
      nt: "set ds is already sorted, to pick the top node we can fetch the first element from the set DS, using st.begin() -- it will give us the iterator pointing to the begining of the set",
    },
    {
      title: "Print Shortest Path ",
      description: [
        "https://www.geeksforgeeks.org/problems/shortest-path-in-weighted-undirected-graph/1",
      ],
      solution: "Graph/PrintShortestPath.html",
      nt: "",
    },
    {
      title: "Shortest Distance in a Binary Maze",
      description: ["https://bit.ly/3QLxjET"],
      solution: "Graph/shortestPathInBinaryMaze.html",
      nt: "",
    },
    {
      title: "Path With Minimum Effort",
      description: ["https://bit.ly/3dMBvq6"],
      solution: "Graph/pathWithMinimumEfforts.html",
      nt: "",
    },
    {
      title: "Cheapest Flights Within K Stops",
      description: ["https://bit.ly/3UIneer"],
      solution: "Graph/CheapestFlightsWithinKStops.html",
      nt: "",
    },
    {
      title: "Minimum Multiplications to Reach End",
      description: ["https://bit.ly/3AugzNb"],
      solution: "Graph/MinimumMultiplicationstoReachEnd.html",
      nt: "",
    },
    {
      title: "Number of Ways to Arrive at Destination",
      description: ["https://bit.ly/3Aro6Mq"],
      solution: "Graph/NumberOfWaysToArriveDestination.html",
      nt: "",
    },
    {
      title: "Bellman Ford Algorithm",
      description: ["https://bit.ly/3K7emug"],
      solution: "Graph/BellmanFordAlgo.html",
      nt: "this algo is used to find the shortest path which is similar to dijikstra algo, but this algo works in case of -ve edge, while dijikstra doesn't work with -ve edge",
    },
    {
      title: "Floyd Warshall Algorithm",
      description: ["https://bit.ly/3JZlk4a"],
      solution: "Graph/floydWarshallAlgo.html",
      nt: [
        "In Floyd Warshall Algo, we find the shortest path from each nodes to each nodes. So let say in a graph it has 4 nodes: 0, 1, 2, 3.",
        "So algo is: from 0 node we try to figure out path to 0->1, 0->2, 0->3[here all path figure out via 0, means 0->1 via 0, 0->2 via 0, 0->3 via 0 then 0->1 via 1, 0->2 via 1, 0->3 via 1], then will find path from other nodes e.g. 2->0, 2->1, 2->3. [here 2->0, 2->1, 2->3 via 0| 2->0, 2->1, 2->3 via 1| 2->0, 2->1, 2->3 via 2| 2->0, 2->1, 2->3 via 3",
        "Check the image in the Solution",
      ],
    },
    {
      title:
        "Find the City With the Smallest Number of Neighbours at a Threshold Distance",
      description: ["https://bit.ly/3PoGo5v"],
      solution: "Graph/FindTheCity.html",
      nt: "",
    },
    {
      title: "Prism Algo to find Minimum Spanning Tree",
      description: ["https://bit.ly/3ABwwRP"],
      solution: "Graph/PrismAlgoToFindMST.html",
      nt: [
        "Spanning tree is where it has N node, N-1 Edges, and each nodes is reachable from each nodes.",
        "Minimum Spanning Tree: A **Minimum Spanning Tree (MST)** is a subset of the edges in a connected, undirected graph that connects all the vertices together without any cycles and with the minimum possible total edge weight. In simpler terms, it's a way of connecting all the points (or nodes) in a network with the least total distance or cost, without forming any loops.",
      ],
    },
    {
      title: "Disjoint Set | Union by Rank | Union by Size | Path Compression",
      description: [""],
      solution: "Graph/DisjointSet.html",
      nt: "",
    },
    {
      title: "Kruskal's Algorithm - Minimum Spanning Tree - C++ and Java",
      description: ["https://bit.ly/3eLuYvH"],
      solution: "Graph/kruskalAlgo.html",
      nt: "Kruskal Algorith used to find the sum of MST, minimun spanning tree.",
    },
    {
      title: "",
      description: ["https://bit.ly/3pl2tr3"],
      solution: "Graph/NumberOfProvinces.html",
      nt: "",
    },
    {
      title: "Number of Operations to Make Network Connected - DSU",
      description: ["https://bit.ly/3QGtkcd"],
      solution: "Graph/connectTheGraph.html",
      nt: "",
    },
    {
      title: "Accounts Merge - DSU",
      description: ["https://bit.ly/3sl2Xia"],
      solution: "Graph/AccountsMergeDSU.html",
      nt: "",
    },
    {
      title: "Number of Islands - II - Online Queries - DSU",
      description: ["https://bit.ly/3w9REfj"],
      solution: "Graph/numberOfIslands2.html",
      nt: "",
    },
    {
      title: "Making a Large Island - DSU",
      description: ["https://bit.ly/3xeLjzF"],
      solution: "Graph/MakingLargeIsland.html",
      nt: "",
    },
    {
      title: "Most Stones Removed with Same Row or Column - DSU",
      description: ["https://bit.ly/3QHZuE6"],
      solution: "Graph/removeStone.html",
      nt: "",
    },
    {
      title: "Kosaraju Algo to find strong connected graph",
      description: [
        "https://www.naukri.com/code360/problems/count-strongly-connected-components-kosaraju-s-algorithm_1171151?leftPanelTabValue=SUBMISSION",
      ],
      solution: "Graph/kosaraju.html",
      nt: "",
    },
    {
      title: "Critical Connections in a Network",
      description: [
        "https://leetcode.com/problems/critical-connections-in-a-network/description/",
      ],
      solution: "Graph/CriticalConnectionInNetwork.html",
      nt: "",
    },
    {
      title: "Articulation Point in Graph",
      description: ["https://bit.ly/3w9lfp1"],
      solution: "Graph/articulationPointInGraph.html",
      nt: "To find articulation point in a graph we will use tarzen algo logic with slight change.",
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
