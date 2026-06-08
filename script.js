// Get all price cells
const prices = document.querySelectorAll('.prices');

let total = 0;

// Calculate total price
prices.forEach(price => {
    total += Number(price.textContent);
});

// Create a new row
const tr = document.createElement('tr');

// Create a single cell
const td = document.createElement('td');
td.textContent = total;

// If required, make the cell span across all columns
td.colSpan = 2;

tr.appendChild(td);

// Append the row to the table
document.querySelector('table').appendChild(tr);
