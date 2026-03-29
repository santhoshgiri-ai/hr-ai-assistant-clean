import React from 'react';

const Sidebar = ({ items, onSelect }) => {
  return (
    <div className="w-64 bg-gray-200 h-full p-4">
      <h2 className="font-bold mb-4">Chats</h2>
      <ul>
        {items.map((item, idx) => (
          <li key={idx} className="p-2 hover:bg-gray-300 rounded cursor-pointer" onClick={() => onSelect(item)}>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;