async function fetchData(country){
    
    const url = `https://covid-193.p.rapidapi.com/statistics?country=${country}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'f26d48ff6cmsh568e8867f197cd4p135f46jsndda5051bda3a',
            'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        const obj = JSON.parse(result);
        const data = obj.response[0];
        
        const activeCases = data["cases"]["active"];
        const newCases = data["cases"]["new"];
        const recoveredCases = data["cases"]["recovered"];
        const totalCases = data["cases"]["total"];
        const totalDeaths = data["deaths"]["total"];
        const totalTests = data["tests"]["total"];

        document.getElementById('active').textContent = `${activeCases}`;
        document.getElementById('new').textContent = `${newCases}`;
        document.getElementById('recovered').textContent = `${recoveredCases}`;
        document.getElementById('total').textContent = `${totalCases}`;
        document.getElementById('deaths').textContent = `${totalDeaths}`;
        document.getElementById('tests').textContent = `${totalTests}`;
        console.log(result);
    } catch (error) {
        console.error(error);
    }

}


document.getElementById('formCovid').addEventListener('submit', function (event) {
    
    // agar form tidak benar benar mengirimkan data ke server dan merefresh halaman
    event.preventDefault(); 
    const countryInput = document.getElementById('country').value;
    fetchData(countryInput);
});