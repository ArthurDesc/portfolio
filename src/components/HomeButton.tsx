import React from 'react';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

export const HomeButton: React.FC = () => {
  return (
    <Link to="/" className="fixed top-4 left-4 z-50">
      <Button 
        variant="ghost" 
        className="bg-black hover:bg-gray-800 text-white rounded-full p-2 shadow-lg home-button"
      >
        <Home className="h-6 w-6" />
      </Button>
    </Link>
  );
};
