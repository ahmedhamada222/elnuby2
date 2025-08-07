# CustomButton Component

A reusable animated button component built with React and styled-components, based on your original template.

## Features

- ✅ Customizable colors (primary, secondary, border, text)
- ✅ Adjustable size (width, height, font size)
- ✅ Smooth hover animations
- ✅ Click handler support
- ✅ Text selection disabled
- ✅ Responsive design

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `text` | string | "Button" | Button text content |
| `primaryColor` | string | "#e8e8e8" | Background color for the animated elements |
| `secondaryColor` | string | "#fff" | Background color on hover |
| `borderColor` | string | "#333" | Border color |
| `textColor` | string | "#000" | Text color |
| `width` | string | "150px" | Button width |
| `height` | string | "50px" | Button height |
| `fontSize` | string | "20px" | Font size |
| `onClick` | function | undefined | Click handler function |
| `className` | string | undefined | Additional CSS classes |

## Usage Examples

### Basic Usage
```jsx
import CustomButton from './components/CustomButton';

<CustomButton 
  text="Click Me"
  onClick={() => console.log('Button clicked!')}
/>
```

### Custom Colors
```jsx
<CustomButton 
  text="Orange Button"
  primaryColor="#EC8823"
  secondaryColor="#fff"
  borderColor="#EC8823"
  textColor="#000"
  onClick={handleClick}
/>
```

### Different Sizes
```jsx
{/* Large Button */}
<CustomButton 
  text="Large Button"
  width="200px"
  height="60px"
  fontSize="24px"
  primaryColor="#8b5cf6"
  secondaryColor="#fff"
  borderColor="#8b5cf6"
  textColor="#000"
/>

{/* Small Button */}
<CustomButton 
  text="Small"
  width="100px"
  height="40px"
  fontSize="16px"
  primaryColor="#f59e0b"
  secondaryColor="#fff"
  borderColor="#f59e0b"
  textColor="#000"
/>
```

### Dark Theme
```jsx
<CustomButton 
  text="Dark Button"
  primaryColor="#374151"
  secondaryColor="#1f2937"
  borderColor="#374151"
  textColor="#fff"
  onClick={handleClick}
/>
```

## Animation Details

The button uses CSS pseudo-elements (`::before` and `::after`) to create the animated effect:

1. **Initial State**: Two colored rectangles overlap to create the button background
2. **Hover State**: The rectangles animate to 0 width/height, revealing the secondary color
3. **Transition**: Smooth 1-second transition for all animations

## Color Schemes

### Default Theme
- Primary: `#e8e8e8` (light gray)
- Secondary: `#fff` (white)
- Border: `#333` (dark gray)
- Text: `#000` (black)

### Orange Theme (Matches your brand)
- Primary: `#EC8823` (orange)
- Secondary: `#fff` (white)
- Border: `#EC8823` (orange)
- Text: `#000` (black)

### Blue Theme
- Primary: `#2563eb` (blue)
- Secondary: `#fff` (white)
- Border: `#2563eb` (blue)
- Text: `#000` (black)

## Installation

Make sure you have `styled-components` installed:

```bash
npm install styled-components
```

## Demo

To see all examples in action, import and use the `ButtonDemo` component:

```jsx
import ButtonDemo from './components/ButtonDemo';

// In your component
<ButtonDemo />
```

Or visit the demo page at `/button-demo` (if you add it to your routing).
