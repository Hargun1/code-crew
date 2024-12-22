document.getElementById("payment-form").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent form submission to simulate payment process

    // Grab the input values
    const cardholderName = document.getElementById("cardholder-name").value;
    const cardNumber = document.getElementById("card-number").value;
    const expirationDate = document.getElementById("expiration-date").value;
    const cvv = document.getElementById("cvv").value;

    // Basic form validation
    if (cardholderName && cardNumber && expirationDate && cvv) {
        // Simulate payment processing and show result
        document.getElementById("payment-result").style.display = "block";
    } else {
        alert("Please fill all the fields correctly!");
    }
});
