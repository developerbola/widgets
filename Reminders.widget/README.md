# Reminders Widget

A widget that displays your incomplete reminders from the macOS Reminders app, including due dates, priorities, and notes.

Features

- Live data pulled directly from the macOS Reminders app
- Compact due-date formatting (e.g. `18:00, 24 July`, or just `24 July` for all-day/no-time reminders)
- Shows notes when present
- Loading spinner while data is being fetched
- Graceful error state when Reminders access can't be read (e.g. missing permissions)
- Scrollable list with custom scrollbar styling for overflow

How it works

- `remind.js` is a JavaScript for Automation (JXA) script, run via: osascript -l JavaScript ./remind.js
- It uses the `EventKit` framework (via the ObjC bridge) to request access to Reminders and fetch all incomplete reminders across every calendar/list.

Customization

- **Style**: all CSS lives in the `className` export at the bottom of `index.jsx` — edit colors, fonts, spacing, etc.
- **Size / position**: `width`, `height`, `x`, `y` exports in `index.jsx`
- **Refresh interval**: `refreshFrequency` export in `index.jsx` (default `60000` ms / 1 minute)
- **Fetch/permission timeout**: adjust the `20000` ms timeout values in `remind.js` if access requests or fetches are timing out on your machine

Notes

- Only **incomplete** reminders are shown; completed reminders are filtered out in `remind.js`.
- If `Due`, `Priority`, or `Notes` are missing/empty, the widget cleans them up (e.g. `"missing value"`, `"none"` are treated as empty and hidden).
- If the script can't get access or times out, the widget shows: *"Couldn't read Reminders. Check Automation permissions."*

## License

MIT