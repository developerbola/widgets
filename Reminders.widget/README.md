# Reminders Widget

Displays all incomplete reminders from the macOS Reminders app. Each reminder shows its task name, due date, and notes in a clean scrollable card.

## How it works

- Runs an AppleScript via `osascript` that queries the Reminders app for incomplete reminders across all lists
- Parses the output into structured entries (list name, task, due date, priority, notes)
- Renders them as a flat scrollable list with a loading spinner while the script runs

## Features

- Live data from the macOS Reminders app — no manual entry needed
- Shows due date (formatted compactly, e.g. `14:30, 24 July`)
- Displays notes when present
- Loading spinner and error state for missing Automation permissions
- Smooth scrollbar and hover effects

## Customization

- **Style**: all CSS is in the `className` export inside `index.jsx` — edit colors, fonts, spacing, etc.
- **Size**: adjust `width` / `height` at the bottom of `index.jsx`
- **Refresh interval**: change `refreshFrequency` (default 60000ms / 1 minute)
- **AppleScript**: modify the `REMINDERS_COMMAND` to filter or format differently

## Requirements

- macOS with the Reminders app
- Übersicht must have **Automation** permission for System Events (you'll be prompted on first run)

## Notes

- The widget only shows incomplete reminders. Completed items are excluded in the AppleScript query.
- The script re-queries Reminders every 60 seconds by default.

## License

MIT
