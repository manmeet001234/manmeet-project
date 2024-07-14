// Example of a simple script to handle dynamic content and form validation

document.addEventListener('DOMContentLoaded', function() {
    console.log("Car Sales Website Loaded");
    const urlParams = new URLSearchParams(window.location.search);
    const carId = urlParams.get('carId');

    const cars = {
        1: {
            img: 'images/car 1.jpg',
            title: '2024 Toyota Camry',
            price: '$25,000',
            mileage: '10,000 miles',
            color: 'Blue',
            transmission: 'Automatic',
            engine: '2.5L 4-cylinder',
            fuel: 'Gasoline',
            features: [
                'Bluetooth Connectivity',
                'Backup Camera',
                'Heated Seats',
                'Navigation System'
            ]
        },
        2: {
            img: 'images/car 2.jpg',
            title: '2024 Honda Accord',
            price: '$27,000',
            mileage: '8,000 miles',
            color: 'Red',
            transmission: 'Automatic',
            engine: '1.5L 4-cylinder',
            fuel: 'Gasoline',
            features: [
                'Sunroof',
                'Leather Seats',
                'Blind Spot Monitoring',
                'Apple CarPlay'
            ]
        },
        3: {
            img: 'images/car 3.jpg',
            title: '2024 Ford Mustang',
            price: '$30,000',
            mileage: '5,000 miles',
            color: 'Black',
            transmission: 'Manual',
            engine: '5.0L V8',
            fuel: 'Gasoline',
            features: [
                'Performance Package',
                'Premium Audio System',
                'Sport Seats',
                'Rear View Camera'
            ]
        },
        4: {
            img: 'images/car 4.jpg',
            title: '2024 BMW 3 Series',
            price: '$35,000',
            mileage: '4,000 miles',
            color: 'White',
            transmission: 'Automatic',
            engine: '2.0L 4-cylinder',
            fuel: 'Gasoline',
            features: [
                'Heads-Up Display',
                'Adaptive Cruise Control',
                'Harman Kardon Audio',
                'Wireless Charging'
            ]
        },
        5: {
            img: 'images/car 5.jpg',
            title: '2024 Audi A4',
            price: '$38,000',
            mileage: '6,000 miles',
            color: 'Silver',
            transmission: 'Automatic',
            engine: '2.0L 4-cylinder',
            fuel: 'Gasoline',
            features: [
                'Virtual Cockpit',
                'Bang & Olufsen Sound System',
                'Matrix LED Headlights',
                'Parking Assist'
            ]
        }
    };

    if (carId && cars[carId]) {
        const car = cars[carId];
        document.getElementById('car-img').src = car.img;
        document.getElementById('car-title').textContent = car.title;
        document.getElementById('car-price').textContent = car.price;
        document.getElementById('car-mileage').textContent = car.mileage;
        document.getElementById('car-color').textContent = car.color;
        document.getElementById('car-transmission').textContent = car.transmission;
        document.getElementById('car-engine').textContent = car.engine;
        document.getElementById('car-fuel').textContent = car.fuel;
        document.getElementById('car-features').innerHTML = car.features.map(feature => `<li>${feature}</li>`).join('');
        document.getElementById('inquire-button').href = `form.html?car=${carId}`;
    } else {
        document.querySelector('.details').innerHTML = `
            <h1>Car Details</h1>
            <p>The car details could not be found. Please <a href="listings.html">go back to the listings page</a> and select a car to view its details.</p>
        `;
    } 

    // Form validation for contact form
    const contactForm = document.querySelector('.contact-us form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            if (name === '' || email === '' || message === '') {
                alert('All fields are required!');
                event.preventDefault();
            }
        });
    }

    // Form validation for sell your car form
    const sellForm = document.querySelector('.sell-car form');
    if (sellForm) {
        sellForm.addEventListener('submit', function(event) {
            const make = document.getElementById('make').value.trim();
            const model = document.getElementById('model').value.trim();
            const year = document.getElementById('year').value;
            const price = document.getElementById('price').value;
            const description = document.getElementById('description').value.trim();
            const image = document.getElementById('image').value;

            if (make === '' || model === '' || year === '' || price === '' || description === '' || image === '') {
                alert('All fields are required!');
                event.preventDefault();
            }
        });
    }
});
