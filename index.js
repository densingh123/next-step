const carouselItems = document.getElementById('carousel-items'); 
const membersItems = document.getElementById('members-items');
let slideIndex = 0; // For the vertical carousel
let memberIndex = 0; // For the members carousel
const itemsCount = carouselItems.children.length;
const membersCount = membersItems.children.length;

// Vertical Carousel Logic
setInterval(() => {
    slideIndex = (slideIndex + 1) % itemsCount; // Cycle through the carousel items
    carouselItems.style.transform = `translateY(-${slideIndex * 200}px)`; // Adjust the height if needed
}, 2000); // Change every 2 seconds

// Members Carousel Logic
setInterval(() => {
    memberIndex = (memberIndex + 1) % membersCount; // Cycle through the member items
    membersItems.style.transform = `translateY(-${memberIndex * 250}px)`; // Adjust the height if needed
}, 1000); 

const trainers = [
    { id: 1, name: "Alice Johnson", image: "assets/r1.png", about: "Frontend developer specializing in React.", time: "Mon-Fri, 8am - 12pm", contact: "+1234567890", category: "Frontend" },
    { id: 2, name: "Bob Smith", image: "assets/r2.jpg", about: "Backend engineer with expertise in Node.js.", time: "Mon-Sat, 10am - 4pm", contact: "+1234567891", category: "Backend" },
    { id: 3, name: "Carla Brown", image: "assets/r3.png", about: "Fullstack developer with experience in MERN stack.", time: "Tue-Sun, 7am - 3pm", contact: "+1234567892", category: "Fullstack" },
    { id: 4, name: "David Lee", image: "assets/r4.png", about: "AI engineer specializing in machine learning.", time: "Mon-Sat, 9am - 5pm", contact: "+1234567893", category: "AI" },
    { id: 5, name: "Eva Martinez", image: "assets/r5.jpg", about: "Frontend expert focusing on Angular.", time: "Wed-Sun, 6am - 2pm", contact: "+1234567894", category: "Frontend" },
    { id: 6, name: "Frank Wilson", image: "assets/r6.png", about: "Data scientist with experience in Python.", time: "Mon-Fri, 6am - 12pm", contact: "+1234567895", category: "AI" },
    { id: 7, name: "Grace Taylor", image: "assets/r7.png", about: "Backend engineer specializing in Python.", time: "Tue-Sun, 8am - 4pm", contact: "+1234567896", category: "Backend" },
    { id: 8, name: "Henry Davis", image: "assets/r8.png", about: "AI researcher focused on NLP and deep learning.", time: "Mon-Sat, 7am - 3pm", contact: "+1234567897", category: "AI" },
    { id: 9, name: "Ivy Lewis", image: "assets/r13.png", about: "Mobile developer with expertise in Flutter.", time: "Wed-Sun, 5am - 1pm", contact: "+1234567898", category: "Mobile" },
    { id: 10, name: "Jack Anderson", image: "assets/r10.png", about: "DevOps specialist with experience in Docker and Kubernetes.", time: "Mon-Sat, 8am - 2pm", contact: "+1234567899", category: "DevOps" },
    { id: 11, name: "Kara Young", image: "assets/r11.png", about: "Cloud architect with expertise in AWS.", time: "Tue-Sun, 9am - 3pm", contact: "+1234567800", category: "Cloud" },
    { id: 12, name: "Liam Scott", image: "assets/r12.png", about: "Data engineer focusing on Big Data and Hadoop.", time: "Mon-Fri, 7am - 1pm", contact: "+1234567801", category: "Data Engineering" },
    { id: 13, name: "Mia Wright", image: "assets/r13.png", about: "Mobile developer specializing in iOS.", time: "Mon-Sat, 10am - 6pm", contact: "+1234567802", category: "Mobile" },
    { id: 14, name: "Noah Green", image: "assets/r14.png", about: "Backend developer with expertise in Java and Spring Boot.", time: "Tue-Sun, 8am - 4pm", contact: "+1234567803", category: "Backend" },
    { id: 15, name: "Olivia Adams", image: "assets/r3.png", about: "Frontend developer focusing on Vue.js.", time: "Mon-Sat, 6am - 12pm", contact: "+1234567804", category: "Frontend" }
];

let displayedTrainers = []; // To keep track of currently displayed trainers
const initialDisplayCount = 3; // Minimum trainers to display
let currentCategory = "All"; // To track the current category

// Function to initialize the display
function initDisplay() {
    displayedTrainers = trainers.slice(0, initialDisplayCount); // Show the first 3 trainers
    displayTrainers(displayedTrainers);
}

// Event listener for category buttons
const buttons = document.querySelectorAll('.buttons button');
buttons.forEach(button => {
    button.addEventListener('click', function () {
        buttons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');

        currentCategory = this.getAttribute('data-category');
        updateDisplay();
    });
});

// Function to update the display based on category
function updateDisplay() {
    let filteredTrainers;

    if (currentCategory === "All") {
        filteredTrainers = trainers;
    } else {
        filteredTrainers = trainers.filter(trainer => trainer.category === currentCategory);
    }

    displayedTrainers = filteredTrainers.slice(0, initialDisplayCount);
    displayTrainers(displayedTrainers);

    // Show or hide "See More" button based on available trainers
    const seeMoreButton = document.getElementById('see-more-button');
    if (filteredTrainers.length > initialDisplayCount) {
        seeMoreButton.style.display = 'block'; // Show button if more trainers exist
    } else {
        seeMoreButton.style.display = 'none'; // Hide button if no more trainers
    }

    // Attach event to "See More" button if it's visible
    seeMoreButton.onclick = function () {
        // Show all trainers for the category
        displayedTrainers = filteredTrainers; 
        displayTrainers(displayedTrainers);
        seeMoreButton.style.display = 'none'; // Hide the "See More" button after clicking
    };
}

// Function to display trainers
function displayTrainers(trainers) {
    const container = document.getElementById('cards-container');
    container.innerHTML = ''; // Clear previous cards

    trainers.forEach(trainer => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${trainer.image}" alt="${trainer.name}">
            <h3>${trainer.name}</h3>
            <p>${trainer.about}</p>
            <p>What You will Learn ->: ${trainer.time}</p>
            <p>Contact: ${trainer.contact}</p>
            <h2 class="available-button">What Will You Learn -></h2> <!-- Available button -->
        `;
        container.appendChild(card);
    });
}

// Initialize the display on page load
initDisplay();
const feedbackSlides = document.getElementById('feedbackSlides');
const feedbacks = document.querySelectorAll('.feedback');
let currentIndex = 0;
const totalFeedbacks = feedbacks.length;
const slideInterval = 10000; // 10 seconds

function moveSlide() {
    currentIndex++;
    
    if (currentIndex >= totalFeedbacks) {
        currentIndex = 0;
    }

    const offset = -currentIndex * 100; // Each slide takes 100% width
    feedbackSlides.style.transform = `translateX(${offset}%)`;
}

setInterval(moveSlide, slideInterval);

// Initial display
moveSlide();

