// JavaScript code for seat booking, notification, and query submission

// Seat booking system
const seats = document.querySelectorAll('.seat');
let selectedSeat = null;

seats.forEach(seat => {
    seat.addEventListener('click', () => {
        seats.forEach(s => s.classList.remove('selected')); // Clear other selections
        seat.classList.add('selected'); // Select clicked seat
        selectedSeat = seat.getAttribute('data-seat');
    });
});

document.getElementById('book-seat').addEventListener('click', () => {
    if (selectedSeat) {
        document.getElementById('booking-status').textContent = `Seat ${selectedSeat} booked successfully!`;
        selectedSeat = null; // Clear selected seat
        seats.forEach(s => s.classList.remove('selected')); // Clear seat selection
    } else {
        document.getElementById('booking-status').textContent = 'Please select a seat to book!';
    }
});

// Notification for missed bus
document.getElementById('notify-next-bus').addEventListener('click', () => {
    document.getElementById('notification-status').textContent = 'Notification sent to next bus driver. They will pick you up!';
});

// Query submission
document.getElementById('query-form').addEventListener('submit', event => {
    event.preventDefault(); // Prevent page refresh
    const name = document.getElementById('name').value;
    const query = document.getElementById('query').value;

    // Placeholder for sending the query to a server or email
    document.getElementById('query-status').textContent = `Thank you, ${name}. Your query has been submitted!`;

    // Clear the form
    document.getElementById('name').value = '';
    document.getElementById('query').value = '';
});
