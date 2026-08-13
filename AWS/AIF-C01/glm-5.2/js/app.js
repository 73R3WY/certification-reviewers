(function () {
  "use strict";

  // ---- State ----
  const TOTAL_QUESTIONS = QUESTIONS.length;
  let currentIndex = 0;
  let userAnswers = new Array(TOTAL_QUESTIONS).fill(null);
  let submitted = false;

  // ---- DOM refs ----
  const startScreen = document.getElementById("start-screen");
  const quizScreen = document.getElementById("quiz-screen");
  const resultScreen = document.getElementById("result-screen");
  const startBtn = document.getElementById("start-btn");
  const restartBtn = document.getElementById("restart-btn");
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");
  const submitBtn = document.getElementById("submit-btn");
  const qCounter = document.getElementById("q-counter");
  const qDomain = document.getElementById("q-domain");
  const progressBar = document.getElementById("progress-bar");
  const questionText = document.getElementById("question-text");
  const optionsContainer = document.getElementById("options");
  const quizNav = document.getElementById("quiz-nav");

  // ---- Helpers ----
  function show(screen) {
    startScreen.style.display = "none";
    quizScreen.style.display = "none";
    resultScreen.style.display = "none";
    screen.style.display = "block";
  }

  function renderQuestion() {
    const q = QUESTIONS[currentIndex];
    submitted = false;

    qCounter.textContent = `Question ${currentIndex + 1} of ${TOTAL_QUESTIONS}`;
    qDomain.textContent = q.domain;
    progressBar.style.width = `${((currentIndex + 1) / TOTAL_QUESTIONS) * 100}%`;

    questionText.textContent = q.question;

    // Build options
    optionsContainer.innerHTML = "";
    q.options.forEach((opt, i) => {
      const li = document.createElement("li");
      li.className = "option";
      li.dataset.index = i;

      const radio = document.createElement("input");
      radio.type = "radio";
      radio.name = "answer";
      radio.value = i;
      radio.id = `opt-${i}`;
      if (userAnswers[currentIndex] === i) {
        radio.checked = true;
        li.classList.add("selected");
      }
      radio.addEventListener("change", function () {
        userAnswers[currentIndex] = i;
        // remove selected from siblings
        optionsContainer.querySelectorAll(".option").forEach(function (el) {
          el.classList.remove("selected");
        });
        li.classList.add("selected");
        nextBtn.disabled = false;
        submitBtn.disabled = false;
      });

      const letter = document.createElement("span");
      letter.className = "letter";
      letter.textContent = String.fromCharCode(65 + i) + ".";

      const label = document.createElement("label");
      label.htmlFor = `opt-${i}`;
      label.style.cursor = "pointer";
      label.style.flex = "1";
      label.textContent = opt;

      li.appendChild(radio);
      li.appendChild(letter);
      li.appendChild(label);
      optionsContainer.appendChild(li);
    });

    // Nav buttons
    prevBtn.style.visibility = currentIndex === 0 ? "hidden" : "visible";

    if (currentIndex === TOTAL_QUESTIONS - 1) {
      nextBtn.style.display = "none";
      submitBtn.style.display = "inline-block";
      // disable submit until answered
      submitBtn.disabled = userAnswers[currentIndex] === null;
    } else {
      nextBtn.style.display = "inline-block";
      submitBtn.style.display = "none";
      nextBtn.disabled = userAnswers[currentIndex] === null;
    }
  }

  // ---- Navigation ----
  startBtn.addEventListener("click", function () {
    currentIndex = 0;
    userAnswers = new Array(TOTAL_QUESTIONS).fill(null);
    show(quizScreen);
    renderQuestion();
  });

  prevBtn.addEventListener("click", function () {
    if (currentIndex > 0) {
      currentIndex--;
      renderQuestion();
    }
  });

  nextBtn.addEventListener("click", function () {
    if (currentIndex < TOTAL_QUESTIONS - 1) {
      currentIndex++;
      renderQuestion();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  });

  submitBtn.addEventListener("click", function () {
    renderResults();
  });

  // ---- Results ----
  function renderResults() {
    let score = 0;
    const domainStats = {};

    QUESTIONS.forEach(function (q, i) {
      const userAns = userAnswers[i];
      const isCorrect = userAns === q.correct;
      if (isCorrect) score++;

      if (!domainStats[q.domain]) {
        domainStats[q.domain] = { correct: 0, total: 0 };
      }
      domainStats[q.domain].total++;
      if (isCorrect) domainStats[q.domain].correct++;
    });

    const percentage = Math.round((score / TOTAL_QUESTIONS) * 100);
    const passing = 70;
    const passed = percentage >= passing;

    // Score ring
    const ring = document.getElementById("score-ring-fg");
    const circumference = 2 * Math.PI * 76;
    ring.style.strokeDasharray = circumference;
    ring.style.strokeDashoffset = circumference;
    document.getElementById("score-num").innerHTML =
      `${percentage}<span class="percent">%</span>`;

    // Verdict
    const verdict = document.getElementById("verdict");
    const detail = document.getElementById("score-detail");
    if (passed) {
      verdict.textContent = "PASS";
      verdict.className = "verdict pass";
      detail.textContent = `You scored ${score} out of ${TOTAL_QUESTIONS}. The passing threshold is ${passing}%.`;
    } else {
      verdict.textContent = "FAIL";
      verdict.className = "verdict fail";
      detail.textContent = `You scored ${score} out of ${TOTAL_QUESTIONS}. You need ${passing}% to pass. Review the explanations below and try again.`;
    }

    // Domain breakdown
    const domainContainer = document.getElementById("domain-results-list");
    domainContainer.innerHTML = "";
    Object.keys(domainStats).forEach(function (d) {
      const s = domainStats[d];
      const pct = Math.round((s.correct / s.total) * 100);
      const item = document.createElement("div");
      item.className = "domain-result-item";
      item.innerHTML =
        `<span class="domain-name">${d}</span>` +
        `<span class="domain-score">${s.correct}/${s.total} (${pct}%)</span>`;
      domainContainer.appendChild(item);
    });

    // Review section
    const reviewContainer = document.getElementById("review-list");
    reviewContainer.innerHTML = "";
    QUESTIONS.forEach(function (q, i) {
      const userAns = userAnswers[i];
      const isCorrect = userAns === q.correct;

      const item = document.createElement("div");
      item.className = "review-item " + (isCorrect ? "correct" : "incorrect");

      let html =
        `<div class="review-q-num">Question ${i + 1} — ${q.domain}</div>` +
        `<div class="review-q-text">${q.question}</div>`;

      if (!isCorrect) {
        if (userAns !== null) {
          html +=
            `<div class="review-answer incorrect"><span class="label">Your answer:</span> ` +
            `${String.fromCharCode(65 + userAns)}. ${q.options[userAns]}</div>`;
        } else {
          html +=
            `<div class="review-answer incorrect"><span class="label">Your answer:</span> Not answered</div>`;
        }
      }

      html +=
        `<div class="review-answer correct"><span class="label">Correct answer:</span> ` +
        `${String.fromCharCode(65 + q.correct)}. ${q.options[q.correct]}</div>`;
      html += `<div class="review-explanation"><strong>Explanation:</strong> ${q.explanation}</div>`;

      item.innerHTML = html;
      reviewContainer.appendChild(item);
    });

    show(resultScreen);

    // Animate ring
    setTimeout(function () {
      const offset = circumference - (percentage / 100) * circumference;
      ring.style.strokeDashoffset = offset;
    }, 100);

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  restartBtn.addEventListener("click", function () {
    show(startScreen);
  });
})();
