const cars = [
  {
    imageUrl:
      "https://images.unsplash.com/photo-1547245324-d777c6f05e80?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "Electric crossover SUV",
    model: "Toyota bZ4X 2023",
    price: "£100 | £362",
  },
  // Add more cars as needed
  {
    imageUrl:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=983&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "Gasoline Sedan",
    model: "Honda Accord 2023",
    price: "£80 | £300",
  },
  {
    imageUrl:
      "https://images.unsplash.com/flagged/photo-1553505192-acca7d4509be?q=80&w=1190&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "Gasoline Sedan",
    model: "Honda Accord 2023",
    price: "£80 | £300",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "Gasoline Sedan",
    model: "Honda Accord 2023",
    price: "£80 | £300",
  },
  // Add more cars as needed
];

// Helper function to create car HTML structure
function createCarElement(car) {
  const container = document.createElement("div");
  container.classList.add("box");

  container.innerHTML = `
      <div class="box-img">
        <img src="${car.imageUrl}" width="400" alt="Car Image">
      </div>
      <p>${car.type}</p>
      <h3>${car.model}</h3>
      <h2>${car.price} <span>month</span></h2>
      <a href="#" class="serive-btn">Rent Now</a>
    `;

  return container;
}

// Append each car element to the #carContainer
const carContainer = document.getElementById("carContainer");
cars.forEach((car) => carContainer.appendChild(createCarElement(car)));
