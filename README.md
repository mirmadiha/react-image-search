# React Image Search

A responsive image search application built with React that allows users to search and browse high-quality images from Unsplash.

## Features

- **Real-time Image Search**: Search through high-quality images
- **Clean UI**: Simple and intuitive user interface
- **Fast Performance**: Optimized React components with proper state management

## Demo

Search for any term and browse through beautiful images fetched from the Unsplash API.

## Technologies Used

- **React** - Frontend framework
- **Axios** - HTTP client for API requests
- **Unsplash API** - Image source
- **CSS3** - Styling and responsive design
- **JavaScript ES6+** - Modern JavaScript features

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm package manager

### Installation

1. Clone the repository
```bash
git clone https://github.com/mirmadiha/react-image-search.git
cd react-image-search
```

2. Install dependencies
```bash
npm install
```

3. Set up your Unsplash API key
   - Visit [Unsplash Developers](https://unsplash.com/developers)
   - Create an account and get your API key
   - Replace the API key in `api.js` with your own

4. Start the development server
```bash
npm start
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
src/
├── components/
│   ├── SearchBar.js      # Search input component
│   ├── SearchBar.css     # Search bar styling
│   ├── ImageList.js      # Image grid container
│   ├── ImageList.css     # Grid layout styling
│   └── ImageShow.js      # Individual image component
├── api.js                # Unsplash API integration
├── App.js                # Main application component
└── index.js              # React app entry point
```

## Key Concepts Learned

- **React Hooks**: useState for state management
- **Component Composition**: Breaking down UI into reusable components
- **Props**: Passing data between parent and child components
- **Input Handling**: Controlled components and form submission
- **API Integration**: Making HTTP requests with Axios
- **Event Handling**: Managing user interactions
- **CSS Grid**: Creating responsive layouts

## API Reference

This project uses the [Unsplash API](https://unsplash.com/developers) to fetch images. The API endpoint used:

```
GET https://api.unsplash.com/search/photos?query={searchTerm}
```
## Acknowledgments

- [Unsplash](https://unsplash.com) for providing the beautiful images
- [React](https://reactjs.org) for the amazing framework
- The open-source community for inspiration and resources

