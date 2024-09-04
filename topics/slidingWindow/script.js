document.addEventListener("DOMContentLoaded", function () {
  const questions = [
    {
      title:
        "Introduction to Sliding Window and 2 Pointers | Templates | Patterns",
      description: [
        "https://www.youtube.com/watch?v=9kdHxplyl5I&list=PLgUwDviBIf0q7vrFA_HEWcqRqMpCXzYAL",
      ],
      solution: "slidingWindow/.html",
      nt: "",
    },
    {
      title: "Maximum Points You Can Obtain from Cards",
      description: [
        "https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/description/",
      ],
      solution: "slidingWindow/maxPointsFromPickingCards.html",
      nt: "",
    },
    {
      title: "Longest Substring Without Repeating Characters",
      description: [
        "https://leetcode.com/problems/longest-substring-without-repeating-characters/description/",
      ],
      solution: "slidingWindow/longesSubstringWOrepeatingchar.html",
      nt: "",
    },
    {
      title: "Max Consecutive Ones III",
      description: [
        "https://leetcode.com/problems/max-consecutive-ones-iii/description/",
      ],
      solution: "slidingWindow/MaxConsecutiveOnes_III.html",
      nt: "",
    },
    {
      title: "Fruit Into Baskets",
      description: [""],
      solution: "slidingWindow/FruitsIntoBuckets.html",
      nt: "",
    },
    {
      title: "Longest Substring With At Most K Distinct Characters",
      description: ["https://bit.ly/3Mo2A0f"],
      solution: "slidingWindow/longestSubstrWithKDistnChar.html",
      nt: "",
    },
    {
      title: "Number of Substrings Containing All Three Characters",
      description: [
        "https://leetcode.com/problems/number-of-substrings-containing-all-three-characters/submissions/1379161771/",
      ],
      solution: "slidingWindow/NumberOfSubstrContainsAll3Char.html",
      nt: "",
    },
    {
      title: "Longest Repeating Character Replacement",
      description: [
        "https://leetcode.com/problems/longest-repeating-character-replacement/description",
      ],
      solution: "slidingWindow/LongestRepeatingCharReplacement.html",
      nt: "",
    },
    {
      title: "Binary Subarrays With Sum",
      description: [
        "https://leetcode.com/problems/binary-subarrays-with-sum/description/",
      ],
      solution: "slidingWindow/BinarySubarraysWithSum.html",
      nt: "",
    },
    {
      title: "Count number of Nice subarrays",
      description: [
        "https://leetcode.com/problems/count-number-of-nice-subarrays/",
      ],
      solution: "slidingWindow/CountnumberofNicesubarrays.html",
      nt: "This is similar problem to Binary Subarrays With Sum | 2 Pointers and Sliding Window Playlist Just some word twisting is done.",
    },
    {
      title: "Subarray with k different integers",
      description: [
        "https://leetcode.com/problems/subarrays-with-k-different-integers/description/",
      ],
      solution: "slidingWindow/Subarraywithkdifferentintegers.html",
      nt: "",
    },
    {
      title: "Minimum Window Substring",
      description: ["https://leetcode.com/problems/minimum-window-substring/"],
      solution: "slidingWindow/MinimumWindowSubstring.html",
      nt: "",
    },
    {
      title: "",
      description: [""],
      solution: "slidingWindow/.html",
      nt: "",
    },
    //Dummy
    {
      title: "",
      description: [""],
      solution: "slidingWindow/.html",
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
