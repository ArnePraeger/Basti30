const STORAGE_KEY = "bdaybasti-quiz-state";

const CATEGORIES = ["Filme", "Musik", "Sport", "SchwaBastian", "Random"];
const POINT_VALUES = [100, 200, 300, 500, 1000];
const FILM_100_SERIES = [
  {
    id: "stranger-things",
    title: "Stranger Things",
    coverSrc: "./Bilder/Film100/strangerThingsCover.webp",
    pointsSrc: "./Bilder/Film100/strangerThings.png",
  },
  {
    id: "dark",
    title: "Dark",
    coverSrc: "./Bilder/Film100/darkCover.webp",
    pointsSrc: "./Bilder/Film100/dark.png",
  },
  {
    id: "big-mouth",
    title: "Big Mouth",
    coverSrc: "./Bilder/Film100/bigMouthCover.webp",
    pointsSrc: "./Bilder/Film100/bigMouth.png",
  },
  {
    id: "severance",
    title: "Severance",
    coverSrc: "./Bilder/Film100/severanceCover.webp",
    pointsSrc: "./Bilder/Film100/severance.png",
  },
  {
    id: "the-witcher",
    title: "The Witcher",
    coverSrc: "./Bilder/Film100/theWitcherCover.webp",
    pointsSrc: "./Bilder/Film100/theWitcher.png",
  },
  {
    id: "mr-robot",
    title: "Mr. Robot",
    coverSrc: "./Bilder/Film100/mrRobotCover.webp",
    pointsSrc: "./Bilder/Film100/mrRobot.png",
  },
  {
    id: "the-simpsons",
    title: "The Simpsons",
    coverSrc: "./Bilder/Film100/theSimpsonsCover.webp",
    pointsSrc: "./Bilder/Film100/theSimpsons.png",
  },
];

