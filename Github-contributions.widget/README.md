# GitHub Widget

A GitHub contribution heatmap widget for Appinapp.

Description
- Fetches your GitHub contribution calendar via the GraphQL API and renders it as a color-coded grid, similar to the profile contribution graph.

How it works
- `index.jsx` queries the GitHub GraphQL API for the current year's contribution data, normalizes the weeks, and renders a CSS grid of colored cells. Each cell's color intensity corresponds to the number of commits that day.

Customization
- Username: change the `githubUsername` constant at the top of `index.jsx`.
- Token: set a personal access token in `githubToken` for private profile data.
- Grid size: adjust `width` and `height`, or change the `columns` calculation.
- Colors: edit the `getColor` function to customize the commit-count-to-color mapping.
- Refresh interval: change `refreshFrequency` (default: 1 hour).
- Metadata: update `widget.json` to change the widget name, description, or author.

## License

MIT
