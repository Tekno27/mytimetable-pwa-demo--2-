// ===================== SAMPLE DATA =====================
// In a real app this would come from the department draft via an API
const RAW_TIMETABLE = {
  "BSc Computer Science": {
    "100": {
      Mon: [
        { time: "08:00 – 10:00", code: "CSC101", title: "Introduction to Computing", lecturer: "Dr. A. Mensah", venue: "LT1 – Main Campus", color: "bg-blue-500" },
        { time: "11:00 – 13:00", code: "MTH101", title: "Algebra & Trigonometry", lecturer: "Mr. K. Owusu", venue: "Room 204 – Science Block", color: "bg-emerald-500" },
        { time: "14:00 – 16:00", code: "ENG101", title: "Communication Skills", lecturer: "Mrs. E. Boateng", venue: "Hall A – Arts Faculty", color: "bg-violet-500" }
      ],
      Tue: [
        { time: "09:00 – 11:00", code: "CSC102", title: "Programming Fundamentals", lecturer: "Dr. A. Mensah", venue: "Computer Lab 2", color: "bg-blue-500" },
        { time: "13:00 – 15:00", code: "PHY101", title: "General Physics I", lecturer: "Prof. S. Addo", venue: "Physics Lecture Theatre", color: "bg-amber-500" }
      ],
      Wed: [
        { time: "08:00 – 10:00", code: "CSC101", title: "Introduction to Computing", lecturer: "Dr. A. Mensah", venue: "LT1 – Main Campus", color: "bg-blue-500" },
        { time: "10:30 – 12:30", code: "MTH101", title: "Algebra & Trigonometry", lecturer: "Mr. K. Owusu", venue: "Room 204 – Science Block", color: "bg-emerald-500" }
      ],
      Thu: [
        { time: "09:00 – 11:00", code: "CSC102", title: "Programming Fundamentals", lecturer: "Dr. A. Mensah", venue: "Computer Lab 2", color: "bg-blue-500" },
        { time: "14:00 – 16:00", code: "ENG101", title: "Communication Skills", lecturer: "Mrs. E. Boateng", venue: "Hall A – Arts Faculty", color: "bg-violet-500" }
      ],
      Fri: [
        { time: "08:00 – 10:00", code: "PHY101", title: "General Physics I", lecturer: "Prof. S. Addo", venue: "Physics Lecture Theatre", color: "bg-amber-500" },
        { time: "11:00 – 13:00", code: "CSC101", title: "Introduction to Computing (Tutorial)", lecturer: "TA – J. Asante", venue: "Tutorial Room 3", color: "bg-blue-500" }
      ]
    },
    "200": {
      Mon: [
        { time: "09:00 – 11:00", code: "CSC201", title: "Data Structures", lecturer: "Dr. B. Quaye", venue: "LT2", color: "bg-blue-500" },
        { time: "13:00 – 15:00", code: "CSC203", title: "Discrete Mathematics", lecturer: "Mr. K. Owusu", venue: "Room 301", color: "bg-emerald-500" }
      ],
      Tue: [
        { time: "08:00 – 10:00", code: "CSC205", title: "Computer Architecture", lecturer: "Prof. S. Addo", venue: "Lab 1", color: "bg-amber-500" }
      ],
      Wed: [
        { time: "10:00 – 12:00", code: "CSC201", title: "Data Structures", lecturer: "Dr. B. Quaye", venue: "LT2", color: "bg-blue-500" }
      ],
      Thu: [
        { time: "09:00 – 11:00", code: "CSC203", title: "Discrete Mathematics", lecturer: "Mr. K. Owusu", venue: "Room 301", color: "bg-emerald-500" }
      ],
      Fri: [
        { time: "14:00 – 16:00", code: "CSC205", title: "Computer Architecture", lecturer: "Prof. S. Addo", venue: "Lab 1", color: "bg-amber-500" }
      ]
    }
  },
  "BSc Information Technology": {
    "100": {
      Mon: [
        { time: "08:00 – 10:00", code: "IT101", title: "Intro to IT", lecturer: "Mrs. L. Darko", venue: "IT Lab A", color: "bg-indigo-500" },
        { time: "11:00 – 13:00", code: "MTH101", title: "Algebra & Trigonometry", lecturer: "Mr. K. Owusu", venue: "Room 204", color: "bg-emerald-500" }
      ],
      Tue: [
        { time: "09:00 – 11:00", code: "IT102", title: "Web Fundamentals", lecturer: "Mr. T. Appiah", venue: "IT Lab B", color: "bg-indigo-500" }
      ],
      Wed: [
        { time: "08:00 – 10:00", code: "IT101", title: "Intro to IT", lecturer: "Mrs. L. Darko", venue: "IT Lab A", color: "bg-indigo-500" }
      ],
      Thu: [
        { time: "13:00 – 15:00", code: "ENG101", title: "Communication Skills", lecturer: "Mrs. E. Boateng", venue: "Hall A", color: "bg-violet-500" }
      ],
      Fri: [
        { time: "10:00 – 12:00", code: "IT102", title: "Web Fundamentals", lecturer: "Mr. T. Appiah", venue: "IT Lab B", color: "bg-indigo-500" }
      ]
    }
  },
  "BSc Mathematics": {
    "100": {
      Mon: [
        { time: "08:00 – 10:00", code: "MTH101", title: "Algebra & Trigonometry", lecturer: "Mr. K. Owusu", venue: "Room 204", color: "bg-emerald-500" },
        { time: "11:00 – 13:00", code: "MTH103", title: "Calculus I", lecturer: "Dr. F. Mensah", venue: "Math LT", color: "bg-teal-500" }
      ],
      Tue: [
        { time: "09:00 – 11:00", code: "MTH105", title: "Linear Algebra", lecturer: "Prof. A. Kumi", venue: "Room 110", color: "bg-teal-500" }
      ],
      Wed: [
        { time: "08:00 – 10:00", code: "MTH101", title: "Algebra & Trigonometry", lecturer: "Mr. K. Owusu", venue: "Room 204", color: "bg-emerald-500" }
      ],
      Thu: [
        { time: "14:00 – 16:00", code: "MTH103", title: "Calculus I", lecturer: "Dr. F. Mensah", venue: "Math LT", color: "bg-teal-500" }
      ],
      Fri: [
        { time: "09:00 – 11:00", code: "ENG101", title: "Communication Skills", lecturer: "Mrs. E. Boateng", venue: "Hall A", color: "bg-violet-500" }
      ]
    }
  },
  "BSc Physics": {
    "100": {
      Mon: [
        { time: "08:00 – 10:00", code: "PHY101", title: "General Physics I", lecturer: "Prof. S. Addo", venue: "Physics LT", color: "bg-amber-500" }
      ],
      Tue: [
        { time: "10:00 – 12:00", code: "MTH101", title: "Algebra & Trigonometry", lecturer: "Mr. K. Owusu", venue: "Room 204", color: "bg-emerald-500" }
      ],
      Wed: [
        { time: "08:00 – 10:00", code: "PHY101", title: "General Physics I", lecturer: "Prof. S. Addo", venue: "Physics LT", color: "bg-amber-500" }
      ],
      Thu: [
        { time: "13:00 – 15:00", code: "PHY103", title: "Practical Physics", lecturer: "Dr. R. Tetteh", venue: "Physics Lab", color: "bg-orange-500" }
      ],
      Fri: [
        { time: "09:00 – 11:00", code: "ENG101", title: "Communication Skills", lecturer: "Mrs. E. Boateng", venue: "Hall A", color: "bg-violet-500" }
      ]
    }
  },
  "BA English": {
    "100": {
      Mon: [
        { time: "09:00 – 11:00", code: "ENG101", title: "Communication Skills", lecturer: "Mrs. E. Boateng", venue: "Hall A", color: "bg-violet-500" },
        { time: "13:00 – 15:00", code: "ENG103", title: "Introduction to Literature", lecturer: "Dr. P. Adjei", venue: "Arts Room 5", color: "bg-pink-500" }
      ],
      Tue: [
        { time: "10:00 – 12:00", code: "ENG105", title: "Academic Writing", lecturer: "Ms. N. Sarpong", venue: "Writing Centre", color: "bg-rose-500" }
      ],
      Wed: [
        { time: "09:00 – 11:00", code: "ENG101", title: "Communication Skills", lecturer: "Mrs. E. Boateng", venue: "Hall A", color: "bg-violet-500" }
      ],
      Thu: [
        { time: "14:00 – 16:00", code: "ENG103", title: "Introduction to Literature", lecturer: "Dr. P. Adjei", venue: "Arts Room 5", color: "bg-pink-500" }
      ],
      Fri: [
        { time: "11:00 – 13:00", code: "ENG105", title: "Academic Writing", lecturer: "Ms. N. Sarpong", venue: "Writing Centre", color: "bg-rose-500" }
      ]
    }
  }
};