const QUESTION_BANK = {
  Filme: [
    makeQuestion(
      "Filme",
      100,
      "Nennt uns die imdb-Bewertung der am besten und am schlechtesten bewerteten Folgen der nachfolgenden Serien:",
      "Bester und schlechtester IMDb-Wert je Serie",
    ),
    makeQuestion(
      "Filme",
      200,
      "Welche der 4 Fakten über Werner ist falsch?",
      "",
      {
        factChoices: [
          {
            id: "camera",
            text: "Werner Herzog klaute eine 35mm-Kamera von einer Filmschule und nutzte sie für frühe Filme.",
          },
          {
            id: "false-fact",
            text: "Werner Herzog lebte zwei Jahre in Island, um dort professionell Schlittenhunde zu trainieren.",
          },
          {
            id: "walk",
            text: "Werner Herzog lief einmal von München nach Paris, weil er glaubte, damit seine kranke Mentorin retten zu können.",
          },
          {
            id: "chickens",
            text: "Werner Herzog kann Hühner hypnotisieren.",
          },
        ],
        incorrectChoiceId: "false-fact",
      },
    ),
    makeQuestion(
      "Filme",
      300,
      'Wie viele Personen sind in der Telegram "Targaryen Tuesday ⚔️ / Wuthering Heights fanclub"? 100 Extrapunkte, wenn ihr alle aufzählen könnt',
      "Adeline, Arne, Hanna, Jan, Lisa, Lu, Luis, Paula, Ramadan, Samuel, Sebastian, Torben",
    ),
    makeQuestion("Filme", 500, "Was sind Bastis Top 4 bei letterboxd", "A Clockwork Orange, The Green Knight, I Lost My Body, The Lord of the Rings", {
      posterReveal: [
        { id: "lotr", label: "Poster 1", src: "./Bilder/Film500/lotr.jpg", alt: "Lord of the Rings Poster" },
        { id: "clockworkOrange", label: "Poster 2", src: "./Bilder/Film500/clockworkOrange.jpg", alt: "A Clockwork Orange Poster" },
        { id: "greenKnight", label: "Poster 3", src: "./Bilder/Film500/greenKnight.jpg", alt: "The Green Knight Poster" },
        { id: "ilosmybody", label: "Poster 4", src: "./Bilder/Film500/ILostMyBody.jpg", alt: "I Lost My Body Poster" },
      ],
    }),
    makeQuestion(
      "Filme",
      1000,
      "Alle haben 5min Zeit sich eine Filmszene auszusuchen und diese im Anschluss vorzuspielen.",
      "Basti bewertet am Ende, welche Gruppe die Beste war.",
      {
        timerSeconds: 300,
        note: "PS: Basti bewertet am Ende welche Gruppe die Beste war.",
      },
    ),
  ],
  Musik: [
    makeQuestion(
      "Musik",
      100,
      'Finde Reime auf "What, what, what can I hear?" Bilde ganze Sätze, die gerne auch auf deutsch sein dürfen. Die Gruppe, welche als letztes noch einen Reim findet, bekommt die Punkte.',
      "",
      { hideAnswerButton: true },
    ),
    makeQuestion(
      "Musik",
      200,
      "Wie weit entfernt von hier wurde dieses Video aufgenommen (Luftlinie)?",
      "circa 8750 Kilometer",
      { videoSrc: "./Videos/Rave1.mp4" },
    ),
    makeQuestion("Musik", 300, "Wie heißt das Debütalbum von Billie Eilish?", "When We All Fall Asleep, Where Do We Go?"),
    makeQuestion("Musik", 500, "Wer ist als 'King of Pop' bekannt?", "Michael Jackson"),
    makeQuestion("Musik", 1000, "KARAOKE TIME!!", "", { hideAnswerButton: true }),
  ],
  Sport: [
    makeQuestion("Sport", 100, "Wie viele Spieler stehen pro Team im Fußball gleichzeitig auf dem Feld?", "Elf"),
    makeQuestion("Sport", 200, "Welche Sportart spielt man in Wimbledon?", "Tennis"),
    makeQuestion("Sport", 300, "Wie viele Ringe hat das olympische Symbol?", "Fünf"),
    makeQuestion("Sport", 500, "In welcher Sportart ist der Super Bowl das Finale?", "American Football"),
    makeQuestion("Sport", 1000, "Wie heißt die höchste deutsche Fußballliga?", "Bundesliga"),
  ],
  SchwaBastian: [
    makeQuestion("SchwaBastian", 100, "Welcher Name steckt in dieser Spezialkategorie?", "Bastian"),
    makeQuestion("SchwaBastian", 200, "Welche Farbe könnte gut zu einem Geburtstagsquiz passen?", "Gold"),
    makeQuestion("SchwaBastian", 300, "Wie nennt man eine Feier zum Geburtstag noch?", "Party"),
    makeQuestion("SchwaBastian", 500, "Was gehört fast immer zu einem Geburtstag?", "Kuchen"),
    makeQuestion("SchwaBastian", 1000, "Welche Kategorie ist hier die persönliche Sonderrunde?", "SchwaBastian"),
  ],
  Random: [
    makeQuestion("Random", 100, "Wie viele Kontinente gibt es?", "Sieben"),
    makeQuestion("Random", 200, "Welche Farbe entsteht aus Blau und Gelb?", "Grün"),
    makeQuestion("Random", 300, "Wie lautet die Hauptstadt von Spanien?", "Madrid"),
    makeQuestion("Random", 500, "Wie viele Tage hat ein Schaltjahr?", "366"),
    makeQuestion("Random", 1000, "Welches Element hat das chemische Symbol O?", "Sauerstoff"),
  ],
};

function makeQuestion(category, points, question, answer, options = {}) {
  return {
    id: `${category}-${points}`,
    category,
    points,
    question,
    answer,
    timerSeconds: options.timerSeconds ?? null,
    note: options.note ?? "",
    posterReveal: options.posterReveal ?? [],
    factChoices: options.factChoices ?? [],
    incorrectChoiceId: options.incorrectChoiceId ?? null,
    hideAnswerButton: options.hideAnswerButton ?? false,
    videoSrc: options.videoSrc ?? "",
  };
}

