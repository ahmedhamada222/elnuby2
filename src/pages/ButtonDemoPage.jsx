import React from 'react';
import ButtonDemo from '../components/ButtonDemo';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ButtonDemoPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto py-8">
        <div className="bg-white rounded-lg shadow-lg">
          <ButtonDemo />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ButtonDemoPage;
