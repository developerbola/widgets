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


## Scaling by Height

The widget scales proportionally based on the exported `height` value.

```js
export const height = 60; // Adjust this to resize
```

**How it works:**
- `BASE_HEIGHT = 80` is the reference size
- `scale = height / BASE_HEIGHT` computes the multiplier
- All dimensions (width, font size, stroke, border radius) multiply by `scale`

**Scaling example:**

| `height` | `scale` | `width` | `fontSize` |
|----------|---------|---------|------------|
| 40       | 0.5     | 80      | 12.5       |
| 80       | 1.0     | 160     | 25         |
| 120      | 1.5     | 240     | 37.5       |

To resize the widget, only change the `height` export — everything else scales automatically.

## License

MIT