function buildInitialState() {
  return {
    screen: "setup",
    teams: [],
    questions: Object.fromEntries(
      Object.entries(QUESTION_BANK).flatMap(([category, questions]) =>
        questions.map((entry) => [
          entry.id,
          {
            ...entry,
            used: false,
          },
        ]),
      ),
    ),
    activeQuestionId: null,
    revealStage: 0,
    posterRevealState: {},
    film100SeriesIndex: 0,
    film100SeriesRevealed: false,
  };
}

function loadState() {
  const saved = localStorage.getItem(STORAGE_KEY);

  if (!saved) {
    return buildInitialState();
  }

  try {
    const parsed = JSON.parse(saved);
    const fallback = buildInitialState();
    const parsedQuestions = parsed.questions ?? {};
    const mergedQuestions = Object.fromEntries(
      Object.entries(fallback.questions).map(([id, fallbackQuestion]) => [
        id,
        {
          ...fallbackQuestion,
          // Keep only runtime state from storage; always trust current question text from source.
          used: parsedQuestions[id]?.used ?? fallbackQuestion.used,
        },
      ]),
    );

    return {
      ...fallback,
      ...parsed,
      questions: mergedQuestions,
      posterRevealState: {
        ...fallback.posterRevealState,
        ...parsed.posterRevealState,
      },
    };
  } catch {
    return buildInitialState();
  }
}

let state = loadState();
const app = document.querySelector("#app");
let questionTimerInterval = null;
let questionTimerEndsAt = null;

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function setState(updater) {
  const nextState = typeof updater === "function" ? updater(state) : updater;
  state = nextState;
  saveState();
  render();
}

function resetGame() {
  state = buildInitialState();
  saveState();
  render();
}

function resetQuestionsOnly() {
  setState((current) => ({
    ...current,
    screen: "board",
    activeQuestionId: null,
    revealStage: 0,
    questions: Object.fromEntries(
      Object.entries(QUESTION_BANK).flatMap(([category, questions]) =>
        questions.map((entry) => [
          entry.id,
          {
            ...entry,
            used: false,
          },
        ]),
      ),
    ),
    posterRevealState: {},
    film100SeriesIndex: 0,
    film100SeriesRevealed: false,
  }));
}

function createTeam(name) {
  return {
    id: crypto.randomUUID(),
    name,
    score: 0,
  };
}

function setupTeamForm() {
  return `
    <section class="setup-card">
      <p class="eyebrow">BdayBasti Quiz</p>
      <h1>Teams anlegen und direkt losspielen</h1>
      <p class="setup-copy">
        Alle Punkte, Teams und bereits geoeffneten Fragen bleiben lokal im Browser gespeichert.
      </p>

      <form id="team-form" class="team-form">
        <label for="team-input">Teamname</label>
        <div class="team-form-row">
          <input id="team-input" name="team" type="text" maxlength="24" placeholder="Zum Beispiel Team Konfetti" required />
          <button type="submit" class="primary-button">Team hinzufuegen</button>
        </div>
      </form>

      <div class="team-pill-list">
        ${
          state.teams.length
            ? state.teams
                .map(
                  (team) => `
                    <div class="team-pill">
                      <span>${escapeHtml(team.name)}</span>
                      <button type="button" class="ghost-button" data-remove-team="${team.id}">Entfernen</button>
                    </div>
                  `,
                )
                .join("")
            : `<p class="empty-hint">Noch keine Teams angelegt.</p>`
        }
      </div>

      <button type="button" class="start-button" id="start-game" ${state.teams.length < 1 ? "disabled" : ""}>
        Quiz starten
      </button>
    </section>
  `;
}

function isQuestionLocked(entry) {
  if (entry.points !== 1000) {
    return false;
  }

  const usedInCategory = QUESTION_BANK[entry.category].filter((question) => state.questions[question.id]?.used).length;
  return usedInCategory < 2;
}

