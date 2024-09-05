// In this challenge you will build a function 'whereAmI' which renders a country
// only based on GPS coordinates. For that, you will use a second API to geocode
// coordinates. So in this challenge, you’ll use an API on your own for the first time �

// Hàm whereAmI với tham số latitude và longitude
const whereAmI = function(lat, lng) {
    // Gọi API geocode.xyz để lấy vị trí từ tọa độ
    fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
        .then((response) => {
            // Kiểm tra xem API có bị lỗi 403 hay không
            if (!response.ok) throw new Error(`Problem with geocoding (${response.status})`);
            return response.json();
        })
        .then((data) => {
            // In ra thông tin vị trí (thành phố, quốc gia)
            console.log(`You are in ${data.city}, ${data.country}`);

            // Gọi API thông tin quốc gia dựa trên tên quốc gia nhận được
            return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
        })
        .then((response) => {
            if (!response.ok) throw new Error(`Country not found (${response.status})`);
            return response.json();
        })
        .then((data) => {
            // Hiển thị thông tin quốc gia
            const country = data[0];
            console.log(`Country: ${country.name.common}`);
            console.log(`Population: ${country.population}`);
            console.log(`Region: ${country.region}`);
        })
        .catch((err) => {
            // Bắt và hiển thị lỗi
            console.error(`${err.message}`);
        });
};

// Test với các tọa độ:
whereAmI(52.508, 13.381); // Berlin, Germany
whereAmI(19.037, 72.873); // Mumbai, India
whereAmI(-33.933, 18.474); // Cape Town, South Africa