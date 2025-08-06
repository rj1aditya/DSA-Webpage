document.addEventListener("DOMContentLoaded", function () {
  const questions = [
    {
      title: "Basic Tree Program",
      description: [""],
      solution: "Tree/tree.html",
      nt: "",
    },
    {
      title: "preOrder inOrder postOrder in 1 go using iterative approach",
      description: ["check image in solution to see the algo"],
      solution: "Tree/iterateApproachToTraverseTree.html",
      nt: "",
    },
    {
      title: "Check for Balanced Binary Tree",
      description: [
        "https://leetcode.com/problems/balanced-binary-tree/description",
        "Balanced Binary Tree is leftH-rightH <=1",
      ],
      solution: "Tree/checkBalanceBinaryTree.html",
      nt: "",
    },
    {
      title: "Diameter of binary tree",
      description: [
        "https://leetcode.com/problems/diameter-of-binary-tree/description/",
        "Max path of a tree is the diameter, root not needed to be part of the path.",
      ],
      solution: "Tree/diameter.html",
      nt: "",
    },
    {
      title: "Maximum Path Sum in Binary Tree",
      description: [
        "https://leetcode.com/problems/binary-tree-maximum-path-sum/description/",
      ],
      solution: "Tree/maxPathSum.html",
      nt: "",
    },
    {
      title: "Check it two trees are Identical or Not ",
      description: ["https://leetcode.com/problems/same-tree/description/"],
      solution: "Tree/twoIdenticalTree.html",
      nt: "just do the any traversal in both tree at the same time.",
    },
    {
      title: "Zig-Zag or Spiral Traversal in Binary Tree",
      description: [
        "https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/description/",
      ],
      solution: "Tree/zigzagTraversal.html",
      nt: "do a level order traversal with a flag help",
    },
    {
      title: "Boundary Traversal in Binary Tree",
      description: [
        "https://www.naukri.com/code360/problems/boundary-traversal_790725",
      ],
      solution: "Tree/boundaryTraversal.html",
      nt: "Check algo image in solution",
    },
    {
      title: "Vertical Order Traversal of Binary Tree",
      description: [
        "https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/description/",
      ],
      solution: "Tree/verticalTraversal.html",
      nt: "",
    },
    {
      title: "Top View of Binary Tree",
      description: [
        "https://www.geeksforgeeks.org/problems/top-view-of-binary-tree/1",
      ],
      solution: "Tree/topViewOfBT.html",
      nt: "",
    },
    {
      title: "Bottom View of Binary Tree",
      description: [
        "https://www.geeksforgeeks.org/problems/bottom-view-of-binary-tree/1",
      ],
      solution: "Tree/BottomViewOfBT.html",
      nt: "",
    },
    {
      title: "Right/Left View of Binary Tree ",
      description: [
        "https://leetcode.com/problems/binary-tree-right-side-view/description/",
      ],
      solution: "Tree/rightSideViewBT.html",
      nt: "",
    },
    {
      title: "Check for Symmetrical Binary Trees",
      description: ["https://www.geeksforgeeks.org/problems/symmetric-tree/1"],
      solution: "Tree/SymmetricalBT.html",
      nt: "Symmetrical Binary Trees is when we part BT in 2 part from middle of it them mirror of it should be same.",
    },
    {
      title: "Print Root to Node Path in Binary Tree ",
      description: [
        "https://takeuforward.org/plus/dsa/problems/print-root-to-note-path-in-bt",
      ],
      solution: "Tree/printRootToNodePathInBT.html",
      nt: "",
    },
    {
      title: "Lowest Common Ancestor in Binary Tree",
      description: [
        "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/description/",
      ],
      solution: "Tree/lowestCommanAncestorInBT.html",
      nt: "",
    },
    {
      title: "Maximum Width of Binary Tree",
      description: [
        "https://leetcode.com/problems/maximum-width-of-binary-tree/description/",
      ],
      solution: "Tree/maximumWidthOfBinaryTree.html",
      nt: "Maximum Width of Binary Tree means, on the same level max number of nodes could exists",
    },
    {
      title: "Children Sum Property in Binary Tree ",
      description: [
        "https://www.naukri.com/code360/problems/childrensumproperty_790723?leftPanelTabValue=PROBLEM",
      ],
      solution: "Tree/childrenSumPropertyBT.html",
      nt: "",
    },
    {
      title: "Print all the Nodes at a distance of K in Binary Tree",
      description: [
        "https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/description/",
      ],
      solution: "Tree/printAllNodesAtKDistanceInBT.html",
      nt: "",
    },
    {
      title: "Minimum time taken to BURN the Binary Tree from a Node",
      description: [
        "https://www.geeksforgeeks.org/problems/burning-tree/1?itm_source=geeksforgeeks&itm_medium=article&itm_campaign=practice_card",
      ],
      solution: "Tree/burningTree.html",
      nt: "",
    },
    {
      title: "Count total Nodes in a COMPLETE Binary Tree",
      description: [
        "https://leetcode.com/problems/count-complete-tree-nodes/description",
      ],
      solution: "Tree/countTotalNodesInCBT.html",
      nt: "",
    },
    {
      title: "Construct a Binary Tree from Preorder and Postorder Traversal",
      description: [
        "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-postorder-traversal/description",
      ],
      solution: "Tree/ConstructAUniqueBTFromPreOrderInorder.html",
      nt: "",
    },
    {
      title: "Construct a Binary Tree from Preorder and Inorder Traversal",
      description: [
        "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/description/",
      ],
      solution: "Tree/ConstructAUniqueBTFromPreOrderInorder.html",
      nt: "",
    },
    {
      title: "Construct a Binary Tree from Postorder and Inorder Traversal",
      description: [
        "https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/submissions/1331447809/	",
      ],
      solution: "Tree/ConstructAUniqueBTFromPostOrderInorder.html",
      nt: "",
    },
    {
      title: "Serialize and De-serialize Binary Tree",
      description: [
        "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/",
      ],
      solution: "Tree/serializeNdeserializeBT.html",
      nt: "",
    },
    {
      title: "Morris Traversal | Preorder | Inorder",
      description: [
        "https://leetcode.com/problems/binary-tree-inorder-traversal",
      ],
      solution: "Tree/morrisTraversal.html",
      nt: "",
    },
    {
      title: "Flatten a Binary Tree to Linked List | 3 Approaches",
      description: [
        "https://leetcode.com/problems/flatten-binary-tree-to-linked-list/description/",
      ],
      solution: "Tree/flattensBT.html",
      nt: "",
    },
    {
      title: "Ceil & Floor value of BST",
      description: [
        "https://www.geeksforgeeks.org/problems/implementing-ceil-in-bst/1 https://www.geeksforgeeks.org/problems/floor-in-bst/0",
      ],
      solution: "Tree/Ceil_FloorBST.html",
      nt: "",
    },
    {
      title: "Insert a node in BST",
      description: [
        "https://leetcode.com/problems/insert-into-a-binary-search-tree/description/",
      ],
      solution: "Tree/insertNodeInBST.html",
      nt: "",
    },
    {
      title: "Delete a Node in Binary Search Tree",
      description: [
        "https://leetcode.com/problems/delete-node-in-a-bst/description/",
      ],
      solution: "Tree/deleteANodeInBST.html",
      nt: "",
    },
    {
      title: "K-th Smallest/Largest Element in BST",
      description: [
        "https://leetcode.com/problems/kth-smallest-element-in-a-bst/",
      ],
      solution: "Tree/KthSmallestElementInBST.html",
      nt: [
        "We will solver this problem using Morris inorder traversal",
        "Since Morris inorder traversal takes only BigO(N) TC, and BigO(1) SC",
        "Inorder traversal with BST will always be sorted",
        "Instead of vector we can take the counter",
      ],
    },
    {
      title: "Check if a tree is a BST or BT | Validate a BST",
      description: [
        "https://leetcode.com/problems/validate-binary-search-tree/",
      ],
      solution: "Tree/validateBST.html",
      nt: "Algo: we will do inoder traversal, and we will pass the range for each node where that node should be fall in the range of that range.",
    },
    {
      title: "LCA in Binary Search Tree",
      description: [
        "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/description/",
      ],
      solution: "Tree/LCAofBST.html",
      nt: "",
    },
    {
      title: "Lowest Common Ancestor in Binary Tree",
      description: [
        "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/",
      ],
      solution: "Tree/LCAofBT.html",
      nt: "",
    },
    {
      title: "Construct a BST from a preorder traversal",
      description: [
        "https://leetcode.com/problems/construct-binary-search-tree-from-preorder-traversal/",
      ],
      solution: "Tree/constructABSTFromPreorder.html",
      nt: "",
    },
    {
      title: "Inorder Successor/Predecessor in BST",
      description: [
        "https://www.geeksforgeeks.org/problems/predecessor-and-successor/1",
      ],
      solution: "Tree/InorderSuccessorPredessorInBST.html",
      nt: "",
    },
    {
      title: "Binary Search Tree Iterator | BST | O(H) Space",
      description: [
        "https://leetcode.com/problems/binary-search-tree-iterator/",
      ],
      solution: "Tree/BSTIterator.html",
      nt: "",
    },
    {
      title: "Two Sum In BST | Check if there exists a pair with Sum K",
      description: [
        "https://leetcode.com/problems/two-sum-iv-input-is-a-bst/submissions/1336448045/",
      ],
      solution: "Tree/twoSumInBST.html",
      nt: "",
    },
    {
      title: "Recover BST | Correct BST with two nodes swapped",
      description: [
        "https://leetcode.com/problems/recover-binary-search-tree/",
      ],
      solution: "Tree/RecoverBST.html",
      nt: "",
    },
    {
      title: "Largest BST in Binary Tree",
      description: ["https://www.geeksforgeeks.org/problems/largest-bst/1"],
      solution: "Tree/LargetsBSTInBT.html",
      nt: "",
    },
    //Dummy
    {
      title: "",
      description: [""],
      solution: "Tree/.html",
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