function quizBoard() {
  return `
    <div class="quiz-layout">
      <section class="board-panel">
        <div class="board-header">
          <div>
            <p class="eyebrow">Quizboard</p>
            <h1>BdayBasti</h1>
          </div>
          <div class="board-header-actions">
            <button type="button" class="ghost-button" id="reset-questions">Nur Fragen resetten</button>
            <button type="button" class="danger-button" id="reset-game">Alles resetten</button>
          </div>
        </div>

        <div class="board-grid">
          ${CATEGORIES.map(
            (category) => `
              <div class="category-column">
                <div class="category-head">${category}</div>
                ${QUESTION_BANK[category]
                  .map((entry) => {
                    const questionState = state.questions[entry.id];
                    const locked = isQuestionLocked(entry);
                    return `
                      <button
                        type="button"
                        class="question-tile ${questionState.used ? "is-used" : ""} ${locked ? "is-locked" : ""} ${entry.category === "Filme" && (entry.points === 100 || entry.points === 200 || entry.points === 300 || entry.points === 500 || entry.points === 1000) ? `is-film-${entry.points}` : ""} ${entry.category === "Musik" && (entry.points === 100 || entry.points === 200 || entry.points === 1000) ? `is-music-${entry.points}` : ""}"
                        data-question-id="${entry.id}"
                        ${questionState.used || locked ? "disabled" : ""}
                      >
                        ${entry.points}
                      </button>
                    `;
                  })
                  .join("")}
              </div>
            `,
          ).join("")}
        </div>
      </section>

      <aside class="score-panel">
        <h2>Teams</h2>
        <div class="score-list">
          ${state.teams
            .map(
              (team) => `
                <section class="team-score-card">
                  <p class="team-name">${escapeHtml(team.name)}</p>
                  <p class="team-score">${team.score}</p>
                  <div class="score-controls">
                    <button type="button" class="score-button" data-team-action="decrement" data-team-id="${team.id}">-100</button>
                    <button type="button" class="score-button" data-team-action="increment" data-team-id="${team.id}">+100</button>
                  </div>
                </section>
              `,
            )
            .join("")}
        </div>
      </aside>
    </div>
  `;
}

