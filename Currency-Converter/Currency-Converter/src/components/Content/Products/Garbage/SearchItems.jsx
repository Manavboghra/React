import React from 'react'

export const SearchItems = () => {
    return (
        <div>
            <input type="text" placeholder="Search..." />
            <button>Search</button>
            <div>
          <select>
            <option value="">Select an item</option>
          </select>
        </div>
    </div>
  )
}
