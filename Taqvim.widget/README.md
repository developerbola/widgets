# Taqvim Widget

Description
- Displays daily prayer (namoz) times for a configured region. The widget fetches data via the bundled `taqvim.sh` script (which calls a public API) and renders times in `index.jsx`.

Permission
- Run `chmod +x ~/{your-widget-path}/Taqvim.widget/taqvim.sh` to make bash file it runnable.

How it works
- `taqvim.sh` performs an HTTP request to fetch today's prayer times for a configured region; `index.jsx` formats and displays the results in the widget.

Customization
- Change region or language: edit `taqvim.sh` and update the API query parameters (for example, the `region` and `lang` values) to target a different city or language.
- Layout and labels: edit `index.jsx` to change ordering, labels, fonts, or time formatting.
- Metadata: update `widget.json` to change the widget name, description, or author.

Notes
- If you change the API endpoint or response parsing, ensure `index.jsx` matches the response structure.


## License

MIT