function questionScreen(question) {
  return `
    <section class="question-screen ${question.category === "Filme" && question.points === 1000 ? "is-film-bonus-question" : ""} ${question.category === "Musik" && question.points === 200 ? "is-music-200-question" : ""}" data-question-stage-trigger="true">
      <button type="button" class="back-link" id="back-to-board">Zurück zum Quizboard</button>
      <div class="question-stage-card">
        <div class="question-head-inline">
          <p class="question-category">${question.category}</p>
          <p class="question-points">${question.points}</p>
        </div>
        ${
          state.revealStage < 1
            ? `<p class="question-subtitle">${
                question.category === "Filme" && question.points === 100
                  ? "Birdman"
                  : question.category === "Filme" && question.points === 200
                    ? "Catch Me If You Can"
                    : question.category === "Filme" && question.points === 300
                      ? "Inside Job"
                      : question.category === "Filme" && question.points === 500
                        ? "Cinema Paradiso"
                        : question.category === "Filme" && question.points === 1000
                          ? "Das Phantom der Oper"
                        : question.category === "Musik" && question.points === 100
                          ? "Dreh den Swag auf - Money Boy"
                        : question.category === "Musik" && question.points === 200
                          ? "Fortunate Son - CCR"
                        : "placeholder"
              }</p>`
            : ""
        }
        ${
          state.revealStage >= 1
            ? `
              <div class="question-copy">
                <h1>${formatQuestionText(question.question)}</h1>
                ${question.note ? `<p class="question-note">${escapeHtml(question.note)}</p>` : ""}
              </div>
            `
            : ""
        }
        ${
          state.revealStage >= 1 && question.factChoices.length
            ? `
              <div class="fact-choice-list">
                ${question.factChoices
                  .map(
                    (choice) => `
                      <div class="fact-choice ${state.revealStage >= 2 && choice.id === question.incorrectChoiceId ? "is-incorrect" : ""}">
                        ${escapeHtml(choice.text)}
                      </div>
                    `,
                  )
                  .join("")}
              </div>
            `
            : ""
        }
        ${
          state.revealStage >= 1 && question.posterReveal.length
            ? `
              <div class="poster-reveal-grid">
                ${question.posterReveal
                  .map((poster) => {
                    const revealed = !!state.posterRevealState[question.id]?.[poster.id];
                    return `
                      <div class="poster-card ${revealed ? "is-revealed" : ""}">
                        <div class="poster-visual">
                          ${
                            revealed
                              ? `<img src="${poster.src}" alt="${escapeHtml(poster.alt)}" class="poster-image" />`
                              : `<div class="poster-back">${escapeHtml(poster.label)}</div>`
                          }
                        </div>
                        <button
                          type="button"
                          class="ghost-button poster-button"
                          data-poster-question-id="${question.id}"
                          data-poster-id="${poster.id}"
                          ${revealed ? "disabled" : ""}
                        >
                          Reveal
                        </button>
                      </div>
                    `;
                  })
                  .join("")}
              </div>
            `
            : ""
        }
        ${
          state.revealStage >= 1 && question.videoSrc
            ? `
              <div class="video-panel">
                <video class="question-video" controls playsinline preload="metadata">
                  <source src="${question.videoSrc}" type="video/mp4" />
                </video>
              </div>
            `
            : ""
        }
        ${
          state.revealStage >= 1 && question.timerSeconds
            ? `
              <div class="timer-panel">
                <p class="timer-label">5 Minuten Timer</p>
                <p class="timer-display" id="timer-display">${getTimerDisplay(question.timerSeconds)}</p>
                <div class="timer-actions">
                  <button type="button" class="ghost-button" id="start-timer">Timer starten</button>
                  <button type="button" class="ghost-button" id="finish-timer">Fertig</button>
                </div>
              </div>
            `
            : ""
        }
        ${
          state.revealStage >= 2 && !question.factChoices.length
            ? `
              <div class="answer-panel">
                <p class="answer-label">Lösung</p>
                <p class="answer-text">${escapeHtml(question.answer)}</p>
              </div>
            `
            : ""
        }
        <div class="question-actions">
          ${
            state.revealStage === 1 && !question.hideAnswerButton
            && !(question.category === "Filme" && (question.points === 500 || question.points === 1000))
              ? `<button type="button" class="primary-button" id="show-answer">${
                  question.category === "Filme" && (question.points === 200 || question.points === 300)
                    ? "Lösung anzeigen"
                    : "lets go"
                }</button>`
              : ""
          }
          ${
            state.revealStage >= 2 || (state.revealStage === 1 && question.hideAnswerButton)
              ? `<button type="button" class="primary-button" id="return-to-board">Zurück zum Quiz</button>`
              : ""
          }
        </div>
      </div>
    </section>
  `;
}

function film100SeriesScreen(question) {
  const series = FILM_100_SERIES[state.film100SeriesIndex] ?? FILM_100_SERIES[0];
  const isLast = state.film100SeriesIndex >= FILM_100_SERIES.length - 1;

  return `
    <section class="question-screen film100-series-screen">
      <div class="question-stage-card film100-stage-card">
        <div class="question-head-inline">
          <p class="question-category">${question.category}</p>
          <p class="question-points">${question.points}</p>
        </div>
        <div class="question-copy">
          <h1>${formatQuestionText(question.question)}</h1>
        </div>
        <button
          type="button"
          class="film100-image-shell ${state.film100SeriesRevealed ? "is-revealed" : ""}"
          id="film100-reveal"
          aria-label="${state.film100SeriesRevealed ? "Punkteansicht" : "Cover aufdecken"}"
        >
          <img src="${series.coverSrc}" alt="${escapeHtml(series.title)} Cover" class="film100-image film100-cover" />
          <img src="${series.pointsSrc}" alt="${escapeHtml(series.title)} Punkte" class="film100-image film100-points" />
        </button>
        <div class="question-actions film100-actions">
          <button type="button" class="primary-button" id="film100-next" ${state.film100SeriesRevealed ? "" : "disabled"}>
            ${isLast ? "Zurück zum Quizboard" : "Naechste Serie"}
          </button>
        </div>
      </div>
    </section>
  `;
}

