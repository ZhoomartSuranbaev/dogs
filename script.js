// Function to fetch random dog image
document.getElementById('fetchImageBtn').addEventListener('click', function() {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => {
            const imgElement = document.getElementById('dogImage');
            imgElement.src = data.message;
            imgElement.alt = 'Random Dog Image';
        })
        .catch(error => {
            console.error('Error fetching the dog image:', error);
        });
});

// Function to fetch list of dog breeds
fetch('https://dog.ceo/api/breeds/list/all')
    .then(response => response.json())
    .then(data => {
        const breedDropdown = document.getElementById('breedDropdown');
        const breeds = Object.keys(data.message);

        breeds.forEach(breed => {
            const option = document.createElement('option');
            option.value = breed;
            option.textContent = breed.charAt(0).toUpperCase() + breed.slice(1); // Capitalizing first letter
            breedDropdown.appendChild(option);
        });
    })
    .catch(error => {
        console.error('Error fetching the breed list:', error);
    });

// Function to fetch random image of a selected breed
document.getElementById('fetchBreedImageBtn').addEventListener('click', function() {
    const selectedBreed = document.getElementById('breedDropdown').value;
    if (selectedBreed) {
        fetch(`https://dog.ceo/api/breed/${selectedBreed}/images/random`)
            .then(response => response.json())
            .then(data => {
                const imgElement = document.getElementById('dogImage');
                imgElement.src = data.message;
                imgElement.alt = `Random ${selectedBreed} Image`;
            })
            .catch(error => {
                console.error('Error fetching the breed image:', error);
            });
    } else {
        alert('Please select a breed first.');
    }
});

// Fetch sub-breeds of "hound"
fetch('https://dog.ceo/api/breed/hound/list')
    .then(response => response.json())
    .then(data => {
        const subBreedDropdown = document.getElementById('houndSubBreedDropdown');
        const subBreeds = data.message;

        subBreeds.forEach(subBreed => {
            const option = document.createElement('option');
            option.value = subBreed;
            option.textContent = subBreed.charAt(0).toUpperCase() + subBreed.slice(1); // Capitalizing first letter
            subBreedDropdown.appendChild(option);
        });

        // Show sub-breed selection if it's available
        document.getElementById('houndSubBreedSelect').style.display = 'block';
    })
    .catch(error => {
        console.error('Error fetching hound sub-breeds:', error);
    });

// Function to fetch a random image of a hound sub-breed
document.getElementById('fetchHoundSubBreedImageBtn').addEventListener('click', function() {
    const selectedSubBreed = document.getElementById('houndSubBreedDropdown').value;
    if (selectedSubBreed) {
        fetch(`https://dog.ceo/api/breed/hound/${selectedSubBreed}/images/random`)
            .then(response => response.json())
            .then(data => {
                const imgElement = document.getElementById('dogImage');
                imgElement.src = data.message;
                imgElement.alt = `Random Hound Sub-Breed Image (${selectedSubBreed})`;
            })
            .catch(error => {
                console.error('Error fetching the hound sub-breed image:', error);
            });
    } else {
        alert('Please select a sub-breed first.');
    }
});
