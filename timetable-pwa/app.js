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
let importedTimetable = null;
let adminDraft = null;

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
  if (importedTimetable) return importedTimetable;
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

// ===================== TIMETABLE IMPORT =====================
function loadScript(src) {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) {
      resolve();
      return;
    }
    const script = document.createElement("script");
    script.src = src;
    script.onload = resolve;
    script.onerror = () => reject(new Error("Could not load the file parser."));
    document.head.appendChild(script);
  });
}

function parseCsv(text) {
  const rows = [];
  text.replace(/\r/g, "").split("\n").forEach(line => {
    if (!line.trim()) return;
    const cells = [];
    let value = "";
    let quoted = false;
    for (let i = 0; i < line.length; i++) {
      const char = line[i];
      if (char === '"' && line[i + 1] === '"') {
        value += '"';
        i++;
      } else if (char === '"') {
        quoted = !quoted;
      } else if (char === "," && !quoted) {
        cells.push(value.trim());
        value = "";
      } else {
        value += char;
      }
    }
    cells.push(value.trim());
    rows.push(cells);
  });
  return rows;
}

function dayFromText(text) {
  const match = text.match(/\b(mon(?:day)?|tue(?:sday)?|wed(?:nesday)?|thu(?:rsday)?|fri(?:day)?|sat(?:urday)?|sun(?:day)?)\b/i);
  if (!match) return null;
  const day = match[1].toLowerCase();
  if (day.startsWith("mon")) return "Mon";
  if (day.startsWith("tue")) return "Tue";
  if (day.startsWith("wed")) return "Wed";
  if (day.startsWith("thu")) return "Thu";
  if (day.startsWith("fri")) return "Fri";
  return null;
}

function parseTimetableText(text) {
  const result = { Mon: [], Tue: [], Wed: [], Thu: [], Fri: [] };
  const lines = text.replace(/\r/g, "").split("\n").map(line => line.trim()).filter(Boolean);
  let currentDay = null;

  lines.forEach(line => {
    const inlineDay = dayFromText(line);
    if (inlineDay) currentDay = inlineDay;

    const timeMatch = line.match(/(?:^|[^\d])((?:[01]?\d|2[0-3])[:.][0-5]\d)\s*(?:-|–|—|to)\s*((?:[01]?\d|2[0-3])[:.][0-5]\d)/i);
    if (!timeMatch || !currentDay) return;

    const codeMatch = line.match(/\b([A-Z]{2,5}\s*-?\s*\d{2,4}[A-Z]?)\b/i);
    const parts = line
      .replace(timeMatch[0], " ")
      .replace(/\b(mon(?:day)?|tue(?:sday)?|wed(?:nesday)?|thu(?:rsday)?|fri(?:day)?)\b/gi, " ")
      .split(/\s*[|;/]\s*|\t+/)
      .map(part => part.trim())
      .filter(Boolean);

    const code = codeMatch ? codeMatch[1].toUpperCase().replace(/\s+/g, "") : "LECT";
    const title = parts.find(part => /[A-Za-z]/.test(part) && !/^(room|lt|hall|lab)/i.test(part))
      || "Imported lecture";
    const venue = parts.find(part => /^(room|lt|hall|lab|block|theatre)/i.test(part)) || "Venue not stated";
    const lecturer = parts.find(part => /\b(dr|prof|mr|mrs|ms)\b/i.test(part)) || "Lecturer not stated";
    const normalizedStart = timeMatch[1].replace(".", ":");
    const normalizedEnd = timeMatch[2].replace(".", ":");

    result[currentDay].push({
      time: `${normalizedStart} – ${normalizedEnd}`,
      code,
      title,
      lecturer,
      venue,
      color: "bg-teal-500"
    });
  });

  return result;
}

function parseTableText(text) {
  const csvRows = parseCsv(text);
  if (csvRows.length > 1) {
    const result = { Mon: [], Tue: [], Wed: [], Thu: [], Fri: [] };
    const allText = text + "\n";
    const parsed = parseTimetableText(allText);
    let found = false;

    csvRows.forEach(row => {
      const line = row.join(" | ");
      const single = parseTimetableText(line);
      Object.keys(result).forEach(day => {
        if (single[day].length) {
          result[day].push(...single[day]);
          found = true;
        }
      });
    });

    if (found) return result;
  }
  return parseTimetableText(text);
}

