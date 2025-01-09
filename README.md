# Personal Portfolio Website

My personal portfolio website built with React and modern web technologies. Features a real-time Spotify integration, dark mode, and responsive design.

## 🌟 Features

- **Real-time Spotify Integration**: Displays currently playing music
- **Dark/Light Mode**: Toggle between themes
- **Responsive Design**: Works on all devices
- **Animated Sections**: Smooth transitions and typing effects
- **Modern UI**: Built with Tailwind CSS and Framer Motion

## 🛠️ Built With

- React
- Tailwind CSS
- Framer Motion
- Spotify Web API
- Vite

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm
- A Spotify account (for music integration)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/stephenye0117/personal-website.git
cd personal-website
```

2. Install dependencies:
```bash
npm install
```

3. Set up Spotify integration:
- Create a Spotify Developer account
- Create a new application in the Spotify Developer Dashboard
- Add your Spotify credentials to the project

4. Start the development server:
```bash
npm run dev
```

5. Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

## 🎵 Spotify Integration Setup

1. Go to [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)
2. Create a new application
3. Get your Client ID and Client Secret
4. Set up authentication with the following scopes:
   - user-read-currently-playing
   - user-read-playback-state

## 📁 Project Structure

```
personal-website/
├── src/
│   ├── components/        # React components
│   ├── hooks/            # Custom hooks
│   ├── utils/            # Utility functions
│   ├── context/          # React context
│   └── data/            # Static data
├── public/              # Static files
└── package.json
```

## 🔨 Available Scripts

- `npm run dev` - Starts development server
- `npm run build` - Builds for production
- `npm run preview` - Preview production build

## 📱 Responsive Design

The website is fully responsive and works on:
- Mobile devices
- Tablets
- Desktops
- Large screens

## 🎨 Customization

You can customize:
- Color schemes
- Animations
- Content
- Layout

## 👤 Author

**Stephen Ye**
- Website: [stephen.dev](https://stephen.dev)
- LinkedIn: [@stephenye210](https://www.linkedin.com/in/stephenye210/)
- GitHub: [@stephenye0117](https://github.com/stephenye0117)

## 📄 License

This project is open source and available for anyone to use and modify.