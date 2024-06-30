
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('userForm');
    const userTable = document.getElementById('userTable').getElementsByTagName('tbody')[0];

    loadUserData();

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const age = parseInt(document.getElementById('age').value);

        if (age >= 18) {
            addUserToTable(firstName, lastName, age);
            saveUserData(firstName, lastName, age);
        } else {
            alert('User must be 18 years or older.');
        }

        form.reset();
    });

    function addUserToTable(firstName, lastName, age) {
        const row = userTable.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);

        cell1.textContent = firstName;
        cell2.textContent = lastName;
        cell3.textContent = age;
    }

    function saveUserData(firstName, lastName, age) {
        const userData = {
            firstName,
            lastName,
            age
        };

        let users = JSON.parse(localStorage.getItem('users')) || [];
        users.push(userData);
        localStorage.setItem('users', JSON.stringify(users));
    }

    function loadUserData() {
        let users = JSON.parse(localStorage.getItem('users')) || [];
        users.forEach(user => {
            addUserToTable(user.firstName, user.lastName, user.age);
        });
    }
});
