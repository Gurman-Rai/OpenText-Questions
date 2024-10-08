//Question 1
// Function to display a triangle with height = 3 and base = 4 
function displayTriangle() {
    console.log('*\n**\n****');
}

// Call the function to display the triangle
displayTriangle();

console.log("Bonus to the first part below!");

//bonus to question 1 with handling few edge cases
function displayTriangleWithDimensions(M, N) {
    if (N < M) {
        console.log("Base width should be greater than or equal to the height.");
        return;
    }

    //for the top of the triangle
    let currentWidth = 1;
    const increment = (N - 1) / (M - 1);  // Calculate a more precise increment

    for (let i = 1; i <= M; i++) {
        console.log('*'.repeat(Math.round(currentWidth)));
        currentWidth += increment;  // Increase the width for each row
    }
}

// Example usage
displayTriangleWithDimensions(4, 6);
