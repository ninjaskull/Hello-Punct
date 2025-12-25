document.addEventListener('DOMContentLoaded', () => {
    const bookingForm = document.getElementById('bookingForm');
    const successMessage = document.getElementById('successMessage');
    const getLocationBtn = document.getElementById('getLocationBtn');
    const locationInput = document.getElementById('locationInput');

    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Hide form and show success
            bookingForm.style.display = 'none';
            successMessage.style.display = 'block';

            // Reset form after 3 seconds and redirect (mock)
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 3000);
        });
    }

    if (getLocationBtn) {
        getLocationBtn.addEventListener('click', () => {
            if (navigator.geolocation) {
                getLocationBtn.innerHTML = '<i data-lucide="loader" class="animate-spin"></i>';
                lucide.createIcons();

                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        const { latitude, longitude } = position.coords;
                        locationInput.value = `${latitude.toFixed(6)}, ${longitude.toFixed(6)}`;
                        getLocationBtn.innerHTML = '<i data-lucide="check"></i>';
                        lucide.createIcons();
                        
                        // Mock reverse geocoding
                        fetch(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`)
                            .then(res => res.json())
                            .then(data => {
                                if (data.display_name) {
                                    locationInput.value = data.display_name.split(',').slice(0, 2).join(',');
                                }
                            })
                            .catch(err => console.log('Geocoding error:', err));
                    },
                    (error) => {
                        alert('Unable to retrieve your location');
                        getLocationBtn.innerHTML = '<i data-lucide="navigation"></i>';
                        lucide.createIcons();
                    }
                );
            } else {
                alert('Geolocation is not supported by your browser');
            }
        });
    }
});