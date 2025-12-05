# ARC Raiders Cheatsheet

A quick reference web app for ARC Raiders players to instantly know which items to sell, recycle, or keep. Stop wasting valuable loot - make smart inventory decisions.

🔗 **Live Site**: [arc-cheatsheet](https://x1mrdonut1x.github.io/arc-cheatsheet)

## Features

- 🔍 **Item Search** - Quickly search for any item in the game
- 📊 **Smart Sorting** - Sort items by name, price, rarity, or category
- ♻️ **Recycle Info** - See what materials you get from recycling items
- 🛠️ **Crafting Data** - Know which items are used in crafting recipes
- 📋 **Quest Tracking** - Track quest completion by trader
- 🏗️ **Workshop Upgrades** - View workshop upgrade requirements
- 🎯 **Project Completion** - Track project progress

## Tech Stack

- **Framework**: React 19 with TypeScript
- **Routing**: TanStack Router
- **Data Fetching**: TanStack Query
- **Styling**: SCSS Modules
- **Build Tool**: Vite
- **Package Manager**: pnpm

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/x1mrdonut1x/arc-cheatsheet.git
cd arc-cheatsheet

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

The app will be available at `http://localhost:3000`

### Available Scripts

| Command       | Description                           |
| ------------- | ------------------------------------- |
| `pnpm dev`    | Start development server on port 3000 |
| `pnpm build`  | Build for production                  |
| `pnpm serve`  | Preview production build              |
| `pnpm test`   | Run tests                             |
| `pnpm lint`   | Run ESLint                            |
| `pnpm format` | Format all files with Prettier        |
| `pnpm ci`     | Check formatting and lint             |

## Project Structure

```
src/
├── components/     # Reusable UI components
├── data/           # Static data (items, quests, traders, etc.)
├── hooks/          # Custom React hooks
├── lib/            # Utilities and configurations
├── routes/         # TanStack Router file-based routes
├── styles/         # Global styles and mixins
```

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## License

MIT
