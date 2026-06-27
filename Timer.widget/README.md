# Timer Widget

Description
- A Pomodoro-style timer widget that provides work and break timers with a simple rounded UI.

How it works
- The UI is implemented in `index.jsx`. Default durations and behavior are configurable in the component code.

Customization
- Default durations: open `index.jsx` and adjust the default work/break durations or add settings in the component state.
- Appearance and theme: edit styles or JSX in `index.jsx` to change colors, fonts, or the circular progress visuals.
- Controls and behavior: modify start/stop/reset logic in `index.jsx` to change keyboard shortcuts, auto-start behavior, or notifications.
- Metadata: update `widget.json` to change widget name/description/author.

Testing
- Use the UI to start and stop the timer, or tweak durations to short values for quick testing.

Notes
- If you add persistent settings, consider storing them in localStorage or a small config file so preferences survive restarts.


## License

MIT