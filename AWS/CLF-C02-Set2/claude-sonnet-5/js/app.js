(function () {
  "use strict";

  var EXPECTED_TOTAL = 130;
  var PASS_PCT = 70;

  if (typeof QUESTIONS === "undefined" || !Array.isArray(QUESTIONS)) {
    console.error("questions.js did not define a QUESTIONS array.");
    return;
  }
  if (QUESTIONS.length !== EXPECTED_TOTAL) {
    console.warn("Question count is " + QUESTIONS.length + ", expected " + EXPECTED_TOTAL + ".");
  }

  var DOMAIN_ORDER = [];
  QUESTIONS.forEach(function (q) {
    if (DOMAIN_ORDER.indexOf(q.domain) === -1) DOMAIN_ORDER.push(q.domain);
  });

  var state = {
    quizQuestions: [],
    answers: [],
    current: 0,
    reviewMode: false
  };

  var STORAGE_KEY = "cert-reviewer:" + location.pathname;

  function saveState(phase) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        v: 1,
        phase: phase,
        current: state.current,
        answers: state.answers,
        quizQuestions: state.quizQuestions
      }));
    } catch (e) {}
  }

  function loadState() {
    try {
      var data = JSON.parse(localStorage.getItem(STORAGE_KEY));
      if (!data || data.v !== 1) return null;
      if (data.phase !== "quiz" && data.phase !== "result") return null;
      if (!Array.isArray(data.quizQuestions) || data.quizQuestions.length !== QUESTIONS.length) return null;
      if (!Array.isArray(data.answers) || data.answers.length !== data.quizQuestions.length) return null;
      if (typeof data.current !== "number" || data.current < 0 || data.current >= data.quizQuestions.length) return null;
      var valid = data.quizQuestions.every(function (q, i) {
        if (!q || !Array.isArray(q.options) || typeof q.correct !== "number") return false;
        if (q.correct < 0 || q.correct >= q.options.length) return false;
        var a = data.answers[i];
        return a === null || (typeof a === "number" && a >= 0 && a < q.options.length);
      });
      if (!valid) return null;
      return data;
    } catch (e) {
      return null;
    }
  }

  function clearState() {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {}
  }

  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = a[i];
      a[i] = a[j];
      a[j] = tmp;
    }
    return a;
  }

  function buildQuizQuestions() {
    var shuffledQuestions = shuffle(QUESTIONS);
    return shuffledQuestions.map(function (q) {
      var indices = q.options.map(function (_, idx) {
        return idx;
      });
      var shuffledIdx = shuffle(indices);
      var newOptions = shuffledIdx.map(function (idx) {
        return q.options[idx];
      });
      var newCorrect = shuffledIdx.indexOf(q.correct);
      return {
        id: q.id,
        domain: q.domain,
        question: q.question,
        options: newOptions,
        correct: newCorrect,
        explanation: q.explanation
      };
    });
  }

  function el(id) {
    return document.getElementById(id);
  }

  function show(screenId) {
    document.querySelectorAll(".screen").forEach(function (s) {
      s.classList.remove("active");
    });
    el(screenId).classList.add("active");
  }

  function startQuiz() {
    clearState();
    state.quizQuestions = buildQuizQuestions();
    state.answers = new Array(state.quizQuestions.length).fill(null);
    state.current = 0;
    state.reviewMode = false;
    buildPalette();
    renderQuestion();
    show("quiz-screen");
    saveState("quiz");
  }

  function buildPalette() {
    var grid = el("palette-grid");
    grid.innerHTML = "";
    state.quizQuestions.forEach(function (q, idx) {
      var btn = document.createElement("button");
      btn.className = "palette-btn";
      btn.type = "button";
      btn.textContent = String(idx + 1);
      btn.addEventListener("click", function () {
        state.current = idx;
        renderQuestion();
        saveState("quiz");
      });
      grid.appendChild(btn);
    });
    updatePalette();
  }

  function updatePalette() {
    var buttons = el("palette-grid").querySelectorAll(".palette-btn");
    buttons.forEach(function (btn, idx) {
      btn.classList.toggle("answered", state.answers[idx] !== null);
      btn.classList.toggle("current", idx === state.current);
    });
  }

  function renderQuestion() {
    var total = state.quizQuestions.length;
    var idx = state.current;
    var q = state.quizQuestions[idx];

    el("q-counter").textContent = "Question " + (idx + 1) + " of " + total;
    el("q-domain").textContent = q.domain;
    el("progress-fill").style.width = Math.round(((idx + 1) / total) * 100) + "%";
    el("q-text").textContent = q.question;

    var optsWrap = el("options");
    optsWrap.innerHTML = "";
    q.options.forEach(function (optText, optIdx) {
      var label = document.createElement("label");
      label.className = "option";
      if (state.answers[idx] === optIdx) label.classList.add("selected");

      var input = document.createElement("input");
      input.type = "radio";
      input.name = "option";
      input.value = String(optIdx);
      input.checked = state.answers[idx] === optIdx;
      input.addEventListener("change", function () {
        state.answers[idx] = optIdx;
        renderQuestion();
        updatePalette();
        saveState("quiz");
      });

      var span = document.createElement("span");
      span.className = "opt-text";
      span.textContent = optText;

      label.appendChild(input);
      label.appendChild(span);
      optsWrap.appendChild(label);
    });

    el("btn-prev").disabled = idx === 0;
    el("btn-next").style.display = idx === total - 1 ? "none" : "inline-block";
    el("btn-finish").style.display = idx === total - 1 ? "inline-block" : "none";

    updatePalette();
  }

  function nextQuestion() {
    if (state.current < state.quizQuestions.length - 1) {
      state.current += 1;
      renderQuestion();
      saveState("quiz");
    }
  }

  function prevQuestion() {
    if (state.current > 0) {
      state.current -= 1;
      renderQuestion();
      saveState("quiz");
    }
  }

  function confirmFinish() {
    var unanswered = state.answers.filter(function (a) {
      return a === null;
    }).length;
    if (unanswered > 0) {
      var proceed = window.confirm(
        "You have " + unanswered + " unanswered question(s). Finish the exam anyway?"
      );
      if (!proceed) return;
    }
    finishQuiz();
  }

  function finishQuiz() {
    saveState("result");
    var total = state.quizQuestions.length;
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;
    var domainStats = {};

    DOMAIN_ORDER.forEach(function (d) {
      domainStats[d] = { correct: 0, total: 0 };
    });

    state.quizQuestions.forEach(function (q, idx) {
      var userAnswer = state.answers[idx];
      if (!domainStats[q.domain]) domainStats[q.domain] = { correct: 0, total: 0 };
      domainStats[q.domain].total += 1;

      if (userAnswer === null) {
        unanswered += 1;
      } else if (userAnswer === q.correct) {
        correct += 1;
        domainStats[q.domain].correct += 1;
      } else {
        incorrect += 1;
      }
    });

    var pct = Math.round((correct / total) * 100);
    var passed = pct >= PASS_PCT;

    renderResults({
      total: total,
      correct: correct,
      incorrect: incorrect,
      unanswered: unanswered,
      pct: pct,
      passed: passed,
      domainStats: domainStats
    });

    buildReviewList();
    state.reviewMode = false;
    el("review-list").classList.remove("active");
    el("btn-toggle-review").textContent = "Show Full Review";

    show("result-screen");
  }

  function renderResults(r) {
    el("stat-correct").textContent = r.correct;
    el("stat-incorrect").textContent = r.incorrect;
    el("stat-unanswered").textContent = r.unanswered;
    el("stat-total").textContent = r.total;

    var pctEl = el("score-pct");
    var verdictEl = el("score-verdict");
    pctEl.textContent = r.pct + "%";
    verdictEl.textContent = r.passed ? "PASS" : "FAIL";
    verdictEl.className = "verdict " + (r.passed ? "pass" : "fail");

    var ring = el("score-ring-fg");
    var circumference = 2 * Math.PI * 65;
    ring.style.strokeDasharray = String(circumference);
    ring.style.strokeDashoffset = String(circumference);
    ring.classList.remove("pass", "fail");
    ring.classList.add(r.passed ? "pass" : "fail");

    requestAnimationFrame(function () {
      setTimeout(function () {
        var offset = circumference - (r.pct / 100) * circumference;
        ring.style.strokeDashoffset = String(offset);
      }, 50);
    });

    var domainWrap = el("domain-breakdown");
    domainWrap.innerHTML = "";
    DOMAIN_ORDER.forEach(function (d) {
      var stats = r.domainStats[d] || { correct: 0, total: 0 };
      var domPct = stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0;

      var row = document.createElement("div");
      row.className = "domain-row";

      var top = document.createElement("div");
      top.className = "domain-row-top";
      var name = document.createElement("span");
      name.className = "name";
      name.textContent = d;
      var score = document.createElement("span");
      score.textContent = stats.correct + " / " + stats.total + " (" + domPct + "%)";
      top.appendChild(name);
      top.appendChild(score);

      var track = document.createElement("div");
      track.className = "domain-bar-track";
      var fill = document.createElement("div");
      fill.className = "domain-bar-fill";
      fill.style.width = domPct + "%";
      track.appendChild(fill);

      row.appendChild(top);
      row.appendChild(track);
      domainWrap.appendChild(row);
    });
  }

  function buildReviewList() {
    var wrap = el("review-list");
    wrap.innerHTML = "";

    state.quizQuestions.forEach(function (q, idx) {
      var userAnswer = state.answers[idx];
      var item = document.createElement("div");
      var status = userAnswer === null ? "unanswered" : userAnswer === q.correct ? "correct" : "incorrect";
      item.className = "review-item is-" + status;

      var top = document.createElement("div");
      top.className = "review-q-top";
      var left = document.createElement("span");
      left.textContent = "Question " + (idx + 1) + " • " + q.domain;
      var right = document.createElement("span");
      right.textContent = status === "correct" ? "Correct" : status === "incorrect" ? "Incorrect" : "Unanswered";
      top.appendChild(left);
      top.appendChild(right);

      var qText = document.createElement("div");
      qText.className = "review-q-text";
      qText.textContent = q.question;

      item.appendChild(top);
      item.appendChild(qText);

      if (userAnswer !== null && userAnswer !== q.correct) {
        var yourRow = document.createElement("div");
        yourRow.className = "review-answer-row wrong-answer";
        yourRow.textContent = "Your answer: " + q.options[userAnswer];
        item.appendChild(yourRow);
      }

      var correctRow = document.createElement("div");
      correctRow.className = "review-answer-row correct-answer";
      correctRow.textContent = "Correct answer: " + q.options[q.correct];
      item.appendChild(correctRow);

      var expl = document.createElement("div");
      expl.className = "review-explanation";
      expl.textContent = q.explanation;
      item.appendChild(expl);

      wrap.appendChild(item);
    });
  }

  function toggleReview() {
    state.reviewMode = !state.reviewMode;
    el("review-list").classList.toggle("active", state.reviewMode);
    el("btn-toggle-review").textContent = state.reviewMode ? "Hide Full Review" : "Show Full Review";
  }

  function retake() {
    startQuiz();
  }

  function backToStart() {
    show("start-screen");
  }

  function resetReview() {
    if (!window.confirm("Reset this review? Your saved progress and answers will be cleared.")) {
      return;
    }
    clearState();
    state.quizQuestions = [];
    state.answers = [];
    state.current = 0;
    state.reviewMode = false;
    show("start-screen");
  }

  document.addEventListener("DOMContentLoaded", function () {
    el("total-questions").textContent = QUESTIONS.length;
    el("pass-pct").textContent = PASS_PCT + "%";

    el("btn-start").addEventListener("click", startQuiz);
    el("btn-prev").addEventListener("click", prevQuestion);
    el("btn-next").addEventListener("click", nextQuestion);
    el("btn-finish").addEventListener("click", confirmFinish);
    el("btn-toggle-review").addEventListener("click", toggleReview);
    el("btn-retake").addEventListener("click", retake);
    el("btn-exit").addEventListener("click", backToStart);
    el("btn-reset").addEventListener("click", resetReview);

    var saved = loadState();
    if (saved) {
      state.quizQuestions = saved.quizQuestions;
      state.answers = saved.answers;
      state.current = saved.current;
      if (saved.phase === "result") {
        finishQuiz();
      } else {
        buildPalette();
        renderQuestion();
        show("quiz-screen");
      }
    } else {
      show("start-screen");
    }
  });
})();