function isFilm100Question(question) {
  return question?.category === "Filme" && question?.points === 100;
}

function render() {
  const activeQuestion = state.activeQuestionId ? state.questions[state.activeQuestionId] : null;

  if (state.screen === "setup") {
    app.setAttribute("data-screen", "setup");
    app.innerHTML = setupTeamForm();
    bindSetupEvents();
    return;
  }

  if (state.screen === "question" && activeQuestion) {
    app.setAttribute("data-screen", "question");
    app.innerHTML = questionScreen(activeQuestion);
    bindQuestionEvents();
    syncTimerDisplay();
    return;
  }

  if (state.screen === "film100-series" && activeQuestion && isFilm100Question(activeQuestion)) {
    app.setAttribute("data-screen", "question");
    app.innerHTML = film100SeriesScreen(activeQuestion);
    bindFilm100SeriesEvents();
    return;
  }

  app.setAttribute("data-screen", "board");
  app.innerHTML = quizBoard();
  bindBoardEvents();
}

function bindSetupEvents() {
  document.querySelector("#team-form")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const input = document.querySelector("#team-input");
    const name = input.value.trim();

    if (!name) {
      return;
    }

    setState((current) => ({
      ...current,
      teams: [...current.teams, createTeam(name)],
    }));

    input.value = "";
    input.focus();
  });

  document.querySelectorAll("[data-remove-team]").forEach((button) => {
    button.addEventListener("click", () => {
      const teamId = button.getAttribute("data-remove-team");

      setState((current) => ({
        ...current,
        teams: current.teams.filter((team) => team.id !== teamId),
      }));
    });
  });

  document.querySelector("#start-game")?.addEventListener("click", () => {
    setState((current) => ({
      ...current,
      screen: "board",
    }));
  });
}

function bindBoardEvents() {
  document.querySelector("#reset-game")?.addEventListener("click", resetGame);
  document.querySelector("#reset-questions")?.addEventListener("click", resetQuestionsOnly);

  document.querySelectorAll("[data-question-id]").forEach((button) => {
    button.addEventListener("click", () => {
      const questionId = button.getAttribute("data-question-id");
      setState((current) => ({
        ...current,
        screen: "question",
        activeQuestionId: questionId,
        revealStage: 0,
        film100SeriesIndex: 0,
        film100SeriesRevealed: false,
        questions: {
          ...current.questions,
          [questionId]: {
            ...current.questions[questionId],
            used: true,
          },
        },
      }));
    });
  });

  document.querySelectorAll("[data-team-id]").forEach((button) => {
    button.addEventListener("click", () => {
      const teamId = button.getAttribute("data-team-id");
      const action = button.getAttribute("data-team-action");

      setState((current) => ({
        ...current,
        teams: current.teams.map((team) =>
          team.id === teamId
            ? {
                ...team,
                score: team.score + (action === "increment" ? 100 : -100),
              }
            : team,
        ),
      }));
    });
  });
}

