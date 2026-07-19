# Age Counter Widget

A live age counter that displays your exact age in years with 9 decimal places, updating in real-time.

## Features

- Real-time age display, updating every 100ms
- Precise to 9 decimal places for an accurate representation of your age
- Clean, minimal design with a dark background and monospace font

## Customizing

All visual styling lives in the `className` export inside `index.jsx` as plain CSS.

- **Birth date**: change the `BIRTHDAY` constant near the top of `index.jsx` (format: `DD/MM/YYYY`).
- **Decimal places**: adjust the `DECIMAL_PLACES` constant.
- **Update speed**: change `TICK_MS` to control how often the age refreshes.
- **Size**: adjust `width` and `height` exports.
- **Position on screen**: adjust `x` and `y` exports.
- **Colors**: modify `.int` and `.dec` color values for different text colors.

## Notes

- No shell `command` is used — this widget is pure UI state, so it has no `refreshFrequency`.
- Only `react` is imported, per the widget environment's limited module set.

## License

MIT
