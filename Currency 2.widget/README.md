# Currency New Widget

Description
- Displays real-time USD/UZS exchange rates fetched from the Central Bank of Uzbekistan API. Features a clean, minimal UI showing the current rate, daily percentage change, and an interactive 11-day trend chart with hover tooltips. Data is cached for 6 hours to reduce API calls.

Permission
- Run `chmod +x ~/{your-widget-path}/Currency 2.widget/rates.sh` to make the shell script executable.

How it works
- The widget uses `rates.sh` to fetch exchange rate data from the Central Bank of Uzbekistan API, caching results for 6 hours. `index.jsx` renders the UI with a responsive chart component that supports mouse hover for detailed tooltips.

Customization
- Change refresh interval: modify `refreshFrequency` in `index.jsx` (currently set to 24 hours).
- Adjust cache duration: edit the `CACHE_TTL` variable in `rates.sh` (currently 6 hours).
- Modify appearance: edit `index.jsx` to change colors, fonts, layout, or chart styling.
- Change data source: update the API URL in `rates.sh` if you want to fetch different currency pairs.
- Metadata: update `widget.json` to change the widget name, description, or author information.

Notes
- The widget fetches data from the Central Bank of Uzbekistan's public API (no API key required).
- Network access is required for initial data fetching; cached data is used when offline.
- The chart displays the last 11 days of data for trend visualization.

## License

MIT