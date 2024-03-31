import React from 'react';

const todoCard = () => {
    return (
        <div className="flex justify-between items-center bg-white rounded-xl p-4">
          <input type="checkbox" />
          <p>title</p>
          <p>time</p>
          <p>description</p>
          <div className="space-x-5">
            <button>del</button>
            <button>add</button>
          </div>
        </div>
    );
};

export default todoCard;