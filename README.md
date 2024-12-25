# AnyTimeChai - Digital Beverage Vending System

## Project Overview
AnyTimeChai is a React-based digital simulation of an Indian beverage vending machine that serves traditional chai and coffee varieties. The project aims to replicate the authentic Indian street-side tea/coffee experience in a digital format.

## Technical Architecture

### Core Components

1. **Menu System**
```javascript
const MENU = {
  filterCoffee: {
    ingredients: { water: 50, coffee: 18, milk: 100 },
    cost: 30,
  },
  masalaChai: {
    ingredients: { water: 100, milk: 150, tea: 10 },
    cost: 20,
  },
  // ... other beverages
};
```

### State Management
The application uses React's useState hook to manage four key states:
- Resources (water, milk, coffee, tea)
- Profit tracking
- User messages
- Coin inputs

### Key Features

1. **Resource Management**
   - Real-time tracking of ingredients
   - Automatic resource deduction upon order
   - Resource insufficiency warnings
   - Initial Resources:
     - Water: 1000ml
     - Milk: 500ml
     - Coffee: 200g
     - Tea: 100g

2. **Payment System**
   - Supports Indian currency (₹)
   - Coin denominations: ₹10, ₹5, ₹2, ₹1
   - Automatic change calculation
   - Transaction validation

3. **Beverage Options**
   - Filter Coffee (₹30): Traditional South Indian style
   - Masala Chai (₹20): Classic Indian spiced tea
   - Madras Coffee (₹35): Strong, milk-rich coffee
   - Instant Coffee (₹25): Quick coffee option

4. **User Interface**
   - Bilingual support (Hindi/English)
   - Real-time resource monitoring
   - Interactive payment system
   - Status messages in dual languages
   - Cultural color scheme (orange theme)

## Core Functions

1. **Resource Verification**
```javascript
const isResourceSufficient = (orderIngredients) => {
  // Checks if enough ingredients are available
  // Returns boolean with appropriate message
};
```

2. **Payment Processing**
```javascript
const processTransaction = (drinkCost) => {
  // Handles payment validation
  // Calculates change
  // Updates profit
};
```

3. **Beverage Preparation**
```javascript
const makeCoffee = (drinkName) => {
  // Verifies resources
  // Processes payment
  // Updates inventory
  // Delivers beverage
};
```

## User Experience Flow

1. **Ordering Process**
   - User selects desired beverage
   - System checks resource availability
   - User inserts coins
   - System validates payment
   - Beverage is prepared
   - Change is returned (if applicable)

2. **Error Handling**
   - Insufficient resources notification
   - Insufficient payment warning
   - Change calculation
   - Resource depletion alerts

## Design Considerations

1. **Cultural Integration**
   - Bilingual interface (Hindi/English)
   - Traditional Indian beverage options
   - Familiar currency system
   - Cultural color schemes

2. **User Interface**
   - Clean, intuitive layout
   - Real-time updates
   - Clear status messages
   - Easy payment input

## Future Enhancement Possibilities

1. **Technical Enhancements**
   - Add UPI payment integration
   - Implement resource refill system
   - Add beverage customization options
   - Include temperature selection

2. **Business Features**
   - Loyalty program integration
   - Peak hour pricing
   - Combo offers
   - Seasonal menu items

3. **User Experience**
   - Add voice commands
   - Multiple language support
   - Accessibility features
   - Mobile responsiveness improvements

## Implementation Notes

1. **Dependencies**
   - React.js
   - Lucide React (for icons)
   - Shadcn/ui components
   - Tailwind CSS

2. **Component Structure**
   - Main CoffeeMachine component
   - ResourceDisplay subcomponent
   - Modular state management
   - Reusable utility functions

3. **Styling**
   - Tailwind CSS for responsive design
   - Custom color scheme
   - Consistent spacing and layout
   - Mobile-first approach

## Running the Project

1. **Prerequisites**
   - Node.js installed
   - React development environment
   - Required dependencies installed

2. **Installation**
```bash
npm install
npm install lucide-react
# Install shadcn/ui components
```

3. **Development**
```bash
npm run dev
```

## Maintenance and Updates

1. **Resource Management**
   - Regular monitoring of resource levels
   - Updating prices as needed
   - Adding new beverage options
   - Maintaining ingredient ratios

2. **System Updates**
   - Regular code maintenance
   - Performance optimization
   - Security updates
   - Feature enhancements

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
