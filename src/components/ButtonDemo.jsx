import React from 'react';
import CustomButton from './CustomButton';

const ButtonDemo = () => {
  const handleClick = (buttonName) => {
    console.log(`${buttonName} clicked!`);
  };

  return (
    <div className="p-8 space-y-6">
      <h2 className="text-2xl font-bold mb-6">Custom Button Examples</h2>
      
      {/* Default Button */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Default Button</h3>
        <CustomButton 
          text="Default Button"
          onClick={() => handleClick('Default')}
        />
      </div>

      {/* Orange Theme Button */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Orange Theme</h3>
        <CustomButton 
          text="Orange Button"
          primaryColor="#EC8823"
          secondaryColor="#fff"
          borderColor="#EC8823"
          textColor="#000"
          onClick={() => handleClick('Orange')}
        />
      </div>

      {/* Blue Theme Button */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Blue Theme</h3>
        <CustomButton 
          text="Blue Button"
          primaryColor="#2563eb"
          secondaryColor="#fff"
          borderColor="#2563eb"
          textColor="#000"
          onClick={() => handleClick('Blue')}
        />
      </div>

      {/* Green Theme Button */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Green Theme</h3>
        <CustomButton 
          text="Green Button"
          primaryColor="#10b981"
          secondaryColor="#fff"
          borderColor="#10b981"
          textColor="#000"
          onClick={() => handleClick('Green')}
        />
      </div>

      {/* Large Button */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Large Button</h3>
        <CustomButton 
          text="Large Button"
          width="200px"
          height="60px"
          fontSize="24px"
          primaryColor="#8b5cf6"
          secondaryColor="#fff"
          borderColor="#8b5cf6"
          textColor="#000"
          onClick={() => handleClick('Large')}
        />
      </div>

      {/* Small Button */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Small Button</h3>
        <CustomButton 
          text="Small"
          width="100px"
          height="40px"
          fontSize="16px"
          primaryColor="#f59e0b"
          secondaryColor="#fff"
          borderColor="#f59e0b"
          textColor="#000"
          onClick={() => handleClick('Small')}
        />
      </div>

      {/* Dark Theme Button */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Dark Theme</h3>
        <CustomButton 
          text="Dark Button"
          primaryColor="#374151"
          secondaryColor="#1f2937"
          borderColor="#374151"
          textColor="#fff"
          onClick={() => handleClick('Dark')}
        />
      </div>
    </div>
  );
};

export default ButtonDemo;
