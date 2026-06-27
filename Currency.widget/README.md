# Currency Widget

Description
- Displays current currency exchange rate(s). By default this widget shows USD → UZS, fetched by the bundled shell script and displayed in the widget UI.

Permission
- Run `chmod +x ~/{your-widget-path}/Currency.widget/rates.sh` to make bash file it runnable.

How it works
- The widget uses `rates.sh` to fetch exchange data and `index.jsx` to render the UI.

Customization
- Change which currencies are fetched: edit `rates.sh` to modify the currency pairs or the API endpoint used.
- Adjust refresh or scheduling: if a refresh interval is defined in `widget.json` or implemented inside the script, change that value there or inside `rates.sh`.
- Modify appearance and layout: edit `index.jsx` to change text, layout, formatting, or styling.
- Metadata: update `widget.json` to change the widget name, description, or author information.

Notes
- Keep network/API keys (if any) out of version-controlled files — use environment variables or local config if you add private credentials.


## License

MIT