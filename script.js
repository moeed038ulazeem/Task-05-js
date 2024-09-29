document.getElementById('calculate').addEventListener('click', function() {
    var dob = new Date(document.getElementById('dob').value);
    var today = new Date();

    if (!dob) {
        alert('Please enter a valid date.');
        return;
    }

    var years = today.getFullYear() - dob.getFullYear();
    var months = today.getMonth() - dob.getMonth();
    var days = today.getDate() - dob.getDate();

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
