"use client";

import { useState } from 'react';
import { filters } from '@/data';
import cn from 'classnames';

interface NavbarProps {
  onFilterChange?: (filter: string) => void;
}

const Navbar = ({ onFilterChange }: NavbarProps) => {
  const [activeFilter, setActiveFilter] = useState(filters[0]);

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
    if (onFilterChange) {
      onFilterChange(filter);
    }
  };

  return (
    <div className="flex justify-center w-full mb-8">
      <div className="bg-[#1c1c1e]/70 backdrop-blur-sm rounded-full p-1 flex gap-1 shadow-lg">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => handleFilterClick(filter)}
            className={cn(
              'px-6 py-2 rounded-full text-sm font-medium transition-all duration-300',
              {
                'bg-[#2c2c2e] text-white': activeFilter === filter,
                'text-white/70 hover:text-white hover:bg-[#2c2c2e]/50': activeFilter !== filter,
              }
            )}
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Navbar; 