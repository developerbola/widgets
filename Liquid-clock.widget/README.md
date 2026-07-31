# Clock Widget

A minimal analog clock widget with smooth second hand animation.

Description

- Renders a 170x170 analog clock face using a background image (`bg.png`) with hour, minute, and second hands. The second hand animates smoothly via `requestAnimationFrame`.

How it works

- `index.jsx` calculates hand angles from the current time and renders them as rotated `<div>` elements. A red second hand uses `requestAnimationFrame` for fluid motion.

Customization

- Background: replace `bg.png` with your own clock face image.
- Size: change the `size` constant at the top of `index.jsx`.
- Window position: adjust `y`, `x`, `height`, or `width`.
- Smooth animation: set `smooth = false` to switch to a discrete 1-second tick.
- Hand styles: edit the `HandWithPill` component props (width, height, pillHeight) for different hand shapes.
- Metadata: update `widget.json` to change the widget name, description, or author.

## License

MIT
