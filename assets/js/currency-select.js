let currencyDetails = {};

// Fetch country and currency data from JSON file
fetch('./assets/js/country.json')
    .then(response => response.json())
    .then(data => {
        currencyDetails = data.reduce((acc, country) => {
            acc[country.id] = country;
            return acc;
        }, {});

        // Initialize the dropdown for each selector
        initializeCountrySelector('country-selector-1', data);
        initializeCountrySelector('country-selector-2', data);
    })
    .catch(error => console.error('Error fetching country data:', error));

function initializeCountrySelector(selectorId, data) {
    const countrySelector = document.getElementById(selectorId);

    // Populate dropdown options
    data.forEach(country => {
        const option = document.createElement('option');
        option.value = country.id;
        option.innerHTML = `${country.isoAlpha3} | ${country.currency.code}`;
        countrySelector.appendChild(option);
    });

    // Initialize Select2
    $(`#${selectorId}`).niceSelect('destroy');
    $(`#${selectorId}`).select2({
        templateResult: formatState,
        templateSelection: formatState,
        dropdownCssClass: 'custom-select2-dropdown', // Custom class for dropdown
        dropdownParent: $(`#${selectorId}`).parent() // Ensure dropdown appends correctly
    });

    // Initialize with default currency
    updateCurrencyDetails(selectorId);

    // Set Select2 width based on screen size
    setSelect2Width(selectorId);

    // Event listener for dropdown change
    $(`#${selectorId}`).on('change', function () {
        updateCurrencyDetails(selectorId);
    });

    // Add Bootstrap chevron icons to Select2 dropdown toggle
    $(`#${selectorId}`).next('.select2-container').find('.select2-selection__arrow').append('<i class="bi bi-chevron-down"></i>');

    // Add event listener for screen size changes
    window.addEventListener('resize', () => setSelect2Width(selectorId));
    window.addEventListener('load', () => setSelect2Width(selectorId));
}

function formatState(state) {
    if (!state.id) {
        return state.text;
    }

    const base64Flag = currencyDetails[state.id].flag;
    const $state = $(
        `<span class="flag-option"><img src="data:image/png;base64,${base64Flag}" class="flag" /> ${state.text}</span>`
    );
    return $state;
}

function updateCurrencyDetails(selectorId) {
    const countrySelector = document.getElementById(selectorId);
    const selectedCountryId = countrySelector.value;
    const details = currencyDetails[selectedCountryId];

    // Here you can add more logic to update other parts of the website as needed
}

function setSelect2Width(selectorId) {
    const mq = window.matchMedia("(max-width: 576px)");
    const select2Element = $(`#${selectorId}`).data('select2').$container;

    if (mq.matches) {
        select2Element.css('width', '130px');
    } else {
        select2Element.css('width', '145px');
    }
}
