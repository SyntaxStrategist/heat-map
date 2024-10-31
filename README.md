# Monthly Global Land-Surface Temperature Heat Map

This is a data visualization project that displays a heat map of monthly global land-surface temperatures over time. Built with HTML, CSS, JavaScript, and D3.js.

## Project Overview

This heat map visualizes global land-surface temperatures from 1753 to 2015, highlighting monthly temperature variations over the years. The project includes interactive tooltips and a legend to help users interpret temperature variances effectively.

### Features
- Interactive heat map with color-coded cells representing temperature variances.
- Hoverable tooltips displaying detailed information for each cell, including year, month, temperature, and variance.
- A color-coded legend for easy interpretation of temperature ranges.

## Technologies Used
- **HTML5** - Structure of the page.
- **CSS3** - Styling and layout.
- **JavaScript** - Interactivity.
- **D3.js** - Data visualization.

## User Stories
This project fulfills the following user stories from freeCodeCamp’s curriculum:
1. The heat map includes a title with `id="title"`.
2. The heat map includes a description with `id="description"`.
3. An x-axis with `id="x-axis"` shows the years.
4. A y-axis with `id="y-axis"` shows the months.
5. The heat map contains cells with `class="cell"` to represent the data.
6. There are at least 4 different fill colors used for the cells.
7. Each cell has properties `data-month`, `data-year`, and `data-temp`.
8. Cells align with the corresponding month on the y-axis and year on the x-axis.
9. The heat map includes a legend with `id="legend"`.
10. Tooltips with `id="tooltip"` display information on hover.

## Getting Started

### Prerequisites
To run this project locally, you’ll need a web server for optimal functionality. You can use **Live Server** in Visual Studio Code or a simple server with Node.js.

### Running the Project
1. **Clone this repository**:
   ```bash
   git clone https://github.com/SyntaxStrategist/heat-map.git
   cd heat-map
