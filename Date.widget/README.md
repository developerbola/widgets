# Date Widget

Description
- Displays the current day of the week in a large, centered title using the custom Anurati font. The text refreshes once per day.

How it works
- `index.jsx` renders the day name using `toLocaleDateString` and applies the Anurati font via an embedded base64 `@font-face` declaration.

Customization
- Font: replace `font.otf` with your own font file and update the base64 data URI in `index.jsx` (or use the file path directly).
- Text size and spacing: edit `fontSize` and `letterSpacing` in the `dayText` style object.
- Position on screen: adjust `windowTop`, `windowLeft`, `windowWidth`, or `windowHeight` at the top of `index.jsx`.
- Refresh interval: change `refreshFrequency` to update more or less often than once per day.
- Metadata: update `widget.json` to change the widget name, description, or author.

Notes
- The Anurati font is embedded as base64 in the CSS to avoid file-path resolution issues inside the Übersicht webview.
- To use a different font, convert it to base64 (`base64 -i font.otf`) and replace the data URI in the `@font-face` `src`.


## License

MIT