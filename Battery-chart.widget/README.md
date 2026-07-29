# Battery Chart

Description

- Battery chart widget that displays your battery level over time with a smooth SVG chart.
- Battery history file will be stored this widget folder's inside with `appinapp-battery-history.csv` name

## Features

- **Real-time battery level** — Shows current percentage and charging status
- **10-hour history chart** — Smooth cubic Bézier curve tracking battery drain/charge over time
- **Charging detection** — Color-coded chart: green when on battery, blue when charging
- **Gradient fills** — Subtle gradient area under the chart line
- **Time estimates** — Displays "Should last Xh" on battery or "Xh Xm until full" when charging
- **Auto-refresh** — Updates every 60 seconds
- **Persistent history** — Stores readings in a local CSV file, pruned to a 10-hour window


## License

MIT