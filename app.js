const STORAGE_KEY = "bdaybasti-quiz-state";

const CATEGORIES = ["Filme", "Musik", "Sport", "Basti", "Random"];
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
    makeQuestion(
      "Musik",
      300,
      "Wieviele Klicks haben folgende Lieder/Sets (Stand 01.04.2026 - 21:54)?",
      "",
      {
        hideAnswerButton: true,
        music300Tracks: [
          {
            id: "reitender-urzwerg",
            title: "reitenderurzwerg - Batou",
            url: "https://soundcloud.com/batou01/reitenderurzwerg",
            clickCount: "2.357",
          },
          {
            id: "yt-zhx",
            title: "Sebastian - DJ Ostkurve feat Anny",
            url: "https://www.youtube.com/watch?v=zHXrwzuavcY",
            clickCount: "50.931",
          },
          {
            id: "yt-hcm",
            title: "Ai Se Eu Te Pego - Michel Teló",
            url: "https://www.youtube.com/watch?v=hcm55lU9knw",
            clickCount: "1.261.964.083",
          },
        ],
      },
    ),
    makeQuestion(
      "Musik",
      500,
      "Welche 5 aus 10 Songs waren am 04.04.1996 in den Top10 der deutschen Charts",
      "",
      {
        hideAnswerButton: true,
        music500Tracks: [
          {
            id: "snap-rhythm",
            title: "SNAP! - Rhythm Is A Dancer",
            url: "https://www.youtube.com/watch?v=JYIaWeVL1JM",
            releaseYear: "1992",
          },
          {
            id: "fools-lemon-tree",
            title: "Fools Garden - Lemon Tree",
            url: "https://www.youtube.com/watch?v=wCQfkEkePx8",
            releaseYear: "1996",
            isTop10OnDate: true,
          },
          {
            id: "celine-my-heart",
            title: "Celine Dion - My Heart Will Go On",
            url: "https://www.youtube.com/watch?v=F2RnxZnubCM",
            releaseYear: "1998",
          },
          {
            id: "raab-maus",
            title: "Stefan Raab - Hier kommt die Maus",
            url: "https://www.youtube.com/watch?v=D9ATffcUOns",
            releaseYear: "1996",
            isTop10OnDate: true,
          },
          {
            id: "rednex-cotton-eye",
            title: "Rednex - Cotton Eye Joe",
            url: "https://www.youtube.com/watch?v=mOYZaiDZ7BM",
            releaseYear: "1994",
          },
          {
            id: "bluemchen-herz",
            title: "Blümchen - Herz an Herz",
            url: "https://www.youtube.com/watch?v=2JCelVI6U68",
            releaseYear: "1996",
            isTop10OnDate: true,
          },
          {
            id: "matthias-reim",
            title: "Matthias Reim - Verdammt, ich lieb dich",
            url: "https://www.youtube.com/watch?v=joCrurvOPcI",
            releaseYear: "1990",
          },
          {
            id: "scooter-valentine",
            title: "Scooter - Let Me Be Your Valentine",
            url: "https://www.youtube.com/watch?v=4DcmI0QaDhc",
            releaseYear: "1996",
            isTop10OnDate: true,
          },
          {
            id: "robert-miles-children",
            title: "Robert Miles - Children",
            url: "https://www.youtube.com/watch?v=CC5ca6Hsb2Q",
            releaseYear: "1996",
            isTop10OnDate: true,
          },
          {
            id: "french-affair-heart-goes-boom",
            title: "French Affair - My Heart Goes Boom",
            url: "https://www.youtube.com/watch?v=oXMV2RBQwiY",
            releaseYear: "2000",
          },
        ],
      },
    ),
    makeQuestion("Musik", 1000, "KARAOKE TIME!!", "", { hideAnswerButton: true }),
  ],
  Sport: [
    makeQuestion(
      "Sport",
      100,
      "Was ist Bastis Lieblingskraftsportübung?",
      "Bankdrücken",
      { sport100RevealVideoSrc: "./Videos/02.mp4" },
    ),
    makeQuestion("Sport", 200, "Wie schnell, darf man in Deutschland mit einem E-Scooter im Straßenverkehr fahren?", "20 km/h"),
    makeQuestion(
      "Sport",
      300,
      "Beantwortet die drei Badminton-Fragen:",
      "",
      {
        hideAnswerButton: true,
        sport300Prompts: [
          {
            id: "court-area",
            question: "Wieviele Quadratmeter hat ein Badminton-Doppel-Feld? (in qm)",
            answer: "81,74",
          },
          {
            id: "net-height",
            question: "Wie hoch ist ein Badmintonnetz? (in cm)",
            answer: "155",
          },
          {
            id: "smash-speed",
            question: "Wie schnell war der schnellste aufgezeichnete Badminton-Smash? (in km/h)",
            answer: "565",
          },
        ],
      },
    ),
    makeQuestion(
      "Sport",
      500,
      "Welche Farben haben die olympischen Ringe (von rechts nach links)?",
      "",
      { hideAnswerButton: true, sport500Rings: true },
    ),
    makeQuestion("Sport", 1000, "EIERLAUF!", "", { hideAnswerButton: true }),
  ],
  Basti: [
    makeQuestion("Basti", 100, "Wieviele Kilometer gibt Basti als Arbeitsweg für die Kilometerpauschale bei seiner Steuererklärung an?", "181km"),
    makeQuestion("Basti", 200, 'Basti fährt jedes Jahr Anfang August zum "Conquest of Mythodea". Das ist ein Larp-Event. Wofür steht die Abkürzung "Larp"?', "Live Action Role Play"),
    makeQuestion("Basti", 300, "Wie lautet Bastis genaue Jobbezeichnung?", "Key Account Manager"),
    makeQuestion(
      "Basti",
      500,
      "Wieviele Mitbewohnis hatte Basti bisher seitdem er in Leipzig wohnt? Zwischenmieten inklusive!",
      "",
      {
        hideAnswerButton: true,
        basti500Photos: [
          { id: "01-arne", src: "./Bilder/Basti500/01_Arne.jpg", alt: "Arne" },
          { id: "02-callin", src: "./Bilder/Basti500/02_Callin.jpg", alt: "Callin" },
          { id: "03-jette", src: "./Bilder/Basti500/03_Jette.jpg", alt: "Jette" },
          { id: "04-gabel", src: "./Bilder/Basti500/04_Gabel.jpg", alt: "Gabel" },
          { id: "05-kathi", src: "./Bilder/Basti500/05_Kathi.jpg", alt: "Kathi" },
          { id: "06-tina", src: "./Bilder/Basti500/06_Tina.jpg", alt: "Tina" },
          { id: "07-artem", src: "./Bilder/Basti500/07_Artem.jpg", alt: "Artem" },
          { id: "08-denise", src: "./Bilder/Basti500/08_Denise.jpg", alt: "Denise" },
          { id: "09-alina", src: "./Bilder/Basti500/09_Alina.png", alt: "Alina" },
          { id: "10-lorena", src: "./Bilder/Basti500/10_Lorena.jpg", alt: "Lorena" },
          { id: "11-lina", src: "./Bilder/Basti500/11_Lina.png", alt: "Lina" },
          { id: "12-jakob", src: "./Bilder/Basti500/12_Jakob.jpg", alt: "Jakob" },
          { id: "13-luis", src: "./Bilder/Basti500/13_luis.JPG", alt: "Luis" },
          { id: "14-torben", src: "./Bilder/Basti500/14_torben.JPG", alt: "Torben" },
          { id: "15-samu", src: "./Bilder/Basti500/15_samu.jpeg", alt: "Samu" },
          { id: "16-ole", src: "./Bilder/Basti500/16_ole.jpg", alt: "Ole" },
          { id: "17-yorick", src: "./Bilder/Basti500/17_yorick.jpg", alt: "Yorick" },
        ],
      },
    ),
    makeQuestion("Basti", 1000, "ELFBAR-TASTING!", "", { hideAnswerButton: true }),
  ],
  Random: [
    makeQuestion("Random", 100, "Wie viele Kontinente gibt es?", "Sieben"),
    makeQuestion(
      "Random",
      200,
      "Ordne die Handies nach ihrem Erscheinungsdatum (älteste zuerst).",
      "",
      {
        hideAnswerButton: true,
        random300Phones: [
          { id: "r300-note9", year: 2018, label: "Samsung Galaxy Note 9", src: "./Bilder/Random300/2018_SamsungGalaxyNote9.jpg" },
          { id: "r300-p7", year: 2014, label: "Huawei Ascend P7", src: "./Bilder/Random300/2014_huaweiAscendP7.jpg" },
          { id: "r300-pixel2", year: 2017, label: "Google Pixel 2", src: "./Bilder/Random300/2017_googlePixel2.jpg" },
          { id: "r300-iphone6s", year: 2015, label: "iPhone 6s", src: "./Bilder/Random300/2015_iphone6s.jpg" },
          { id: "r300-oneplus3", year: 2016, label: "OnePlus 3", src: "./Bilder/Random300/2016_onePlus3.jpg" },
        ],
      },
    ),
    makeQuestion("Random", 300, 'Welches Körperteil hat Basti sich in seiner Jugend mal gebrochen? Tipp: Es hat etwas mit einem "Autounfall" zu tun.', "Fuß"),
    makeQuestion("Random", 500, 'Basti ist Teil der "Fuge"-Crew. Wieviele Veranstaltungen fanden 2025 in der Fuge statt?', "Luis fragen"),
    makeQuestion("Random", 1000, "Kocht das perfekte Ei (Sebastian bewertet), aber ihr dürft keine Uhr benutzen!", "", { hideAnswerButton: true }),
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
    music300Tracks: options.music300Tracks ?? [],
    music500Tracks: options.music500Tracks ?? [],
    sport300Prompts: options.sport300Prompts ?? [],
    sport500Rings: options.sport500Rings ?? false,
    basti500Photos: options.basti500Photos ?? [],
    random300Phones: options.random300Phones ?? [],
    sport100RevealVideoSrc: options.sport100RevealVideoSrc ?? "",
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
    music300RevealState: {},
    music500RevealState: {},
    sport300RevealState: {},
    sport500RevealState: {},
    basti500RevealState: {},
    random300RevealState: {},
    singleQuestionResetMode: false,
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
      music300RevealState: {
        ...fallback.music300RevealState,
        ...parsed.music300RevealState,
      },
      music500RevealState: {
        ...fallback.music500RevealState,
        ...parsed.music500RevealState,
      },
      sport300RevealState: {
        ...fallback.sport300RevealState,
        ...parsed.sport300RevealState,
      },
      sport500RevealState: {
        ...fallback.sport500RevealState,
        ...parsed.sport500RevealState,
      },
      basti500RevealState: {
        ...fallback.basti500RevealState,
        ...parsed.basti500RevealState,
      },
      random300RevealState: {
        ...fallback.random300RevealState,
        ...parsed.random300RevealState,
      },
      singleQuestionResetMode: false,
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
    music300RevealState: {},
    music500RevealState: {},
    sport300RevealState: {},
    sport500RevealState: {},
    basti500RevealState: {},
    random300RevealState: {},
    singleQuestionResetMode: false,
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
            <button type="button" class="ghost-button ${state.singleQuestionResetMode ? "is-active-reset" : ""}" id="toggle-single-question-reset">
              ${state.singleQuestionResetMode ? "Reset-Modus aktiv" : "Einzelfrage resetten"}
            </button>
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
                    const canResetSingleQuestion = state.singleQuestionResetMode && questionState.used;
                    const isDisabled = !canResetSingleQuestion && (questionState.used || locked);
                    return `
                      <button
                        type="button"
                        class="question-tile ${questionState.used ? "is-used" : ""} ${locked ? "is-locked" : ""} ${canResetSingleQuestion ? "is-reset-target" : ""} ${entry.category === "Filme" && (entry.points === 100 || entry.points === 200 || entry.points === 300 || entry.points === 500 || entry.points === 1000) ? `is-film-${entry.points}` : ""} ${entry.category === "Musik" && (entry.points === 100 || entry.points === 200 || entry.points === 300 || entry.points === 500 || entry.points === 1000) ? `is-music-${entry.points}` : ""} ${entry.category === "Sport" && entry.points === 100 ? "is-sport-100" : ""} ${entry.category === "Sport" && entry.points === 200 ? "is-sport-200" : ""} ${entry.category === "Sport" && entry.points === 300 ? "is-sport-300" : ""} ${entry.category === "Sport" && entry.points === 500 ? "is-sport-500" : ""} ${entry.category === "Sport" && entry.points === 1000 ? "is-sport-1000" : ""} ${entry.category === "Basti" && entry.points === 100 ? "is-basti-100" : ""} ${entry.category === "Basti" && entry.points === 200 ? "is-basti-200" : ""} ${entry.category === "Basti" && entry.points === 300 ? "is-basti-300" : ""} ${entry.category === "Basti" && entry.points === 500 ? "is-basti-500" : ""} ${entry.category === "Basti" && entry.points === 1000 ? "is-basti-1000" : ""} ${entry.category === "Random" && entry.points === 200 ? "is-random-200" : ""} ${entry.category === "Random" && entry.points === 300 ? "is-random-300" : ""} ${entry.category === "Random" && entry.points === 500 ? "is-random-500" : ""} ${entry.category === "Random" && entry.points === 1000 ? "is-random-1000" : ""}"
                        data-question-id="${entry.id}"
                        ${isDisabled ? "disabled" : ""}
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

function getYouTubeVideoId(url) {
  try {
    const parsed = new URL(url);
    const host = parsed.hostname.replace(/^www\./, "");

    if (host === "youtu.be") {
      return parsed.pathname.slice(1);
    }

    if (host === "youtube.com" || host === "m.youtube.com") {
      return parsed.searchParams.get("v");
    }
  } catch {
    return null;
  }

  return null;
}

function buildMusicTrackEmbed(track) {
  if (track.url.includes("soundcloud.com")) {
    return {
      src: `https://w.soundcloud.com/player/?url=${encodeURIComponent(track.url)}&auto_play=false&show_comments=false&show_user=true&show_reposts=false&visual=true`,
      title: `${track.title} SoundCloud Player`,
      height: 180,
      allow: "autoplay",
    };
  }

  const videoId = getYouTubeVideoId(track.url);

  if (!videoId) {
    return null;
  }

  return {
    src: `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&playsinline=1`,
    title: `${track.title} YouTube Player`,
    height: 180,
    allow:
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
  };
}

