const unsplashAccessKey = "JxhTyVeQ_PCcYiolbN9CnDHwYZnTDv1M-pFc8GvkxBM"; // Replace with your Unsplash Access Key
const api_key = "OsUGNOpvFnJ8ZB3I3tY57A==Rhqy2uKdm0hss8iX";
const api_url = "https://api.api-ninjas.com/v1/cars";

// Define the parameters for the API request
const params = {
  make: "Audi", // Replace with the desired make (manufacturer)
  year: 2023, // Replace with the desired year
  limit: 8,
  //   fuel_type: "electricity",
  fuel_type: "Gas",
  // You can adjust the limit as needed
};

const options = {
  method: "GET",
  headers: {
    "X-API-Key": api_key,
  },
};

async function getCarData() {
  try {
    // Convert the params object into a query string
    const queryString = Object.keys(params)
      .map(
        (key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`
      )
      .join("&");

    // Append the query string to the API URL
    const apiUrlWithParams = `${api_url}?${queryString}`;

    const response = await fetch(apiUrlWithParams, options);
    const data = await response.json();

    // Assuming the API response has an array of cars
    const apiCars = data;

    console.log(apiCars);

    // Update the carContainer with the new API data
    updateCarContainer(apiCars);

    console.log("Success");
  } catch (e) {
    console.log("Something went wrong");
  }
}

// Helper function to update the carContainer with new data
async function updateCarContainer(apiCars) {
  const carContainer = document.getElementById("carContainer");
  carContainer.innerHTML = ""; // Clear existing content

  for (const car of apiCars) {
    const imageUrl = await fetchUnsplashImage(car.make);
    const carElement = createCarElement({ ...car, imageUrl });
    carContainer.appendChild(carElement);
  }
}

// Helper function to fetch an image from Unsplash based on make
async function fetchUnsplashImage(make) {
  const unsplashUrl = `https://api.unsplash.com/photos/random?query=${make}&client_id=${unsplashAccessKey}`;

  try {
    const response = await fetch(unsplashUrl);

    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();

    return data.urls?.regular || "https://via.placeholder.com/400";
  } catch (error) {
    console.error("Error fetching image from Unsplash:", error);
    return "https://via.placeholder.com/400";
  }
}

// Helper function to create car HTML structure
function createCarElement(car) {
  const container = document.createElement("div");
  container.classList.add("box");

  container.innerHTML = `
    <div class="box-img">
      <img src="${car.imageUrl}" width="400" alt="Car Image">
    </div>
    <p>${car.fuel_type}</p>
    <h3>${car.make} ${car.model} ${car.year}</h3>
    <h2>${car.class}</h2>
    <h2>${car.highway_mpg} MPG (Highway)</h2>
    <a href="#" class="serive-btn">Rent Now</a>
  `;

  return container;
}

// Call the getCarData function to fetch data from the API
getCarData();
