# REM Waste Management System

A skip selection application built with React, Context API and Vite for efficient waste management services.

## Features

### Core Features

- **Multi-Step Flow Navigation**:

- Postcode entry and validation (placeholder)
- Waste type selection (placeholder)
- Skip size selection with real-time data
- Permit checking (placeholder)
- Date selection (placeholder)
- Payment processing (placeholder)



- **Context API Implementation**:

- Centralized state management for step navigation
- Skip selection state management
- Theme preference persistence



- **API Integration**:

- Real-time skip data from WeWantWaste API
- Efficient data caching with useCallback
- Error handling mechanisms





### Advanced Features

- **Infinite Scrolling**: Efficient data loading with intersection observer (6 items per batch)
- **Theme System**: Light/dark mode toggle with accessibility considerations for elderly users


## Technologies Used

- React + Vite
- WeWantWaste API
- Tailwind CSS
- React Icons


## Installation & Setup

1. Clone the repository
```bash
git clone https://github.com/SahTitus/rem-waste-system.git
```

2. Navigate to project directory
```bash
cd rem-waste-system
```

3. Install dependencies
```bash
npm install
```

4. Start the development server
```bash
npm run dev
```

5. Open `http://localhost:3000` in your browser

## Live Demo

Access the live version: [REM Waste](https://codesandbox.io/p/github/SahTitus/rem-waste-system/main?import=true)

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── steps/           # Step-specific components
├── contexts/           # React Context providers
├── hooks/              # Custom React hooks
├── constants/          # Application constants
├── utils/              # Helper functions
└── styles/             # CSS and styling
```

## Context API Implementation

### Step Management

- Uses Context API for efficient state management across the multi-step flow
- Implements step validation and navigation logic
- Maintains completed steps tracking for backward navigation
- Follows React best practices for context usage


### Theme Management

- Persistent theme preferences with localStorage
- Smooth transitions between light and dark modes
- Accessibility-first approach with light mode as default


## Key Features Breakdown

### Skip Selection System

- **Smart Restrictions**: Visual indicators for heavy waste limitations and road placement
- **Detailed Modal**: Detailed skip information including pricing breakdown, VAT calculations, and service details
- **Selection Logic**: Single-selection with toggle capability and disabled state handling


### Infinite Scrolling Implementation

- **Performance Optimized**: Loads 6 items per batch for optimal performance
- **Intersection Observer**: Custom hook for efficient scroll detection
- **Loading States**: Skeleton screens and smooth loading animations
- **End Detection**: Clear messaging when all items are loaded


### UI/UX Enhancements

- **Background Patterns**: Subtle geometric shapes and grid overlays for visual depth
- **Smooth Animations**: Staggered card reveals with configurable timing
- **Visual Feedback**: Clear selection states and hover effects
- **Error Handling**: Error states with user-friendly messaging


## API Integration

### Data Fetching Strategy

- **Caching**: useCallback implementation for request memoization
- **Error Handling**: Error states with retry mechanisms
- **Loading States**: Progressive loading with skeleton screens


### Skip Data Structure

```javascript
{
  id: 0,
  size: 0,
  hire_period_days: 0,
  transport_cost: null,
  per_tonne_cost: null,
  price_before_vat: 0,
  vat: 0,
  postcode: "",
  area: "",
  forbidden: false,
  allowed_on_road: false,
  allows_heavy_waste: false,
  created_at: '',
  updated_at: ""
}
```
