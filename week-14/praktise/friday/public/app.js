const backendUrl = "http://localhost:5000";
const searchEndpoint = backendUrl + "/search";

const queryTableMapping = [
    'license', 'brand', 'model', 'color', 'year'
];

document.getElementById('search-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const tbody = document.querySelector('#search-results tbody');
    tbody.innerHTML = '';
    const form = event.target;
    if (form.checkValidity()) {
        form.classList.remove('was-validated');
        // form.reportValidity();
        const licensePlate = document.getElementById('license-plate').value;
        const selectedRadioElement = document.querySelector('[name=filter]:checked');

        // http://localhost:5000/search?q=HMZ&police=1
        const searchParamValues = {};
        if (licensePlate.length > 0) {
            searchParamValues['q'] = licensePlate;
        }
        if (selectedRadioElement !== null) {
            // selectedRadioElement.value == 'diplomat' || 'police'
            searchParamValues[selectedRadioElement.value] = 1;
        }
        const queryParams = new URLSearchParams(searchParamValues);
        const url = searchEndpoint + '?' + queryParams.toString();
        fetch(url)
            .then((response) => {
                if (response.status === 200) {
                    return response.json();
                } else {
                    throw new Error(response.statusText);
                }
            })
            .then(handleResponse)
            .catch(err => {
                const errorElement = document.getElementById('form-error');
                errorElement.textContent = err.message;
                errorElement.classList.remove('d-none');
            });
    } else {
        form.classList.add('was-validated');
    }

});

function handleResponse(data) {
    const errorElement = document.getElementById('form-error');
    errorElement.classList.add('d-none');
    const tbody = document.querySelector('#search-results tbody');
    tbody.innerHTML = '';
    const queryResults = data.data;
    if (queryResults.length > 0) {
        queryResults.forEach((row) => {
            const rowElement = document.createElement('tr');

            queryTableMapping.forEach((key) => {
                const element = document.createElement('td');
                element.textContent = '';
                if (row[key] !== undefined) {
                    if (key === 'brand') {
                        const brandLink = document.createElement('a');
                        brandLink.textContent = row[key];
                        brandLink.setAttribute('href', '#');
                        brandLink.addEventListener('click', (event) => {
                            // http.../search/Audi
                            const brandUrl = searchEndpoint + '/' + event.target.textContent;
                            fetch(brandUrl).then(response => response.json())
                                .then(handleResponse);
                        });
                        element.appendChild(brandLink);
                    } else {
                        element.textContent = row[key];
                    }
                }
                rowElement.appendChild(element);
            });

            tbody.appendChild(rowElement);
        });
    }
}
