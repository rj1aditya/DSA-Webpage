document.addEventListener("DOMContentLoaded", function () {
  const questions = [
    {
      title: "Linked list program",
      description: [""],
      solution: "Linkedlist/linkedList.html",
      nt: "",
    },
    {
      title: "Double Linked list program",
      description: [""],
      solution: "Linkedlist/DoublelinkedList.html",
      nt: "",
    },
    {
      title: "Delete Node In A Linked List",
      description: [
        "https://www.naukri.com/code360/problems/delete-node-in-a-linked-list_1105578?leftPanelTabValue=PROBLEM",
      ],
      solution: "Linkedlist/deleteNode.html",
      nt: "In this problem you will be given only single node that needs to be deleted and no other node will be given.",
    },
    {
      title: "Convert Array into a single linklist",
      description: [""],
      solution: "Linkedlist/convertArrayToSingleLL.html",
      nt: "",
    },
    {
      title: "Convert Array into a double linklist",
      description: [""],
      solution: "Linkedlist/convertArrayToDoubleLL.html",
      nt: "",
    },
    {
      title: "Reverse Double link list",
      description: ["https://tinyurl.com/mw45vuf6"],
      solution: "Linkedlist/revereseDoubleLL.html",
      nt: "Use the swapping algo here, just difference here is instead of 2 variable to swap here next and prev to swap",
    },
    {
      title: "Reverse link list",
      description: ["https://tinyurl.com/2ajt9262"],
      solution: "Linkedlist/revereseLL.html",
      nt: "",
    },
    {
      title: "Add 2 numbers in LinkedList",
      description: [
        "https://www.naukri.com/code360/problems/reverse-linked-list_920513?leftPanelTabValue=PROBLEM",
      ],
      solution: "Linkedlist/Add2NumberInLL.html",
      nt: "",
    },
    {
      title: "Odd Even Linked List",
      description: ["https://tinyurl.com/47fu86tm"],
      solution: "Linkedlist/OddEvenLinkedList.html",
      nt: "",
    },
    {
      title: "Sort linked list of 0s 1s 2s",
      description: ["https://tinyurl.com/47fu86tm"],
      solution: "Linkedlist/SortLLOf012.html",
      nt: "",
    },
    {
      title: "Remove Nth Node from the end of the LinkedList ",
      description: ["https://tinyurl.com/4txecfpz"],
      solution: "Linkedlist/deleteNthNodefromLast.html",
      nt: "To solve this problem, fast and slow pointer algo is used. Firs move the fast pointer by N value, then point slow to head and move both slow and fast pointer until fast->next reach to null",
    },
    {
      title: "Check ll is palindrome or not",
      description: ["https://tinyurl.com/2p869csv"],
      solution: "Linkedlist/checkPalindromeLL.html",
      nt: "Basic algo is first we figure out the middle of the linkedlist using fast and slow pointer algo, the will reverese the second half of the linkedlist then compare the ll, then revert the 2nd half of ll which was reversed",
    },
    {
      title: "Add 1 to a number represented by LinkedList",
      description: ["https://tinyurl.com/3hrjsb36	"],
      solution: "Linkedlist/add1ToANumberRepresentedByLL.html",
      nt: "Basic algo is first we figure out the middle of the linkedlist using fast and slow pointer algo, the will reverese the second half of the linkedlist then compare the ll, then revert the 2nd half of ll which was reversed",
    },
    {
      title: "Find the intersection point of Y LinkedList",
      description: ["https://tinyurl.com/yc344rnt"],
      solution: "Linkedlist/YintersectionLL.html",
      nt: "Naive approach: store all elment node 1st ll in hash map, then start store 2nd ll element node in same hash map, if encounter same node then return that node else return null.",
    },
    {
      title: "Find middle node of the LinkedList",
      description: ["https://tinyurl.com/ykfyj5cd"],
      solution: "Linkedlist/middleNode.html",
      nt: "Naive approach: find the lend of ll then divide by 2, then traverse to that mid node element",
    },
    {
      title: "Detect a loop or cycle in LinkedList",
      description: ["https://tinyurl.com/3rxwup5c"],
      solution: "Linkedlist/detectCircleInLL.html",
      nt: "people could ask, why fastPointer will collied with slow pointer if loop is there in LL, why not fast pointer cross over slow pointer? check striver video he explained it.",
    },
    {
      title: "Find the length of the Loop in LinkedList",
      description: ["https://tinyurl.com/5n78kcda"],
      solution: "Linkedlist/lengthOfLoopInLL.html",
      nt: "",
    },
    {
      title: "Delete middle node of the LL",
      description: ["https://tinyurl.com/4c5a64xv"],
      solution: "Linkedlist/deleteMiddleNode.html",
      nt: "",
    },
    {
      title: "Detect the starting node of the Loop in LL",
      description: ["https://tinyurl.com/4c5a64xv"],
      solution: "Linkedlist/detectStartingNodeInLL.html",
      nt: "Check striver video to know why slow and fast will collied at the starting of the loop in 2nd step.",
    },
    {
      title: "Delete all occurrences of a Key in DLL",
      description: ["https://tinyurl.com/yc7znssk"],
      solution: "Linkedlist/delAllOccurencesOfKeyInDLL.html",
      nt: "",
    },
    {
      title: "Find all Pairs with given Sum in DLL",
      description: ["https://tinyurl.com/y4xca7e5"],
      solution: "Linkedlist/findPairWithGivenSuminDLL.html",
      nt: "",
    },

    {
      title: "Remove duplicates from sorted DLL",
      description: ["https://tinyurl.com/5n8ndcuu"],
      solution: "Linkedlist/RemduplicatesfrmsortedDLL.html",
      nt: "",
    },
    {
      title: "*** Reverse Nodes in K Group Size of LinkedList",
      description: ["https://tinyurl.com/4dbz8fnn"],
      solution: "Linkedlist/ReverseNodeInKGroupSize.html",
      nt: "",
    },
    {
      title: "Rotate a LinkedList",
      description: [
        "https://leetcode.com/problems/rotate-list/description/?submissionId=657895105",
      ],
      solution: "Linkedlist/RotateLL.html",
      nt: "",
    },
    {
      title: "Merge two sorted Linked Lists",
      description: ["https://bit.ly/3vjuaGQ"],
      solution: "Linkedlist/merge2SortedLL.html",
      nt: "",
    },
    {
      title: "Flattening a LinkedList",
      description: ["https://tinyurl.com/2p9ns48e"],
      solution: "Linkedlist/FlatteningLinkedList.html",
      nt: "",
    },
    {
      title: "***Merge K Sorted Lists",
      description: [
        "https://www.naukri.com/code360/problems/merge-k-sorted-lists_992772",
      ],
      solution: "Linkedlist/mergeKSortedLL.html",
      nt: "",
    },
    {
      title: "Sort a Linked List | Merge Sort and Brute Force",
      description: ["https://bit.ly/4aSKrTF	"],
      solution: "Linkedlist/sortLL.html",
      nt: "",
    },
    {
      title:
        "Clone a LinkedList with Next and Random Pointers | Copy List with Random Pointers",
      description: ["https://tinyurl.com/ytkm6xuz"],
      solution: "Linkedlist/cloneLLWithNextAndRandomPointers.html",
      nt: "It's a 3 step process to solve this problem",
    },
    {
      title: "Design a Browser History",
      description: ["https://bit.ly/3tHiY6k"],
      solution: "Linkedlist/DesignABrowserHistory.html",
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
