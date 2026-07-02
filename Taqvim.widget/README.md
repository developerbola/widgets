# Taqvim Widget

**Description**
- Displays daily prayer (namoz) times for Tashkent in Uzbek (Latin). Fetches live data from `namoz-vaqti.uz` via a built-in `curl` command every minute.

**Features**
- Shows all six prayer times: Bomdod, Quyosh, Peshin, Asr, Shom, Xufton
- Highlights the current/next prayer time with a green badge
- Loading skeleton animation while data is being fetched
- Region name and formatted date in the top row

**How it works**
- `index.jsx` exports a `command` that runs `curl` to fetch today's prayer times from the API
- The response JSON is parsed and rendered with time labels and active state detection

**Customization**
- Change region: edit the `region=toshkent` parameter in the `command` export
- Change language: edit the `lang=lotin` parameter (e.g., use `kirill` for Cyrillic)
- Change refresh interval: update `refreshFrequency` (default: 60000ms / 1 minute)
- Layout and labels: edit `index.jsx` to change ordering, labels, fonts, or time formatting
- Metadata: update `widget.json` to change the widget name, description, or author

## License

MIT