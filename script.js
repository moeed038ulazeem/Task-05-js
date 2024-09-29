document.getElementById('calculate').addEventListener('click', function() {
    const dob = new Date(document.getElementById('dob').value);
    const today = new Date();

    if (!dob) {
        alert('Please enter a valid date.');
        return;
    }

    let years = today.getFullYear() - dob.getFullYear();
    let months = today.getMonth() - dob.getMonth();
    let days = today.getDate() - dob.getDate();

    if (days < 0) {
        months--;
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate(); // Days in previous month
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    document.getElementById('years').innerText = `Years: ${years}`;
    document.getElementById('months').innerText = `Months: ${months}`;
    document.getElementById('days').innerText = `Days: ${days}`;
});
