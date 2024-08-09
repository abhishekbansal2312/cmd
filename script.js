// Fetch the JSON data
fetch("language.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    let started = document.querySelector(".started");
    let content = document.querySelector(".content");
    let inputcmd = document.querySelector(".input");

    // Get a random language data entry
    function getRandomLanguageData() {
      let randomIndex = Math.floor(Math.random() * data.length);
      return data[randomIndex];
    }

    // Typewriter effect function
    function typewriterEffect(targetElement, text, callback) {
      let index = 0;
      targetElement.textContent = ""; // Clear existing content

      function typewriter() {
        if (index < text.length) {
          targetElement.textContent += text.charAt(index);
          index++;
          setTimeout(typewriter, 30); // Adjust the speed here
        } else if (callback) {
          setTimeout(callback, 200); // Optional delay before executing callback
        }
      }

      typewriter();
    }

    // Handle the 'resume' command
    function openresume() {
      const { language, hello } = getRandomLanguageData();
      let text = `${hello} (${language})! Opening resume...`;

      function onTypingComplete() {
        help();
        window.open(
          "https://www.linkedin.com/in/abhishek-raj-7b0b651a0/",
          "_blank"
        );
      }

      started.style.display = "none";
      typewriterEffect(content, text, onTypingComplete);
    }

    // Handle the 'help' command
    function help() {
      input.focus = true;
      const { language, hello } = getRandomLanguageData();
      inputcmd.style.display = "none"; // Hide the input field
      let helpMessage = `${hello} (${language})! Only the following requests will be processed: help, resume, bio, linkedin, random, joke, github, contact, clear, date. But don't try to gain access by running commands like sudo. These commands will come soon: projects, blogs, weather, news, quotes and more. `;

      function onTypingComplete() {
        inputcmd.style.display = "block"; // Show the input field
      }

      started.style.display = "none";
      typewriterEffect(content, helpMessage, onTypingComplete);
    }

    // Handle the 'bio' command
    function bio() {
      const { language, hello } = getRandomLanguageData();
      inputcmd.style.display = "none";
      let text = `${hello} (${language})! Aspiring Full Stack Developer with a keen interest in web development and a solid understanding of both frontend and backend technologies. Skilled in JavaScript, C++, and Python, with experience in ReactJS, NodeJS, and various web development tools. Currently interning at Explor.io, where I contribute to building and maintaining web applications. Committed to continuous learning and improvement, with a few projects and achievements that reflect my dedication to creating user-friendly and effective solutions.`;

      function onTypingComplete() {
        input.value = "help";
        inputcmd.style.display = "block"; // Show the input field
      }

      started.style.display = "none";
      inputcmd.style.display = "none";
      typewriterEffect(content, text, onTypingComplete);
    }

    // Define other command functions (e.g., linkedin, random, github, contact, date)
    function linkedin() {
      const { language, hello } = getRandomLanguageData();
      let text = `${hello} (${language})! Opening LinkedIn profile...`;

      function onTypingComplete() {
        window.open(
          "https://www.linkedin.com/in/abhishek-bansal-03ba6b267/",
          "_blank"
        );
      }

      started.style.display = "none";
      typewriterEffect(content, text, onTypingComplete);
    }

    function random() {
      const { language, hello } = getRandomLanguageData();
      fetch("fact.json")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((facts) => {
          console.log(facts);
          let randomIndex = Math.floor(Math.random() * facts.length);
          let text = `${hello} (${language})! ${facts[randomIndex].fact}`;

          function onTypingComplete() {
            input.value = "help";
            inputcmd.style.display = "block";
          }
          inputcmd.style.display = "none";
          started.style.display = "none";
          typewriterEffect(content, text, onTypingComplete);
        })
        .catch((error) => {
          console.error("Error fetching the facts:", error);
          content.textContent =
            "Failed to load a random fact. Please try again later.";
        });
    }

    function github() {
      const { language, hello } = getRandomLanguageData();
      let text = `${hello} (${language})! Opening GitHub profile...`;

      function onTypingComplete() {
        window.open("https://github.com/abhishekbansal2312", "_blank");
      }

      started.style.display = "none";
      typewriterEffect(content, text, onTypingComplete);
    }

    function contact() {
      const { language, hello } = getRandomLanguageData();
      let text = `${hello} (${language})! You can contact me via email at abhishekbansal2312@gmail.com. You may be looking for the following commands: linkedin, github`;

      function onTypingComplete() {
        input.value = "help";
        inputcmd.style.display = "block";
      }
      inputcmd.style.display = "none";
      started.style.display = "none";
      typewriterEffect(content, text, onTypingComplete);
    }

    function date() {
      const { language, hello } = getRandomLanguageData();
      let date = new Date();
      let options = {
        weekday: undefined,
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: true,
      };
      let currentDate = date.toLocaleString("en-US", options);

      let text = `${hello} (${language})! The current Date-Time Stamp is: ${currentDate}.`;

      function onTypingComplete() {
        input.value = "help";
        inputcmd.style.display = "block";
      }

      inputcmd.style.display = "none";
      started.style.display = "none";
      typewriterEffect(content, text, onTypingComplete);
    }

    function sudo() {
      const { language, hello } = getRandomLanguageData();
      fetch("sudo.json")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((sudo) => {
          console.log(sudo);
          let randomIndex = Math.floor(Math.random() * sudo.length);
          let text = `${hello} (${language})! ${sudo[randomIndex].response}`;

          function onTypingComplete() {
            input.value = "help";
            inputcmd.style.display = "block";
          }
          inputcmd.style.display = "none";
          started.style.display = "none";
          typewriterEffect(content, text, onTypingComplete);
        })
        .catch((error) => {
          console.error("Error fetching the sudos:", error);
          content.textContent =
            "Failed to load a sudos. Please try again later.";
        });
    }

    function joke() {
      const { language, hello } = getRandomLanguageData();
      fetch("jokes.json")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((jokes) => {
          console.log(jokes);
          let randomIndex = Math.floor(Math.random() * jokes.length);
          let text = `${hello} (${language})! ${jokes[randomIndex]}`;

          function onTypingComplete() {
            input.value = "help";
            inputcmd.style.display = "block";
          }
          inputcmd.style.display = "none";
          started.style.display = "none";
          typewriterEffect(content, text, onTypingComplete);
        })
        .catch((error) => {
          console.error("Error fetching the jokes:", error);
          content.textContent =
            "Failed to load a joke. Please try again later.";
        });
    }

    // Set up event listener for input
    let input = document.querySelector("input");
    input.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();

        let inputValue = input.value.trim().toLowerCase();
        if (inputValue === "help") {
          help();
        } else if (inputValue === "resume") {
          openresume();
        } else if (inputValue === "bio") {
          bio();
        } else if (inputValue === "linkedin") {
          linkedin();
        } else if (inputValue === "random") {
          random();
        } else if (inputValue === "github") {
          github();
        } else if (inputValue === "contact") {
          contact();
        } else if (inputValue === "date") {
          date();
        } else if (inputValue === "sudo") {
          sudo();
        } else if (inputValue === "joke") {
          joke();
        } else if (inputValue === "clear") {
          content.textContent = "";
        } else {
          started.style.display = "none";
          content.textContent = `Command not found: ${inputValue}`;
        }
      }
    });

    // Optionally, you could start by displaying a welcome message or initial content
  })
  .catch((error) => console.error("Error fetching the JSON file:", error));
