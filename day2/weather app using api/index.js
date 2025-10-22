const apiKey = 'be9c4b48bbf254c6118a7b260ef733c9';

document.getElementById('data').onclick = async () => {
  const city = document.getElementById('city').value.trim();
  if (!city) return;

  const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
  const data = await res.json();

  document.getElementById('result').innerHTML = `
    <h2>${data.name}</h2>
    <p>${data.main.temp}°C</p>
  `;
};
