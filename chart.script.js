
function validateForm() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    errorMessage.textContent = ''; // Clear previous errors

    if (username === '') {
        errorMessage.textContent = 'Username is required.';
        return false;
    }

    if (password === '') {
        errorMessage.textContent = 'Password is required.';
        return false;
    }

    // If validation is successful, redirect to the shoe store page
    window.location.href = "store.html"; 
    return true;
}
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.post('/api/checkout', (req, res) => {
    const { amount, paymentMethod } = req.body;

    // Here you would integrate with PayPal or a payment gateway for MasterCard
    // This is just a simulation of payment processing
    if (paymentMethod === 'paypal') {
        // Process PayPal payment
        res.json({ message: 'Payment successful via PayPal!' });
    } else if (paymentMethod === 'mastercard') {
        // Process MasterCard payment
        res.json({ message: 'Payment successful via MasterCard!' });
    } else {
        res.status(400).json({ message: 'Invalid payment method!' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})
document.addEventListener("DOMContentLoaded", function () {
    const paymentMethod = document.getElementById("payment-method");
    const mpesaSection = document.getElementById("mpesa-section");
    const paypalSection = document.getElementById("paypal-section");
    const creditCardSection = document.getElementById("credit-card-section");
    const bankTransferSection = document.getElementById("bank-transfer-section");
    const cryptoSection = document.getElementById("crypto-section");

    paymentMethod.addEventListener("change", function () {
        const selectedMethod = this.value;

        // Hide all payment sections initially
        mpesaSection.style.display = "none";
        paypalSection.style.display = "none";
        creditCardSection.style.display = "none";
        bankTransferSection.style.display = "none";
        cryptoSection.style.display = "none";

        // Display the relevant payment section based on selected method
        if (selectedMethod === "mpesa") {
            mpesaSection.style.display = "block";
        } else if (selectedMethod === "paypal") {
            paypalSection.style.display = "block";
        } else if (selectedMethod === "credit-card") {
            creditCardSection.style.display = "block";
        } else if (selectedMethod === "bank-transfer") {
            bankTransferSection.style.display = "block";
        } else if (selectedMethod === "crypto") {
            cryptoSection.style.display = "block";
        }
    });
});
// script.js

const testimonials = [
    {
        name: "Alice Johnson",
        rating: "⭐⭐⭐⭐⭐",
        feedback: "This service changed my life! Highly recommend it."
    },
    {
        name: "Bob Smith",
        rating: "⭐⭐⭐⭐",
        feedback: "Great experience overall. Will definitely come back."
    },
    {
        name: "Charlie Brown",
        rating: "⭐⭐⭐⭐⭐",
        feedback: "Exceptional quality and customer service!"
    },
    {
        name: "Diana Prince",
        rating: "⭐⭐⭐⭐⭐",
        feedback: "I couldn't be happier with the results!"
    },
    {
        name: "Edward Elric",
        rating: "⭐⭐⭐⭐",
        feedback: "Solid service with good value for money."
    }
];

let currentIndex = 0;

function displayTestimonial(index) {
    const testimonialDiv = document.getElementById('testimonial');
    
    testimonialDiv.innerHTML = `
        <p class="rating">${testimonials[index].rating}</p>
        <h3>${testimonials[index].name}</h3>
        <p>${testimonials[index].feedback}</p>
    `;
}

function nextTestimonial() {
    currentIndex = (currentIndex + 1) % testimonials.length; // Loop back to the first testimonial
    displayTestimonial(currentIndex);
}

// Display the first testimonial on page load
window.onload = () => {
    displayTestimonial(currentIndex);
};
