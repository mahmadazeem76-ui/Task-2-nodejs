fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => {

        const filteredUsers = users.filter(user => {
            const catchPhrase = user.company.catchPhrase.toLowerCase();

            return catchPhrase.includes("group") ||
                   catchPhrase.includes("service");
        });

        const formattedUsers = filteredUsers.map(user => {

            const {
                name,
                email,
                address: { city }
            } = user;

            return `User: ${name} | Email: ${email} | City: ${city}`;
        });

        console.log(formattedUsers);
    })
    .catch(error => {
        console.error("Error:", error);
    });
