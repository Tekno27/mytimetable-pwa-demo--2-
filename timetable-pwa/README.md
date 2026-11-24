# MyTimetable – Full Student PWA Demo

A complete Progressive Web App that demonstrates the student-facing experience of the timetable decoder idea.

## Features

- **Onboarding**: Student selects Programme + Level (+ optional name)
- **Personal timetable**: Only shows courses for the selected programme & level
- **Multiple sample programmes**:
  - B.Sc Computer Science (Level 100 & 200)
  - B.Sc Information Technology (Level 100)
  - B.Sc Mathematics (Level 100)
  - B.Sc Physics (Level 100)
  - B.A English (Level 100)
- **Day switcher** (Mon–Fri)
- **Reminders settings** (UI + local persistence)
- **Settings**: view profile, change programme, reset data
- **Installable** PWA (Add to Home Screen)
- **Offline** support via Service Worker
- **Persistent profile** via localStorage

## How to run

```bash
cd timetable-pwa
python3 -m http.server 8080
```

Open: http://localhost:8080

**Important:** Use localhost or HTTPS. Do not open the file directly.

### Install on phone
1. Open the URL on your phone (use your computer’s LAN IP if needed)
2. Chrome → “Add to Home Screen” / “Install app”
3. Safari → Share → “Add to Home Screen”

## What is still demo / not real yet
- Data is hardcoded sample data (not parsed from Excel drafts)
- Push notifications are UI-only (need backend + VAPID keys for real push)
- No admin upload interface yet
- No real authentication (profile lives in localStorage)

## Next steps toward production
1. Backend API + database (PostgreSQL)
2. Excel/PDF parser for department drafts
3. Real Web Push (Firebase Cloud Messaging or web-push library)
4. Institutional auth / student ID login
5. Versioned timetable updates + change notifications

This demo already shows the complete student experience and is fully installable as a PWA.
