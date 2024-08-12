fetch("language.json")
  .then((response) => response.json())
  .then((data) => {
    let started = document.querySelector(".started");
    let content = document.querySelector(".content");
    let inputcmd = document.querySelector(".input");
    let command = document.querySelector(".command");

    window.addEventListener("load", function () {
      const terminal = document.querySelector(".terminal");
      terminal.classList.add("visible");
    });

    function getRandomLanguageData() {
      let randomIndex = Math.floor(Math.random() * data.length);
      return data[randomIndex];
    }

    function typewriterEffect(targetElement, text, callback) {
      let index = 0;
      targetElement.textContent = "";

      function typewriter() {
        if (index < text.length) {
          targetElement.textContent += text.charAt(index);
          index++;
          setTimeout(typewriter, 30);
        } else if (callback) {
          setTimeout(callback, 200);
        }
      }

      typewriter();
    }

    function openresume() {
      command.textContent = "Executed Command: resume";
      const { language, hello } = getRandomLanguageData();
      let text = `${hello} (${language})! Opening resume...`;

      function onTypingComplete() {
        help();
        window.open(
          "https://drive.google.com/file/d/1qgG0yf0bjysc7i2CLIPqhTi9FGRkxFtx/view",
          "_blank"
        );
      }

      started.style.display = "none";
      typewriterEffect(content, text, onTypingComplete);
    }

    function help() {
      command.textContent = "Executed Command: help";
      input.focus();
      const { language, hello } = getRandomLanguageData();
      inputcmd.style.display = "none";
      let helpMessage = `${hello} (${language})! Only the following requests will be processed: help, resume, bio, linkedin, random, joke, github, contact, clear, date. But don't try to gain access by running commands like sudo. These commands will come soon: projects, blogs, weather, news, quotes and more.`;

      function onTypingComplete() {
        inputcmd.style.display = "block";
      }

      started.style.display = "none";
      typewriterEffect(content, helpMessage, onTypingComplete);
    }

    function bio() {
      command.textContent = "Executed Command: bio";
      const { language, hello } = getRandomLanguageData();
      inputcmd.style.display = "none";
      let text = `${hello} (${language})! Aspiring Full Stack Developer with a keen interest in web development and a solid understanding of both frontend and backend technologies. Skilled in JavaScript, C++, and Python, with experience in ReactJS, NodeJS, and various web development tools. Currently interning at Explor.io, where I contribute to building and maintaining web applications. Committed to continuous learning and improvement, with a few projects and achievements that reflect my dedication to creating user-friendly and effective solutions.`;

      function onTypingComplete() {
        input.value = "help";
        inputcmd.style.display = "block";
      }

      started.style.display = "none";
      inputcmd.style.display = "none";
      typewriterEffect(content, text, onTypingComplete);
    }

    function linkedin() {
      command.textContent = "Executed Command: linkedin";
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
      command.textContent = "Executed Command: random";
      const { language, hello } = getRandomLanguageData();
      fetch("fact.json")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((facts) => {
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
          content.textContent =
            "Failed to load a random fact. Please try again later.";
        });
    }

    function github() {
      command.textContent = "Executed Command: github";
      const { language, hello } = getRandomLanguageData();
      let text = `${hello} (${language})! Opening GitHub profile...`;

      function onTypingComplete() {
        window.open("https://github.com/abhishekbansal2312", "_blank");
      }

      started.style.display = "none";
      typewriterEffect(content, text, onTypingComplete);
    }

    function contact() {
      command.textContent = "Executed Command: contact";
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
      command.textContent = "Executed Command: date";
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
      command.textContent = "Executed Command: sudo";
      const { language, hello } = getRandomLanguageData();
      fetch("sudo.json")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((sudo) => {
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
          content.textContent =
            "Failed to load a sudos. Please try again later.";
        });
    }

    function joke() {
      command.textContent = "Executed Command: joke";
      const { language, hello } = getRandomLanguageData();
      fetch("jokes.json")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((jokes) => {
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
          content.textContent =
            "Failed to load a joke. Please try again later.";
        });
    }

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
          location.reload();
        } else if (inputValue === "weather") {
          weather();
        } else {
          started.style.display = "none";
          content.textContent = `Command not found: ${inputValue}`;
        }
      }
    });

    let minimize = document.querySelector(".minimize");
    let body = document.querySelector("body");

    minimize.addEventListener("click", function () {
      let visible = document.createElement("button");

      if (terminal.style.display === "none") {
        terminal.style.display = "block";
        visible.style.display = "none";
      } else {
        terminal.style.display = "none";
        visible.textContent = "🟢Back";
        visible.style.display = "block";
        visible.style.position = "fixed";
        visible.style.bottom = "20px";
        visible.style.right = "20px";
        visible.style.padding = "10px 20px";
        visible.style.fontSize = "16px";
        visible.style.border = "none";
        visible.style.cursor = "pointer";
        visible.style.backgroundColor = "transparent";
        body.appendChild(visible);

        visible.addEventListener("click", function () {
          terminal.style.display = "block";
          visible.remove();
        });
      }
    });

    let minmax = document.querySelector(".minmax");
    let terminal = document.querySelector(".terminal");

    minmax.addEventListener("click", minmaxTab);

    function minmaxTab() {
      if (terminal.style.height === "100vh") {
        terminal.style.height = "50vh";
        terminal.style.width = "100%";
        terminal.style.maxWidth = "900px";
      } else {
        terminal.style.height = "100vh";
        terminal.style.width = "100%";
        terminal.style.maxWidth = "100%";
      }
    }

    let close = document.querySelector(".close");
    close.addEventListener("click", closeTab);

    function closeTab() {
      window.close();
    }
  })
  .catch((error) => console.error("Error fetching the JSON file:", error));