const SPORT_500_RING_REVEAL_ORDER = ["blue", "yellow", "black", "green", "red"];

function getRandom300RevealOrder(question) {
  return [...question.random300Phones].sort((a, b) => a.year - b.year);
}

function questionScreen(question) {
  const isMusic300 = question.category === "Musik" && question.points === 300;
  const isMusic500 = question.category === "Musik" && question.points === 500;
  const isSport500 = question.category === "Sport" && question.points === 500 && question.sport500Rings;
  const isBasti500 = question.category === "Basti" && question.points === 500 && question.basti500Photos.length > 0;
  const isRandom300 = question.category === "Random" && question.points === 200 && question.random300Phones.length > 0;
  const sport500RevealCount = isSport500 ? (state.sport500RevealState[question.id] ?? 0) : 0;
  const revealedRingKeys = SPORT_500_RING_REVEAL_ORDER.slice(0, sport500RevealCount);
  const basti500RevealCount = isBasti500 ? (state.basti500RevealState[question.id] ?? 0) : 0;
  const revealedBasti500Photos = isBasti500 ? question.basti500Photos.slice(0, basti500RevealCount) : [];
  const random300RevealedMap = isRandom300 ? (state.random300RevealState[question.id] ?? {}) : {};
  const random300RevealOrder = isRandom300 ? getRandom300RevealOrder(question) : [];
  const random300AllRevealed = isRandom300 && random300RevealOrder.every((phone) => !!random300RevealedMap[phone.id]);

  return `
    <section class="question-screen ${question.category === "Filme" && question.points === 1000 ? "is-film-bonus-question" : ""} ${question.category === "Musik" && question.points === 200 ? "is-music-200-question" : ""} ${isMusic300 ? "is-music-300-question" : ""} ${isMusic500 ? "is-music-500-question" : ""}" data-question-stage-trigger="true">
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
                        : question.category === "Musik" && question.points === 300
                          ? "Verflixxte Klixx - Der Song zur Sendung"
                        : question.category === "Musik" && question.points === 500
                          ? "CDY - LACAZETTE x JAZEEK"
                        : question.category === "Musik" && question.points === 1000
                          ? "Ain't No Mountain High Enough - Marvin Gaye & Tammi Terrell"
                        : question.category === "Sport" && question.points === 100
                          ? "Kraftsport"
                        : question.category === "Sport" && question.points === 200
                          ? "Racing"
                        : question.category === "Sport" && question.points === 300
                          ? "Badminton"
                        : question.category === "Sport" && question.points === 500
                          ? "Herr der Ringe"
                        : question.category === "Sport" && question.points === 1000
                          ? "Leichtathletik"
                        : question.category === "Basti" && question.points === 100
                          ? "Basti, der Sparfuchs"
                        : question.category === "Basti" && question.points === 200
                          ? "Basti, der Nerd"
                        : question.category === "Basti" && question.points === 300
                          ? "Basti, der Arbeitnehmner"
                        : question.category === "Basti" && question.points === 500
                          ? "Basti, der Mitbewohner"
                        : question.category === "Basti" && question.points === 1000
                          ? "Basti, der Feinschmecker"
                        : question.category === "Random" && question.points === 1000
                          ? "Das perfekte Ei"
                        : question.category === "Random" && question.points === 200
                          ? "Bastis Tech Tipps"
                        : question.category === "Random" && question.points === 300
                          ? "Knick Knack"
                        : question.category === "Random" && question.points === 500
                          ? "Wurzner Straße 20"
                        : "placeholder"
              }</p>`
            : ""
        }
        ${
          state.revealStage < 1 && question.category === "Basti" && question.points === 500
            ? `
              <div class="basti500-intro-video-panel">
                <video class="basti500-intro-video" data-basti500-intro-video autoplay muted loop playsinline preload="auto" controls>
                  <source src="./Videos/01.mp4" type="video/mp4" />
                </video>
              </div>
            `
            : ""
        }
        ${
          state.revealStage < 1 && question.category === "Musik" && question.points === 1000
            ? `
              <div class="basti500-intro-video-panel">
                <video class="basti500-intro-video" data-music1000-intro-video autoplay muted loop playsinline preload="auto" controls>
                  <source src="./Videos/03.mp4" type="video/mp4" />
                </video>
              </div>
            `
            : ""
        }
        ${
          state.revealStage < 1 && question.category === "Basti" && question.points === 300
            ? `
              <div class="basti500-intro-video-panel">
                <video class="basti500-intro-video" data-basti300-intro-video autoplay muted loop playsinline preload="auto" controls>
                  <source src="./Videos/04.mp4" type="video/mp4" />
                </video>
              </div>
            `
            : ""
        }
        ${
          state.revealStage < 1 && question.category === "Basti" && question.points === 1000
            ? `
              <div class="basti500-intro-video-panel">
                <video class="basti500-intro-video" data-basti1000-intro-video autoplay muted loop playsinline preload="auto" controls>
                  <source src="./Videos/05.MOV" type="video/quicktime" />
                </video>
              </div>
            `
            : ""
        }
        ${
          state.revealStage < 1 && question.category === "Sport" && question.points === 300
            ? `
              <div class="basti500-intro-video-panel">
                <video class="basti500-intro-video" data-sport300-intro-video autoplay muted loop playsinline preload="auto" controls>
                  <source src="./Videos/06.mp4" type="video/mp4" />
                </video>
              </div>
            `
            : ""
        }
        ${
          state.revealStage < 1 && question.category === "Sport" && question.points === 200
            ? `
              <div class="basti500-intro-video-panel">
                <video class="basti500-intro-video" data-sport200-intro-video autoplay muted loop playsinline preload="auto" controls>
                  <source src="./Videos/07.mp4" type="video/mp4" />
                </video>
              </div>
            `
            : ""
        }
        ${
          state.revealStage < 1 && question.category === "Basti" && question.points === 100
            ? `
              <div class="basti500-intro-video-panel">
                <video class="basti500-intro-video" data-basti100-intro-video autoplay muted loop playsinline preload="auto" controls>
                  <source src="./Videos/08.mp4" type="video/mp4" />
                </video>
              </div>
            `
            : ""
        }
        ${
          state.revealStage < 1 && question.category === "Basti" && question.points === 200
            ? `
              <div class="basti500-intro-video-panel">
                <img class="placeholder-intro-image" src="./Bilder/placeholder/Basti200.jpg" alt="Basti 200 Placeholder" />
              </div>
            `
            : ""
        }
        ${
          state.revealStage < 1 && question.category === "Filme" && question.points === 1000
            ? `
              <div class="basti500-intro-video-panel">
                <video class="basti500-intro-video" data-filme1000-intro-video autoplay muted loop playsinline preload="auto" controls>
                  <source src="./Videos/09.mp4" type="video/mp4" />
                </video>
              </div>
            `
            : ""
        }
        ${
          state.revealStage < 1 && question.category === "Filme" && question.points === 300
            ? `
              <div class="basti500-intro-video-panel">
                <img class="placeholder-intro-image" src="./Bilder/placeholder/Film300.jpg" alt="Film 300 Placeholder" />
              </div>
            `
            : ""
        }
        ${
          state.revealStage < 1 && question.category === "Musik" && question.points === 100
            ? `
              <div class="basti500-intro-video-panel">
                <video class="basti500-intro-video" data-musik100-intro-video autoplay muted loop playsinline preload="auto" controls>
                  <source src="./Videos/10.mp4" type="video/mp4" />
                </video>
              </div>
            `
            : ""
        }
        ${
          state.revealStage < 1 && question.category === "Musik" && question.points === 500
            ? `
              <div class="basti500-intro-video-panel">
                <video class="basti500-intro-video" data-musik500-intro-video autoplay muted loop playsinline preload="auto" controls>
                  <source src="./Videos/11.mp4" type="video/mp4" />
                </video>
              </div>
            `
            : ""
        }
        ${
          state.revealStage < 1 && question.category === "Sport" && question.points === 500
            ? `
              <div class="basti500-intro-video-panel">
                <video class="basti500-intro-video" data-sport500-intro-video autoplay muted loop playsinline preload="auto" controls>
                  <source src="./Videos/12.mp4" type="video/mp4" />
                </video>
              </div>
            `
            : ""
        }
        ${
          state.revealStage < 1 && question.category === "Sport" && question.points === 1000
            ? `
              <div class="basti500-intro-video-panel">
                <video class="basti500-intro-video" data-sport1000-intro-video autoplay muted loop playsinline preload="auto" controls>
                  <source src="./Videos/13.mp4" type="video/mp4" />
                </video>
              </div>
            `
            : ""
        }
        ${
          state.revealStage < 1 && question.category === "Random" && question.points === 500
            ? `
              <div class="basti500-intro-video-panel">
                <video class="basti500-intro-video" data-random500-intro-video autoplay muted loop playsinline preload="auto" controls>
                  <source src="./Videos/14.mp4" type="video/mp4" />
                </video>
              </div>
            `
            : ""
        }
        ${
          state.revealStage < 1 && question.category === "Random" && question.points === 200
            ? `
              <div class="basti500-intro-video-panel">
                <video class="basti500-intro-video" data-random200-intro-video autoplay muted loop playsinline preload="auto" controls>
                  <source src="./Videos/15.mp4" type="video/mp4" />
                </video>
              </div>
            `
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
          state.revealStage >= 2 && question.sport100RevealVideoSrc
            ? `
              <div class="video-panel">
                <video class="question-video" id="sport100-reveal-video" controls autoplay playsinline preload="auto">
                  <source src="${question.sport100RevealVideoSrc}" type="video/mp4" />
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
          state.revealStage >= 1 && question.music300Tracks.length
            ? `
              <div class="music300-grid">
                ${question.music300Tracks
                  .map((track) => {
                    const embed = buildMusicTrackEmbed(track);
                    const solved = !!state.music300RevealState[question.id]?.[track.id];

                    return `
                      <article class="music300-card">
                        <p class="music300-title">${escapeHtml(track.title)}</p>
                        ${
                          embed
                            ? `
                              <div class="music300-player-wrap">
                                <iframe
                                  class="music300-player"
                                  src="${embed.src}"
                                  title="${escapeHtml(embed.title)}"
                                  height="${embed.height}"
                                  allow="${embed.allow}"
                                  loading="lazy"
                                  allowfullscreen
                                ></iframe>
                              </div>
                            `
                            : `<p class="music300-missing">Player konnte fuer diesen Link nicht erstellt werden.</p>`
                        }
                        <button
                          type="button"
                          class="ghost-button music300-solve"
                          data-music300-reveal-question-id="${question.id}"
                          data-music300-reveal-track-id="${track.id}"
                          ${solved ? "disabled" : ""}
                        >
                          Lösen
                        </button>
                        ${solved ? `<p class="music300-clicks is-visible">${escapeHtml(track.clickCount)}</p>` : ""}
                      </article>
                    `;
                  })
                  .join("")}
              </div>
            `
            : ""
        }
        ${
          state.revealStage >= 1 && question.music500Tracks.length
            ? `
              <div class="music500-grid">
                ${question.music500Tracks
                  .map((track) => {
                    const embed = buildMusicTrackEmbed(track);
                    const solved = !!state.music500RevealState[question.id]?.[track.id];
                    const resultClass = solved ? (track.isTop10OnDate ? "is-correct" : "is-wrong") : "";

                    return `
                      <article class="music300-card music500-card ${resultClass}">
                        <p class="music300-title">${escapeHtml(track.title)}</p>
                        ${
                          embed
                            ? `
                              <div class="music300-player-wrap">
                                <iframe
                                  class="music300-player"
                                  src="${embed.src}"
                                  title="${escapeHtml(embed.title)}"
                                  height="${embed.height}"
                                  allow="${embed.allow}"
                                  loading="lazy"
                                  allowfullscreen
                                ></iframe>
                              </div>
                            `
                            : `<p class="music300-missing">Player konnte fuer diesen Link nicht erstellt werden.</p>`
                        }
                        <button
                          type="button"
                          class="ghost-button music300-solve"
                          data-music500-reveal-question-id="${question.id}"
                          data-music500-reveal-track-id="${track.id}"
                          ${solved ? "disabled" : ""}
                        >
                          Lösen
                        </button>
                        ${solved ? `<p class="music300-clicks is-visible">${escapeHtml(track.releaseYear)}</p>` : ""}
                      </article>
                    `;
                  })
                  .join("")}
              </div>
            `
            : ""
        }
        ${
          state.revealStage >= 1 && question.sport300Prompts.length
            ? `
              <div class="sport300-list">
                ${question.sport300Prompts
                  .map((item) => {
                    const solved = !!state.sport300RevealState[question.id]?.[item.id];
                    return `
                      <article class="sport300-item">
                        <p class="sport300-question">${escapeHtml(item.question)}</p>
                        <button
                          type="button"
                          class="ghost-button sport300-solve"
                          data-sport300-reveal-question-id="${question.id}"
                          data-sport300-reveal-id="${item.id}"
                          ${solved ? "disabled" : ""}
                        >
                          Lösen
                        </button>
                        ${solved ? `<p class="sport300-answer">${escapeHtml(item.answer)}</p>` : ""}
                      </article>
                    `;
                  })
                  .join("")}
              </div>
            `
            : ""
        }
        ${
          state.revealStage >= 1 && isSport500
            ? `
              <div class="sport500-rings-panel">
                <div class="olympic-rings">
                  <span class="olympic-ring ring-blue ${revealedRingKeys.includes("blue") ? "is-revealed" : ""}"></span>
                  <span class="olympic-ring ring-black ${revealedRingKeys.includes("black") ? "is-revealed" : ""}"></span>
                  <span class="olympic-ring ring-red ${revealedRingKeys.includes("red") ? "is-revealed" : ""}"></span>
                  <span class="olympic-ring ring-yellow ${revealedRingKeys.includes("yellow") ? "is-revealed" : ""}"></span>
                  <span class="olympic-ring ring-green ${revealedRingKeys.includes("green") ? "is-revealed" : ""}"></span>
                </div>
              </div>
            `
            : ""
        }
        ${
          state.revealStage >= 1 && isBasti500
            ? `
              <div class="basti500-grid">
                ${revealedBasti500Photos
                  .map(
                    (photo) => `
                      <figure class="basti500-photo-card">
                        <img src="${photo.src}" alt="${escapeHtml(photo.alt)}" class="basti500-photo" />
                      </figure>
                    `,
                  )
                  .join("")}
              </div>
            `
            : ""
        }
        ${
          state.revealStage >= 1 && isRandom300
            ? `
              <div class="random300-grid">
                ${question.random300Phones
                  .map((phone) => {
                    const isRevealed = !!random300RevealedMap[phone.id];
                    return `
                      <article class="random300-card">
                        <div class="random300-image-wrap">
                          <img src="${phone.src}" alt="${escapeHtml(phone.label)}" class="random300-image" />
                        </div>
                        <p class="random300-label">${escapeHtml(phone.label)}</p>
                        ${isRevealed ? `<p class="random300-year">${phone.year}</p>` : ""}
                      </article>
                    `;
                  })
                  .join("")}
              </div>
            `
            : ""
        }
        ${
          state.revealStage >= 2 && !question.factChoices.length && !question.music300Tracks.length && !question.music500Tracks.length && !question.sport300Prompts.length && !isSport500 && !isBasti500 && !isRandom300 && !question.sport100RevealVideoSrc
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
            state.revealStage === 1 && isRandom300
              ? `${!random300AllRevealed
                  ? `<button type="button" class="primary-button" id="random300-reveal-phone">Reveal</button>`
                  : ""}`
              : ""
          }
          ${
            state.revealStage === 1 && isBasti500
              ? `${basti500RevealCount < question.basti500Photos.length
                  ? `<button type="button" class="primary-button" id="basti500-reveal-photo">Reveal</button>`
                  : ""}`
              : ""
          }
          ${
            state.revealStage === 1 && isSport500
              ? `${sport500RevealCount < SPORT_500_RING_REVEAL_ORDER.length
                  ? `<button type="button" class="primary-button" id="sport500-reveal-ring">Reveal</button>`
                  : ""}`
              : ""
          }
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
            (state.revealStage >= 2 || (state.revealStage === 1 && question.hideAnswerButton)) && !isMusic300 && !isMusic500 && (!isSport500 || sport500RevealCount >= SPORT_500_RING_REVEAL_ORDER.length) && (!isBasti500 || basti500RevealCount >= question.basti500Photos.length) && (!isRandom300 || random300AllRevealed)
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
  document.querySelector("#toggle-single-question-reset")?.addEventListener("click", () => {
    setState((current) => ({
      ...current,
      singleQuestionResetMode: !current.singleQuestionResetMode,
    }));
  });

  document.querySelectorAll("[data-question-id]").forEach((button) => {
    button.addEventListener("click", () => {
      const questionId = button.getAttribute("data-question-id");

      if (state.singleQuestionResetMode) {
        if (!state.questions[questionId]?.used) {
          return;
        }

        setState((current) => {
          const nextPosterRevealState = { ...current.posterRevealState };
          const nextMusic300RevealState = { ...current.music300RevealState };
          const nextMusic500RevealState = { ...current.music500RevealState };
          const nextSport300RevealState = { ...current.sport300RevealState };
          const nextSport500RevealState = { ...current.sport500RevealState };
          const nextBasti500RevealState = { ...current.basti500RevealState };
          const nextRandom300RevealState = { ...current.random300RevealState };

          delete nextPosterRevealState[questionId];
          delete nextMusic300RevealState[questionId];
          delete nextMusic500RevealState[questionId];
          delete nextSport300RevealState[questionId];
          delete nextSport500RevealState[questionId];
          delete nextBasti500RevealState[questionId];
          delete nextRandom300RevealState[questionId];

          return {
            ...current,
            singleQuestionResetMode: false,
            questions: {
              ...current.questions,
              [questionId]: {
                ...current.questions[questionId],
                used: false,
              },
            },
            posterRevealState: nextPosterRevealState,
            music300RevealState: nextMusic300RevealState,
            music500RevealState: nextMusic500RevealState,
            sport300RevealState: nextSport300RevealState,
            sport500RevealState: nextSport500RevealState,
            basti500RevealState: nextBasti500RevealState,
            random300RevealState: nextRandom300RevealState,
          };
        });
        return;
      }

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

    if (activeQuestion?.sport100RevealVideoSrc) {
      setTimeout(() => {
        const video = document.querySelector("#sport100-reveal-video");
        if (!video) {
          return;
        }

        video.muted = false;
        video.volume = 1;
        video.play().catch(() => {});
      }, 0);
    }
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

  document.querySelectorAll("[data-music300-reveal-track-id]").forEach((button) => {
    button.addEventListener("click", () => {
      const questionId = button.getAttribute("data-music300-reveal-question-id");
      const trackId = button.getAttribute("data-music300-reveal-track-id");

      setState((current) => ({
        ...current,
        music300RevealState: {
          ...current.music300RevealState,
          [questionId]: {
            ...(current.music300RevealState[questionId] ?? {}),
            [trackId]: true,
          },
        },
      }));
    });
  });

  document.querySelectorAll("[data-music500-reveal-track-id]").forEach((button) => {
    button.addEventListener("click", () => {
      const questionId = button.getAttribute("data-music500-reveal-question-id");
      const trackId = button.getAttribute("data-music500-reveal-track-id");

      setState((current) => ({
        ...current,
        music500RevealState: {
          ...current.music500RevealState,
          [questionId]: {
            ...(current.music500RevealState[questionId] ?? {}),
            [trackId]: true,
          },
        },
      }));
    });
  });

  document.querySelectorAll("[data-sport300-reveal-id]").forEach((button) => {
    button.addEventListener("click", () => {
      const questionId = button.getAttribute("data-sport300-reveal-question-id");
      const promptId = button.getAttribute("data-sport300-reveal-id");

      setState((current) => ({
        ...current,
        sport300RevealState: {
          ...current.sport300RevealState,
          [questionId]: {
            ...(current.sport300RevealState[questionId] ?? {}),
            [promptId]: true,
          },
        },
      }));
    });
  });

  document.querySelector("#sport500-reveal-ring")?.addEventListener("click", () => {
    const activeQuestion = state.activeQuestionId ? state.questions[state.activeQuestionId] : null;

    if (!activeQuestion?.sport500Rings) {
      return;
    }

    setState((current) => {
      const currentCount = current.sport500RevealState[activeQuestion.id] ?? 0;
      const nextCount = Math.min(SPORT_500_RING_REVEAL_ORDER.length, currentCount + 1);

      return {
        ...current,
        sport500RevealState: {
          ...current.sport500RevealState,
          [activeQuestion.id]: nextCount,
        },
      };
    });
  });

  document.querySelector("#basti500-reveal-photo")?.addEventListener("click", () => {
    const activeQuestion = state.activeQuestionId ? state.questions[state.activeQuestionId] : null;

    if (!activeQuestion?.basti500Photos?.length) {
      return;
    }

    setState((current) => {
      const currentCount = current.basti500RevealState[activeQuestion.id] ?? 0;
      const nextCount = Math.min(activeQuestion.basti500Photos.length, currentCount + 1);

      return {
        ...current,
        basti500RevealState: {
          ...current.basti500RevealState,
          [activeQuestion.id]: nextCount,
        },
      };
    });
  });

  const basti500IntroVideo = document.querySelector("[data-basti500-intro-video]");
  basti500IntroVideo?.addEventListener("click", () => {
    if (basti500IntroVideo.muted) {
      basti500IntroVideo.muted = false;
      basti500IntroVideo.volume = 1;
    }
    basti500IntroVideo.play().catch(() => {});
  });

  const music1000IntroVideo = document.querySelector("[data-music1000-intro-video]");
  music1000IntroVideo?.addEventListener("click", () => {
    if (music1000IntroVideo.muted) {
      music1000IntroVideo.muted = false;
      music1000IntroVideo.volume = 1;
    }
    music1000IntroVideo.play().catch(() => {});
  });

  const basti300IntroVideo = document.querySelector("[data-basti300-intro-video]");
  basti300IntroVideo?.addEventListener("click", () => {
    if (basti300IntroVideo.muted) {
      basti300IntroVideo.muted = false;
      basti300IntroVideo.volume = 1;
    }
    basti300IntroVideo.play().catch(() => {});
  });

  const basti1000IntroVideo = document.querySelector("[data-basti1000-intro-video]");
  basti1000IntroVideo?.addEventListener("click", () => {
    if (basti1000IntroVideo.muted) {
      basti1000IntroVideo.muted = false;
      basti1000IntroVideo.volume = 1;
    }
    basti1000IntroVideo.play().catch(() => {});
  });

  const sport300IntroVideo = document.querySelector("[data-sport300-intro-video]");
  sport300IntroVideo?.addEventListener("click", () => {
    if (sport300IntroVideo.muted) {
      sport300IntroVideo.muted = false;
      sport300IntroVideo.volume = 1;
    }
    sport300IntroVideo.play().catch(() => {});
  });

  const sport200IntroVideo = document.querySelector("[data-sport200-intro-video]");
  sport200IntroVideo?.addEventListener("click", () => {
    if (sport200IntroVideo.muted) {
      sport200IntroVideo.muted = false;
      sport200IntroVideo.volume = 1;
    }
    sport200IntroVideo.play().catch(() => {});
  });

  const basti100IntroVideo = document.querySelector("[data-basti100-intro-video]");
  basti100IntroVideo?.addEventListener("click", () => {
    if (basti100IntroVideo.muted) {
      basti100IntroVideo.muted = false;
      basti100IntroVideo.volume = 1;
    }
    basti100IntroVideo.play().catch(() => {});
  });

  const filme1000IntroVideo = document.querySelector("[data-filme1000-intro-video]");
  filme1000IntroVideo?.addEventListener("click", () => {
    if (filme1000IntroVideo.muted) {
      filme1000IntroVideo.muted = false;
      filme1000IntroVideo.volume = 1;
    }
    filme1000IntroVideo.play().catch(() => {});
  });

  const musik100IntroVideo = document.querySelector("[data-musik100-intro-video]");
  musik100IntroVideo?.addEventListener("click", () => {
    if (musik100IntroVideo.muted) {
      musik100IntroVideo.muted = false;
      musik100IntroVideo.volume = 1;
    }
    musik100IntroVideo.play().catch(() => {});
  });

  const musik500IntroVideo = document.querySelector("[data-musik500-intro-video]");
  musik500IntroVideo?.addEventListener("click", () => {
    if (musik500IntroVideo.muted) {
      musik500IntroVideo.muted = false;
      musik500IntroVideo.volume = 1;
    }
    musik500IntroVideo.play().catch(() => {});
  });

  const sport500IntroVideo = document.querySelector("[data-sport500-intro-video]");
  sport500IntroVideo?.addEventListener("click", () => {
    if (sport500IntroVideo.muted) {
      sport500IntroVideo.muted = false;
      sport500IntroVideo.volume = 1;
    }
    sport500IntroVideo.play().catch(() => {});
  });

  const sport1000IntroVideo = document.querySelector("[data-sport1000-intro-video]");
  sport1000IntroVideo?.addEventListener("click", () => {
    if (sport1000IntroVideo.muted) {
      sport1000IntroVideo.muted = false;
      sport1000IntroVideo.volume = 1;
    }
    sport1000IntroVideo.play().catch(() => {});
  });

  const random500IntroVideo = document.querySelector("[data-random500-intro-video]");
  random500IntroVideo?.addEventListener("click", () => {
    if (random500IntroVideo.muted) {
      random500IntroVideo.muted = false;
      random500IntroVideo.volume = 1;
    }
    random500IntroVideo.play().catch(() => {});
  });

  const random200IntroVideo = document.querySelector("[data-random200-intro-video]");
  random200IntroVideo?.addEventListener("click", () => {
    if (random200IntroVideo.muted) {
      random200IntroVideo.muted = false;
      random200IntroVideo.volume = 1;
    }
    random200IntroVideo.play().catch(() => {});
  });

  document.querySelector("#random300-reveal-phone")?.addEventListener("click", () => {
    const activeQuestion = state.activeQuestionId ? state.questions[state.activeQuestionId] : null;

    if (!activeQuestion?.random300Phones?.length) {
      return;
    }

    setState((current) => {
      const revealedMap = current.random300RevealState[activeQuestion.id] ?? {};
      const revealOrder = getRandom300RevealOrder(activeQuestion);
      const nextPhone = revealOrder.find((phone) => !revealedMap[phone.id]);

      if (!nextPhone) {
        return current;
      }

      return {
        ...current,
        random300RevealState: {
          ...current.random300RevealState,
          [activeQuestion.id]: {
            ...revealedMap,
            [nextPhone.id]: true,
          },
        },
      };
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


