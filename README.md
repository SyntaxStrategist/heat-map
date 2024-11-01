# Monthly Global Land-Surface Temperature Heat Map

This is a data visualization project that displays a heat map of monthly global land-surface temperatures over time, built with HTML, CSS, JavaScript, and D3.js.

## Project Overview

This heat map visualizes global land-surface temperatures from 1753 to 2015, highlighting monthly temperature variations across the years. The project features interactive tooltips and a legend to assist users in interpreting temperature differences effectively.

### Features

- **Interactive Heat Map**: Color-coded cells represent temperature variances throughout the months.
- **Hoverable Tooltips**: Display detailed information for each cell, including the year, month, temperature, and variance.
- **Color-Coded Legend**: Provides an easy reference for interpreting temperature ranges.

## Technologies Used

- **HTML5**: Structure of the page.
- **CSS3**: Styling and layout.
- **JavaScript**: Interactivity.
- **D3.js**: Data visualization.

## User Stories

This project fulfills the following user stories from freeCodeCamp’s curriculum:
1. The heat map includes a title with `id="title"`.
2. The heat map includes a description with `id="description"`.
3. An x-axis with `id="x-axis"` displays the years.
4. A y-axis with `id="y-axis"` displays the months.
5. The heat map contains cells with `class="cell"` to represent the data.
6. At least four different fill colors are used for the cells.
7. Each cell has properties `data-month`, `data-year`, and `data-temp`.
8. Cells align correctly with the corresponding month on the y-axis and year on the x-axis.
9. The heat map includes a legend with `id="legend"`.
10. Tooltips with `id="tooltip"` display relevant information on hover.

## Getting Started

### Prerequisites

To run this project locally, you’ll need a web server for optimal functionality. You can use **Live Server** in Visual Studio Code or set up a simple server using Node.js.

### Running the Project

1. **Clone this repository**:
   ```bash
   git clone https://github.com/SyntaxStrategist/heat-map.git
   cd heat-map
   ```

2. **Open the project in your preferred code editor**.

3. **Start the server**:
   - If using Live Server in VSCode, right-click on `index.html` and select "Open with Live Server".
   - If using Node.js, ensure you have a server set up to serve static files.

4. **Open your browser** and navigate to the appropriate local address (e.g., `http://localhost:5500` for Live Server) to view the heat map.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Special thanks to the D3.js community for their extensive resources and documentation that made this project possible.
- Thanks to freeCodeCamp for providing the project framework and enhancing my skills in data visualization.
