document.addEventListener("DOMContentLoaded", function () {
  const questions = [
    {
      title: "Find the lower/upper bound index",
      description: [
        "https://www.naukri.com/code360/problems/lower-bound_8165382?leftPanelTabValue=SUBMISSION",
      ],
      solution: "binarySearch/lowerBound_upperBound.html",
      nt: [
        "Lower bound the is the smallest index where arr[idx]>=x",
        "upper bound the is the smallest index where arr[idx]>x",
      ],
    },
    {
      title: "Floor and Ciel value in Sorted array",
      description: [
        "https://www.naukri.com/code360/problems/ceiling-in-a-sorted-array_1825401",
      ],
      solution: "binarySearch/floor_ciel_value.html",
      nt: [
        "Floor value is the largest element in the array where arr[ind] <= x",
        "Ciel value is the smallest element in the array where arr[ind] >= 0",
      ],
    },
    {
      title: "First and Last Occurrences in Array",
      description: ["https://bit.ly/3Mdw2FX , https://bit.ly/42ZDqM4 "],
      solution: "binarySearch/occurance.html",
      nt: "",
    },
    {
      title: "Search Element in Rotated Sorted Array - I",
      description: [""],
      solution: "binarySearch/SearchInRotatedSortedArray1.html",
      nt: "",
    },
    {
      title: "Search Element in Rotated Sorted Array II",
      description: ["https://bit.ly/3MCdLTY"],
      solution: "binarySearch/SearchElemInRotatedSortedArray2.html",
      nt: "",
    },
    {
      title: "Minimum in Rotated Sorted Array",
      description: ["https://bit.ly/41My2dR"],
      solution: "binarySearch/minElemInRotatedSortedArr.html",
      nt: "",
    },
    {
      title: "Minimum in Rotated Sorted Array II",
      description: [
        "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/description/",
      ],
      solution: "binarySearch/minElemInRotatedSortedArr2.html",
      nt: "",
    },
    {
      title: "Find out how many times array has been rotated",
      description: ["https://bit.ly/3pMzTCh.html"],
      solution: "binarySearch/ArrayRotatedTimes.html",
      nt: "",
    },
    {
      title: "Single Element in Sorted Array",
      description: ["https://bit.ly/42KKHj5"],
      solution: "binarySearch/singelElemInsortedarray.html",
      nt: "",
    },
    {
      title: "Find Peak Element",
      description: ["https://bit.ly/3BEDvZC"],
      solution: "binarySearch/findPeakElem.html",
      nt: "",
    },
    {
      title: "Finding Sqrt of a number using Binary Search",
      description: ["https://bit.ly/3J5dBCJ"],
      solution: "binarySearch/sqrRoot.html",
      nt: "",
    },
    {
      title: "Find the Nth root of an Integer",
      description: ["https://bit.ly/3oWhSkW"],
      solution: "binarySearch/findNthRoot.html",
      nt: "",
    },
    {
      title: "Koko Eating Bananas",
      description: [""],
      solution: "binarySearch/KokoEatingBananas.html",
      nt: "",
    },
    {
      title: "Minimum days to make M bouquets | Binary Search",
      description: ["https://bit.ly/43ScDRY	"],
      solution: "binarySearch/minDayToMakeMBouquets.html",
      nt: "",
    },
    {
      title: "Smallest divisor",
      description: [""],
      solution: "binarySearch/Smallestdivisor.html",
      nt: "",
    },
    {
      title: "Capacity To Ship Packages Within D Days",
      description: ["https://bit.ly/43QDpdG"],
      solution: "binarySearch/minCapacityToShipPackageinDDays.html",
      nt: "",
    },
    {
      title: "Kth Missing Positive Number",
      description: ["https://bit.ly/3p30UBg"],
      solution: "binarySearch/kthMissingNumber.html",
      nt: "How to understand and remeber this also: check its solution page",
    },
    {
      title: "Aggressive Cows",
      description: ["https://bit.ly/3J9ab1B"],
      solution: "binarySearch/AggressiveCows.html",
      nt: "Go Through the video if not understand the problem or solution",
    },
    {
      title: "Allocate Books or Book Allocation",
      description: [""],
      solution: "binarySearch/AllocateBooks.html",
      nt: "",
    },
    {
      title: "Painter's Partition",
      description: ["https://bit.ly/3XM8oFS"],
      solution: "binarySearch/painterPartition.html",
      nt: "This question is exact similar to Allocate Books or Book Allocation problem",
    },
    {
      title: "Split Array - Largest Sum",
      description: ["https://bit.ly/3Ck7UwL"],
      solution: "binarySearch/splitArray.html",
      nt: "This question is exact similar to Allocate Books or Book Allocation problem",
    },
    {
      title: "Minimize Max Distance to Gas Station",
      description: ["https://bit.ly/43SkwqA"],
      solution: "binarySearch/MinimizeMaxDisttoGasStation.html",
      nt: "Prefer priority queque solution, that is easy to understand",
    },
    {
      title:
        "BS-21. Median of two Sorted Arrays of Different Sizes | Binary Search",
      description: ["https://bit.ly/43QDw96"],
      solution: "binarySearch/medianOf2SortedArray.html",
      nt: "",
    },
    //Dummy
    {
      title: "",
      description: [""],
      solution: "binarySearch/.html",
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
