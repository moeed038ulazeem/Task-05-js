document.getElementById('calculate').addEventListener('click', function() {
    const dob = new Date(document.getElementById('dob').value);
    const today = new Date();

    if (!dob) {
        document.getElementById('result').innerText = 'Please enter a valid date.';
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

    document.getElementById('result').innerText = `You are ${years} years, ${months} months, and ${days} days old.`;
});
