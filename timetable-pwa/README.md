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

### Install on a phone

PWA installation requires a secure context: use `https://` when the app is hosted online, or use localhost when testing on the same computer.

#### Android (Chrome)

For an installable PWA, open the app through an HTTPS URL. A LAN HTTP address such as `http://192.168.x.x:8080` usually allows browsing but Chrome will say it cannot install the app and offer only a shortcut.

The repository includes a GitHub Pages deployment workflow. To publish it:

1. Push the `main` branch to GitHub.
2. Open the repository on GitHub and go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Open the **Actions** tab and wait for **Deploy PWA to GitHub Pages** to complete.
5. Open the published HTTPS URL from the Pages deployment, usually:

   ```text
   https://tekno27.github.io/mytimetable-pwa-demo--2-/
   ```

6. In Chrome on the phone, tap the menu (`⋮`) and select **Install app** or **Add to Home screen**.
7. Confirm the installation. MyTimetable will appear on the home screen and open in standalone mode.

#### iPhone or iPad (Safari)

1. Start the server and open the app URL on the iPhone or iPad. Use an HTTPS deployment for the best compatibility.
2. In Safari, tap the **Share** button.
3. Tap **Add to Home Screen**.
4. Edit the name if needed, then tap **Add**.

The app may show an install prompt in Chrome, but Safari on iPhone and iPad requires the Add to Home Screen steps above.

## Importing timetable drafts

The Settings page accepts CSV, TXT, XLS/XLSX, DOCX, PDF, JPG, PNG, and WebP files.
Imports are parsed locally in the browser using file-format libraries loaded as needed.
The parser looks for weekdays, time ranges, course codes, titles, lecturers and venues, then
shows a preview before replacing the demo timetable for this device.

## Admin demo flow

Open `/admin` on the deployed site to reach the admin sign-in screen. The student
onboarding and Settings screens do not link to the admin area. Use the demo credentials
`admin` / `admin123`. On Render, add a
rewrite rule with source `/admin`, destination `/index.html`, and action **Rewrite**
so direct visits to `/admin` load the app.

This front-end demo does not provide secure authentication. Admin changes are stored
only in that browser's local storage.

Administrators can select a programme and level, upload a timetable draft, review extracted
entries, and publish the draft. Published schedules are saved in browser local storage and
are loaded for matching student programme/level combinations.

This is a front-end school-project flow only. It does not provide secure authentication,
multi-device synchronization, or server-side authorization.

Scanned PDFs and images use browser OCR and may require a clear, high-resolution source.
Legacy `.doc` files are not supported; save them as `.docx` first.

## What is still demo / not real yet
- Data may need manual review after parsing a draft
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