function bindQuestionEvents() {
  document.querySelector(".question-screen")?.addEventListener("click", (event) => {
    const target = event.target;
    const clickedControl = target.closest("button");

    if (clickedControl) {
      return;
    }

    if (state.revealStage < 1) {
      setState((current) => ({
        ...current,
        revealStage: 1,
      }));
    }
  });

  document.querySelector("#show-answer")?.addEventListener("click", () => {
    const activeQuestion = state.activeQuestionId ? state.questions[state.activeQuestionId] : null;

    if (isFilm100Question(activeQuestion)) {
      setState((current) => ({
        ...current,
        screen: "film100-series",
        film100SeriesIndex: 0,
        film100SeriesRevealed: false,
      }));
      return;
    }

    setState((current) => ({
      ...current,
      revealStage: 2,
    }));
  });

  const goBack = () =>
    {
      stopQuestionTimer();

      setState((current) => ({
        ...current,
        screen: "board",
        activeQuestionId: null,
        revealStage: 0,
        film100SeriesIndex: 0,
        film100SeriesRevealed: false,
      }));
    };

  document.querySelector("#start-timer")?.addEventListener("click", () => {
    const activeQuestion = state.activeQuestionId ? state.questions[state.activeQuestionId] : null;

    if (!activeQuestion?.timerSeconds) {
      return;
    }

    questionTimerEndsAt = Date.now() + activeQuestion.timerSeconds * 1000;
    syncTimerDisplay();

    if (questionTimerInterval) {
      clearInterval(questionTimerInterval);
    }

    questionTimerInterval = setInterval(syncTimerDisplay, 250);
  });

  document.querySelector("#finish-timer")?.addEventListener("click", () => {
    stopQuestionTimer(true);
  });

  document.querySelectorAll("[data-poster-id]").forEach((button) => {
    button.addEventListener("click", () => {
      const questionId = button.getAttribute("data-poster-question-id");
      const posterId = button.getAttribute("data-poster-id");

      setState((current) => ({
        ...current,
        posterRevealState: {
          ...current.posterRevealState,
          [questionId]: {
            ...(current.posterRevealState[questionId] ?? {}),
            [posterId]: true,
          },
        },
      }));
    });
  });

  document.querySelector("#return-to-board")?.addEventListener("click", goBack);
  document.querySelector("#back-to-board")?.addEventListener("click", goBack);
}

function bindFilm100SeriesEvents() {
  document.querySelector("#film100-reveal")?.addEventListener("click", () => {
    if (state.film100SeriesRevealed) {
      return;
    }

    setState((current) => ({
      ...current,
      film100SeriesRevealed: true,
    }));
  });

  document.querySelector("#film100-next")?.addEventListener("click", () => {
    if (!state.film100SeriesRevealed) {
      return;
    }

    const isLast = state.film100SeriesIndex >= FILM_100_SERIES.length - 1;

    if (isLast) {
      setState((current) => ({
        ...current,
        screen: "board",
        activeQuestionId: null,
        revealStage: 0,
        film100SeriesIndex: 0,
        film100SeriesRevealed: false,
      }));
      return;
    }

    setState((current) => ({
      ...current,
      film100SeriesIndex: current.film100SeriesIndex + 1,
      film100SeriesRevealed: false,
    }));
  });
}

function formatTimer(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60)
    .toString()
    .padStart(2, "0");
  const seconds = Math.floor(totalSeconds % 60)
    .toString()
    .padStart(2, "0");

  return `${minutes}:${seconds}`;
}

function getTimerDisplay(defaultSeconds) {
  if (!questionTimerEndsAt) {
    return formatTimer(defaultSeconds);
  }

  const remainingSeconds = Math.max(0, Math.ceil((questionTimerEndsAt - Date.now()) / 1000));
  return formatTimer(remainingSeconds);
}

function stopQuestionTimer(showFinished = false) {
  if (questionTimerInterval) {
    clearInterval(questionTimerInterval);
    questionTimerInterval = null;
  }

  questionTimerEndsAt = null;

  const display = document.querySelector("#timer-display");

  if (display) {
    display.textContent = showFinished ? "FERTIG" : "00:00";
  }
}

function syncTimerDisplay() {
  const display = document.querySelector("#timer-display");

  if (!display || !questionTimerEndsAt) {
    return;
  }

  const remainingSeconds = Math.max(0, Math.ceil((questionTimerEndsAt - Date.now()) / 1000));
  display.textContent = formatTimer(remainingSeconds);

  if (remainingSeconds <= 0) {
    stopQuestionTimer();
  }
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function formatQuestionText(value) {
  return escapeHtml(value).replaceAll("\n", "<br />");
}

render();


