import React, { useState } from 'react';

const CategoryList = ({ categories, addCategory, deleteCategory }) => {
  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold mb-2">Transaction Categories</h2>
      <ul>
        {categories.map((category) => (
          <li key={category.id} className="flex justify-between items-center py-2">
            <span>{category.name}</span>
            <button
              className="text-red-600 hover:text-red-800"
              onClick={() => deleteCategory(category.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <button className="mt-2 bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 rounded"
        onClick={() => addCategory()}
      >
        Add Category
      </button>
    </div>
  );
};

export default CategoryList;