// ===================== STATE =====================
let student = null; // { programme, level, name }
let currentDay = "Mon";

// ===================== DOM =====================
const pageOnboarding = document.getElementById("page-onboarding");
const appShell = document.getElementById("app-shell");
const timetableEl = document.getElementById("timetable");
const emptyState = document.getElementById("emptyState");
const dayButtons = document.querySelectorAll(".day-btn");
const navItems = document.querySelectorAll(".nav-item");

// ===================== HELPERS =====================
function getTimetable() {
  if (!student) return {};
  const prog = RAW_TIMETABLE[student.programme];
  if (!prog) return {};
  return prog[student.level] || {};
}

function saveStudent() {
  localStorage.setItem("mytimetable_student", JSON.stringify(student));
}

function loadStudent() {
  try {
    const raw = localStorage.getItem("mytimetable_student");
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function getInitials(name) {
  if (!name) return student?.programme?.split(" ").pop()?.[0] || "S";
  return name.trim().split(/\s+/).map(w => w[0]).join("").slice(0, 2).toUpperCase();
}

// ===================== RENDER =====================
function renderDay(day) {
  currentDay = day;
  const data = getTimetable();
  const slots = data[day] || [];
  const dayNames = { Mon: "Monday", Tue: "Tuesday", Wed: "Wednesday", Thu: "Thursday", Fri: "Friday" };
  document.getElementById("day-name").textContent = dayNames[day];
  document.getElementById("lecture-count").textContent =
    `${slots.length} ${slots.length === 1 ? "lecture" : "lectures"}`;

  timetableEl.innerHTML = "";
  if (slots.length === 0) {
    emptyState.classList.remove("hidden");
    return;
  }
  emptyState.classList.add("hidden");

  slots.forEach(slot => {
    const card = document.createElement("div");
    card.className = "slot";
    const times = slot.time.split("–").map(t => t.trim());
    card.innerHTML = `
      <div class="slot-time">
        <strong>${times[0] || ""}</strong>
        <span>${times[1] ? `to ${times[1]}` : ""}</span>
      </div>
      <div class="slot-body">
        <div class="slot-course">
          <div>
            <div class="slot-code">${slot.code}</div>
            <h3 class="slot-title">${slot.title}</h3>
          </div>
        </div>
        <div class="slot-meta">
          <span>${slot.venue}</span>
          <span>${slot.lecturer}</span>
        </div>
      </div>
    `;
    timetableEl.appendChild(card);
  });
}

function renderUpcoming() {
  const list = document.getElementById("upcoming-list");
  const data = getTimetable();
  const todaySlots = data[currentDay] || data["Mon"] || [];
  if (todaySlots.length === 0) {
    list.innerHTML = `<p style="color:#687386;font-size:13px">No lectures scheduled for this day.</p>`;
    return;
  }
  list.innerHTML = todaySlots.map(s => `
    <div class="upcoming-item">
      <strong>${s.time.split("–")[0].trim()}</strong>
      <span>${s.code} · ${s.venue.split("–")[0].trim()}</span>
    </div>
  `).join("");
}

function showApp() {
  pageOnboarding.classList.remove("active");
  pageOnboarding.classList.add("hidden");
  appShell.classList.remove("hidden");
  appShell.classList.add("active");

  document.getElementById("header-subtitle").textContent =
    `${student.programme} • Level ${student.level}`;
  document.getElementById("welcome-text").textContent =
    student.name ? `Welcome, ${student.name}` : "Welcome";
  document.getElementById("settings-programme").textContent = student.programme;
  document.getElementById("settings-level").textContent = `Level ${student.level}`;

  dayButtons.forEach(b => {
    b.classList.remove("active");
    b.setAttribute("aria-pressed", "false");
  });
  dayButtons[0].classList.add("active");
  dayButtons[0].setAttribute("aria-pressed", "true");

  const today = new Date();
  const monday = new Date(today);
  monday.setDate(today.getDate() - ((today.getDay() + 6) % 7));
  const friday = new Date(monday);
  friday.setDate(monday.getDate() + 4);
  const format = d => d.toLocaleDateString("en-GH", { day: "numeric", month: "short" });
  document.getElementById("week-label").textContent =
    `${format(monday)} – ${format(friday)}`;
  renderDay("Mon");
  renderUpcoming();
}

function showOnboarding() {
  appShell.classList.remove("active");
  appShell.classList.add("hidden");
  pageOnboarding.classList.remove("hidden");
  pageOnboarding.classList.add("active");
}

// ===================== EVENTS =====================
document.getElementById("setup-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const programme = document.getElementById("select-programme").value;
  const level = document.getElementById("select-level").value;
  const name = document.getElementById("input-name").value.trim();
  const formError = document.getElementById("form-error");

  if (!programme || !level) {
    formError.textContent = "Choose both a programme and a level to continue.";
    if (!programme) document.getElementById("select-programme").focus();
    else document.getElementById("select-level").focus();
    return;
  }

  if (!RAW_TIMETABLE[programme] || !RAW_TIMETABLE[programme][level]) {
    formError.textContent =
      "No demo timetable is available for this combination. Try Computer Science at Level 100 or 200.";
    document.getElementById("select-level").focus();
    return;
  }

  formError.textContent = "";
  student = { programme, level, name };
  saveStudent();
  showApp();
});

dayButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    dayButtons.forEach(b => {
      b.classList.remove("active");
      b.setAttribute("aria-pressed", "false");
    });
    btn.classList.add("active");
    btn.setAttribute("aria-pressed", "true");
    renderDay(btn.dataset.day);
    renderUpcoming();
  });
});