async function extractFileText(file) {
  const name = file.name.toLowerCase();

  if (name.endsWith(".csv") || name.endsWith(".txt")) {
    return await file.text();
  }

  if (name.endsWith(".xlsx") || name.endsWith(".xls")) {
    await loadScript("https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/xlsx.full.min.js");
    const buffer = await file.arrayBuffer();
    const workbook = XLSX.read(buffer, { type: "array" });
    return workbook.SheetNames.map(sheetName =>
      XLSX.utils.sheet_to_csv(workbook.Sheets[sheetName])
    ).join("\n");
  }

  if (name.endsWith(".docx")) {
    await loadScript("https://cdn.jsdelivr.net/npm/mammoth@1.8.0/mammoth.browser.min.js");
    const buffer = await file.arrayBuffer();
    const result = await mammoth.extractRawText({ arrayBuffer: buffer });
    return result.value;
  }

  if (name.endsWith(".pdf")) {
    await loadScript("https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js");
    pdfjsLib.GlobalWorkerOptions.workerSrc =
      "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";
    const buffer = await file.arrayBuffer();
    const pdf = await pdfjsLib.getDocument({ data: buffer }).promise;
    let text = "";
    for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber++) {
      const page = await pdf.getPage(pageNumber);
      const content = await page.getTextContent();
      text += content.items.map(item => item.str).join(" ") + "\n";
    }
    return text;
  }

  if (/\.jpe?g$|\.png$|\.webp$/i.test(name)) {
    await loadScript("https://cdn.jsdelivr.net/npm/tesseract.js@5/dist/tesseract.min.js");
    const worker = await Tesseract.createWorker("eng");
    const result = await worker.recognize(file);
    await worker.terminate();
    return result.data.text;
  }

  throw new Error("This file type is not supported. Use PDF, DOCX, XLSX/XLS/CSV, text, JPG, PNG or WebP.");
}

function renderImportPreview(timetable) {
  const preview = document.getElementById("import-preview");
  const rows = [];
  Object.entries(timetable).forEach(([day, slots]) => {
    slots.forEach(slot => rows.push({ day, slot }));
  });

  if (!rows.length) {
    preview.innerHTML = `<p style="color:#687386;font-size:12px">No timetable rows found. Add a clear weekday and time range to the source.</p>`;
    return;
  }
  preview.innerHTML = rows.map(({ day, slot }) => `
    <div class="import-preview-row">
      <strong>${day}</strong>
      <span>${slot.time}<br /><b>${slot.code}</b> · ${slot.title}</span>
    </div>
  `).join("");
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
  document.getElementById("page-admin-login").classList.remove("active");
  document.getElementById("page-admin-login").classList.add("hidden");
  document.getElementById("page-admin").classList.remove("active");
  document.getElementById("page-admin").classList.add("hidden");
  pageOnboarding.classList.remove("hidden");
  pageOnboarding.classList.add("active");
}

function showAdminLogin() {
  pageOnboarding.classList.remove("active");
  pageOnboarding.classList.add("hidden");
  appShell.classList.remove("active");
  appShell.classList.add("hidden");
  document.getElementById("page-admin").classList.remove("active");
  document.getElementById("page-admin").classList.add("hidden");
  document.getElementById("page-admin-login").classList.remove("hidden");
  document.getElementById("page-admin-login").classList.add("active");
  document.getElementById("admin-password").value = "";
  document.getElementById("admin-password").focus();
}

function showAdminConsole() {
  document.getElementById("page-admin-login").classList.remove("active");
  document.getElementById("page-admin-login").classList.add("hidden");
  pageOnboarding.classList.remove("active");
  pageOnboarding.classList.add("hidden");
  appShell.classList.remove("active");
  appShell.classList.add("hidden");
  document.getElementById("page-admin").classList.remove("hidden");
  document.getElementById("page-admin").classList.add("active");
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

document.getElementById("btn-open-admin").addEventListener("click", showAdminLogin);
document.getElementById("btn-open-admin-settings").addEventListener("click", showAdminLogin);
document.getElementById("btn-back-to-student").addEventListener("click", () => {
  if (student) showApp();
  else showOnboarding();
});
document.getElementById("btn-admin-logout").addEventListener("click", () => {
  sessionStorage.removeItem("mytimetable_admin");
  if (student) showApp();
  else showOnboarding();
});

document.getElementById("admin-login-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const username = document.getElementById("admin-username").value.trim();
  const password = document.getElementById("admin-password").value;
  const error = document.getElementById("admin-error");

  if (username !== "admin" || password !== "admin123") {
    error.textContent = "Incorrect username or password.";
    document.getElementById("admin-password").focus();
    return;
  }

  error.textContent = "";
  sessionStorage.setItem("mytimetable_admin", "true");
  showAdminConsole();
});

