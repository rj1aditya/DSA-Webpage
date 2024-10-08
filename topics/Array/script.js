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
    {
      title: "2 Sum Problem",
      description: ["https://bit.ly/3Iu7zMu"],
      solution: "Array/twoSumProblem.html",
      nt: "",
    },
    {
      title: "Sort An Array of 0s, 1s and 2s",
      description: ["https://bit.ly/3CsgYAa"],
      solution: "Array/sortAnArrayOfOs1s2s.html",
      nt: "optimal approach solved by using Dutch national flag algo",
    },
    {
      title: "Majority Element I",
      description: ["https://bit.ly/3GmPYTH"],
      solution: "Array/majorityElementsI.html",
      nt: "",
    },
    {
      title: "Kadane's Algorithm | Maximum Subarray Sum | Finding and Printing",
      description: ["https://bit.ly/3QhMl6j"],
      solution: "Array/kadanesAlogToFindMaxSubarraySum.html",
      nt: "",
    },
    {
      title: "Rearrange Array Elements by Sign",
      description: ["http://bit.ly/3yRrCOT"],
      solution: "Array/rearrangeArrElemBySign.html",
      nt: "",
    },
    {
      title: "Next Greater Permutation",
      description: ["https://bit.ly/3WOGkjH"],
      solution: "Array/nextGreaterPermutation.html",
      nt: "",
    },
    {
      title: "Superior Elements",
      description: ["https://bit.ly/3QiQ830 "],
      solution: "Array/leaderInArray.html",
      nt: "",
    },
    {
      title: "Longest Successive Elements",
      description: ["https://bit.ly/3GiWSJP"],
      solution: "Array/LongestSuccessiveElements.html",
      nt: "",
    },
    {
      title: "Zero Matrix",
      description: ["https://bit.ly/3CukQke"],
      solution: "Array/ZeroMatrix.html",
      nt: "",
    },
    {
      title: "Rotate The Matrix",
      description: ["https://bit.ly/3Qk14gY"],
      solution: "Array/rotateTheMatrix.html",
      nt: "",
    },
    {
      title: "Spiral Matrix",
      description: ["https://bit.ly/3InYB3c"],
      solution: "Array/spiralMatrix.html",
      nt: "",
    },
    {
      title: "Count All Subarrays With Given Sum",
      description: ["http://bit.ly/3Kn10eZ"],
      solution: "Array/countAllSubarrWithGivenSum.html",
      nt: "",
    },
    {
      title: "Print Pascal’s Triangle",
      description: ["https://bit.ly/3jY4iuF"],
      solution: "Array/printPascalTriangle.html",
      nt: "",
    },
    {
      title: "Majority Element II",
      description: ["https://bit.ly/3vIsCTH"],
      solution: "Array/majorityElem2.html",
      nt: "",
    },
    {
      title: "Three Sum",
      description: ["https://bit.ly/3X34JSI"],
      solution: "Array/ThreeSum.html",
      nt: "",
    },
    {
      title: "four Sum",
      description: ["https://bit.ly/3It5SyP"],
      solution: "Array/fourSum.html",
      nt: "",
    },
    {
      title: "Subarrays with XOR ‘K’",
      description: ["https://bit.ly/3jLfElm"],
      solution: "Array/subarrayWithXorK.html",
      nt: "",
    },
    {
      title: "Merge All Overlapping Intervals",
      description: ["https://bit.ly/3ItlwtJ"],
      solution: "Array/mergeOverlapIntervals.html",
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