navItems.forEach(item => {
  item.addEventListener("click", () => {
    const page = item.dataset.page;
    navItems.forEach(n => {
      n.classList.remove("active");
      n.removeAttribute("aria-current");
    });
    item.classList.add("active");
    item.setAttribute("aria-current", "page");

    document.querySelectorAll("#app-shell .page").forEach(p => p.classList.remove("active"));
    document.getElementById(`page-${page}`).classList.add("active");

    if (page === "reminders") renderUpcoming();
  });
});

document.getElementById("btn-change-programme").addEventListener("click", () => {
  showOnboarding();
});

document.getElementById("btn-clear-data").addEventListener("click", () => {
  if (confirm("Reset all app data and return to onboarding?")) {
    localStorage.removeItem("mytimetable_student");
    student = null;
    showOnboarding();
  }
});

// Persist reminder prefs (demo)
document.getElementById("toggle-reminders").addEventListener("change", (e) => {
  localStorage.setItem("mytimetable_reminders", e.target.checked);
});
document.querySelectorAll('input[name="remind-time"]').forEach(r => {
  r.addEventListener("change", (e) => {
    localStorage.setItem("mytimetable_remind_mins", e.target.value);
  });
});

// ===================== PWA =====================
let deferredPrompt;
const installBtn = document.getElementById("installBtn");

window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredPrompt = e;
  installBtn.classList.remove("hidden");
});

installBtn.addEventListener("click", async () => {
  if (!deferredPrompt) return;
  deferredPrompt.prompt();
  const { outcome } = await deferredPrompt.userChoice;
  if (outcome === "accepted") installBtn.classList.add("hidden");
  deferredPrompt = null;
});

window.addEventListener("appinstalled", () => {
  installBtn.classList.add("hidden");
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js")
      .then(reg => console.log("SW registered:", reg.scope))
      .catch(err => console.log("SW failed:", err));
  });
}

// ===================== INIT =====================
const savedReminders = localStorage.getItem("mytimetable_reminders");
const savedReminderMinutes = localStorage.getItem("mytimetable_remind_mins");
const reminderToggle = document.getElementById("toggle-reminders");
if (savedReminders !== null) reminderToggle.checked = savedReminders === "true";
if (savedReminderMinutes) {
  const savedOption = document.querySelector(
    `input[name="remind-time"][value="${savedReminderMinutes}"]`
  );
  if (savedOption) savedOption.checked = true;
}

student = loadStudent();
if (student && student.programme && student.level) {
  showApp();
} else {
  showOnboarding();
}