document.getElementById("btn-clear-data").addEventListener("click", () => {
  if (confirm("Reset all app data and return to onboarding?")) {
    localStorage.removeItem("mytimetable_student");
    localStorage.removeItem("mytimetable_import");
    localStorage.removeItem("mytimetable_import_pending");
    importedTimetable = null;
    student = null;
    showOnboarding();
  }
});

document.getElementById("timetable-file").addEventListener("change", async (event) => {
  const file = event.target.files[0];
  const status = document.getElementById("import-status");
  const applyButton = document.getElementById("btn-apply-import");
  if (!file) return;

  applyButton.disabled = true;
  status.textContent = `Reading ${file.name}…`;
  try {
    const text = await extractFileText(file);
    const timetable = parseTableText(text);
    const count = Object.values(timetable).reduce((sum, slots) => sum + slots.length, 0);
    if (!count) {
      status.textContent = "No readable weekday and time entries were found.";
      document.getElementById("import-preview").innerHTML =
        `<p style="color:#687386;font-size:12px">Try a text, CSV, or spreadsheet format with columns for day and time.</p>`;
      return;
    }

    importedTimetable = timetable;
    localStorage.setItem("mytimetable_import_pending", JSON.stringify(timetable));
    status.textContent = `Found ${count} timetable ${count === 1 ? "entry" : "entries"}. Review, then apply.`;
    renderImportPreview(timetable);
    applyButton.disabled = false;
  } catch (error) {
    importedTimetable = null;
    status.textContent = error.message || "The timetable could not be read.";
  }
});

document.getElementById("btn-apply-import").addEventListener("click", () => {
  const pending = localStorage.getItem("mytimetable_import_pending");
  if (!pending) return;
  try {
    importedTimetable = JSON.parse(pending);
    localStorage.setItem("mytimetable_import", pending);
    localStorage.removeItem("mytimetable_import_pending");
    document.getElementById("import-status").textContent =
      "Imported timetable applied and saved on this device.";
    document.getElementById("btn-apply-import").disabled = true;
    renderDay("Mon");
  } catch {
    document.getElementById("import-status").textContent = "The imported timetable could not be saved.";
  }
});

document.getElementById("admin-timetable-file").addEventListener("change", async (event) => {
  const file = event.target.files[0];
  const status = document.getElementById("admin-import-status");
  const publishButton = document.getElementById("btn-publish-timetable");
  const preview = document.getElementById("admin-import-preview");
  if (!file) return;

  publishButton.disabled = true;
  adminDraft = null;
  status.textContent = `Reading ${file.name}…`;
  status.classList.remove("published-note");
  try {
    const text = await extractFileText(file);
    const timetable = parseTableText(text);
    const count = Object.values(timetable).reduce((sum, slots) => sum + slots.length, 0);
    if (!count) {
      status.textContent = "No weekday and time entries were found.";
      preview.innerHTML =
        `<p style="color:#687386;font-size:12px">Use a clear timetable with Monday–Friday and time ranges.</p>`;
      return;
    }

    adminDraft = timetable;
    status.textContent = `Found ${count} timetable ${count === 1 ? "entry" : "entries"} — review before publishing.`;
    preview.innerHTML = Object.entries(timetable).flatMap(([day, slots]) =>
      slots.map(slot => `
        <div class="import-preview-row">
          <strong>${day}</strong>
          <span>${slot.time}<br /><b>${slot.code}</b> · ${slot.title}</span>
        </div>
      `)
    ).join("");
    publishButton.disabled = false;
  } catch (error) {
    status.textContent = error.message || "The timetable could not be read.";
  }
});

document.getElementById("btn-publish-timetable").addEventListener("click", () => {
  if (!adminDraft) return;
  const programme = document.getElementById("admin-programme").value;
  const level = document.getElementById("admin-level").value;
  const published = JSON.stringify(adminDraft);
  const key = `mytimetable_published:${programme}:${level}`;

  localStorage.setItem(key, published);
  localStorage.setItem("mytimetable_import", published);
  importedTimetable = adminDraft;

  const status = document.getElementById("admin-import-status");
  status.textContent = `Published for ${programme}, Level ${level}.`;
  status.classList.add("published-note");
  document.getElementById("btn-publish-timetable").disabled = true;
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
try {
  let savedImport = null;
  if (student?.programme && student?.level) {
    savedImport = localStorage.getItem(`mytimetable_published:${student.programme}:${student.level}`);
  }
  if (!savedImport) savedImport = localStorage.getItem("mytimetable_import");
  if (savedImport) importedTimetable = JSON.parse(savedImport);
} catch {
  localStorage.removeItem("mytimetable_import");
  importedTimetable = null;
}
if (student && student.programme && student.level) {
  showApp();
} else {
  showOnboarding();
}
