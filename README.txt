VITA — Daily Healthspan | PWA v1.5.1
====================================
This is the original v1.5 application packaged as an installable Progressive Web App. No sign-in or server-side health database is needed. The Research Library import feature is planned, not included.

DEPLOY
1. Extract this ZIP. Upload index.html, manifest.webmanifest, sw.js and the entire icons folder to the same directory on a static HTTPS web host you control. Keep the filenames and relative paths intact. No build command is required. A dedicated origin or subdirectory is recommended; use a stable URL for your long-term records. Public static hosting exposes the app content, not your browser-local logs.
2. Open the HTTPS URL in Chrome on Android. Open Progress and confirm the offline core is ready. Use the Chrome menu > Install app / Add to Home screen (wording varies). The in-app install button appears only when the browser offers it.
3. Launch from your home screen. After initial online setup, switch on airplane mode and verify Today, Schedule, Handbook and Progress work. Videos and external research links require the internet.
4. For computer testing, in the extracted folder run: python -m http.server 8000 (or python3). Visit http://localhost:8000. This localhost exception is for testing on the same device; a regular HTTP LAN address is not sufficient for PWA installation.

DATA AND UPDATES
Your original standalone HTML's local storage will not automatically migrate to the hosted origin. Export its CSV from Progress if you have historical records and retain that copy; CSV is an archive, not a restore input. The PWA supports a new complete JSON backup/restore in Progress for its own workout, theme and watched-video records. Clearing browser/site data, changing URL/origin or uninstalling may remove or disconnect records. Keep private backups. The cache excludes YouTube and other external resources. For future releases deploy the same URL and increment the cache version. Close/reopen all app windows to activate an available service-worker update. No native reminders, background timer guarantee or Android health integration in this release.

The application source remains yours to retain and deploy independently. Hosting and actual Android installation are not included in this ZIP.
