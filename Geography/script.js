let firstTry = true;


const regions =
{
  Africa: ['Nigeria', 'Egypt', 'South Africa', 'Kenya'],
  Asia: ['China', 'India', 'Japan', 'South Korea'],
  Europa: ['Germany', 'France', 'Italy', 'Spain'],
  'America del Sur': ['Brazil', 'Argentina', 'Colombia', 'Chile'],
  'America del Norte': ['United States', 'Canada', 'Mexico', 'Cuba'],
  Oceania: ['Australia', 'New Zealand', 'Fiji', 'Papua New Guinea']
};

const curiosities =
{
  "Nigeria": "El Nollywood – La industria cinematográfica de Nigeria es una de las más grandes del mundo, después de Hollywood y Bollywood.",
  "Egypt": "Las Pirámides – Monumentos antiguos que construyeron los faraones hace miles de años, y son una de las Siete Maravillas del Mundo.",
  "South Africa": "El Parque Nacional Kruger – Un lugar famoso para hacer safaris y ver animales salvajes como leones, elefantes y jirafas.",
  "Kenya": "Safari – Kenia es uno de los mejores lugares del mundo para hacer safaris y ver animales como leones y elefantes.",

  "China": "El panda gigante – Un animal tierno y símbolo nacional de China, que vive en los bosques de bambú.",
  "India": "El Taj Mahal – Un enorme palacio de mármol blanco construido en honor a una reina.",
  "Japan": "Origami – El arte de doblar papel para crear figuras como animales y flores.",
  "South Korea": "K-pop – Un estilo de música pop coreana que es muy famoso en todo el mundo.",

  "Germany": "Pretzels – Un tipo de pan salado en forma de nudo muy famoso y delicioso.",
  "France": "La Torre Eiffel – Uno de los monumentos más conocidos del mundo, ubicado en París.",
  "Italy": "La pizza – Un plato famoso que se originó en Italia, especialmente en Nápoles.",
  "Spain": "La paella – Un plato tradicional de arroz con mariscos o carne, muy famoso en la región de Valencia.",

  "Brazil": "El Carnaval – Una de las fiestas más grandes del mundo, con desfiles, música y disfraces coloridos.",
  "Argentina": "El mate – Una bebida tradicional que se toma en grupo y se comparte, muy importante en la cultura argentina.",
  "Colombia": "El café – Colombia es uno de los países más conocidos por producir café de alta calidad.",
  "Chile": "Los moáis de Isla de Pascua – Estatuas gigantes que fueron construidas por los antiguos habitantes de la isla.",

  "United States": "El Super Bowl – El evento deportivo más importante del año, donde juegan los equipos de fútbol americano.",
  "Canada": "Jarabe de arce – Un dulce que se saca de los árboles y se usa en panqueques y waffles.",
  "Mexico": "El Día de los Muertos – Una celebración colorida donde las familias recuerdan a sus seres queridos fallecidos.",
  "Cuba": "Los autos clásicos – En Cuba es común ver coches antiguos de los años 50 que se mantienen en buen estado.",

  "Australia": "Canguros – Estos animales que saltan y llevan a sus crías en una bolsa son un símbolo de Australia.",
  "New Zealand": "Los kiwis – Un pájaro que no vuela, símbolo de Nueva Zelanda, y también se les llama así a las personas que viven allí.",
  "Fiji": "Meke – Un baile tradicional de Fiyi, lleno de energía, que suele contar historias a través de movimientos.",
  "Papua New Guinea": "Diversidad cultural – Tiene más de 800 lenguas diferentes y muchas tribus con culturas muy distintas."
};

const country_flags =
{
  "Nigeria": "https://upload.wikimedia.org/wikipedia/commons/7/79/Flag_of_Nigeria.svg",
  "Egypt": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Egypt.svg/2560px-Flag_of_Egypt.svg.png",
  "South Africa": "https://cdn.britannica.com/27/4227-050-00DBD10A/Flag-South-Africa.jpg",
  "Kenya": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Kenya.svg/1200px-Flag_of_Kenya.svg.png",

  "China": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/800px-Flag_of_the_People%27s_Republic_of_China.svg.png",
  "India": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png",
  "Japan": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/1200px-Flag_of_Japan.svg.png",
  "South Korea": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/800px-Flag_of_South_Korea.svg.png",

  "Germany": "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/800px-Flag_of_Germany.svg.png",
  "France": "https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/255px-Flag_of_France.svg.png",
  "Italy": "https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Flag_of_Italy.svg/1200px-Flag_of_Italy.svg.png",
  "Spain": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Bandera_de_Espa%C3%B1a.svg/1200px-Bandera_de_Espa%C3%B1a.svg.png",

  "Brazil": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/1280px-Flag_of_Brazil.svg.png",
  "Argentina": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/800px-Flag_of_Argentina.svg.png",
  "Colombia": "https://cdn.britannica.com/68/7668-050-9304EBB7/Flag-Colombia.jpg",
  "Chile": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Flag_of_Chile.svg/2560px-Flag_of_Chile.svg.png",

  "United States": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg/640px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg.png",
  "Canada": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/1200px-Flag_of_Canada_%28Pantone%29.svg.png",
  "Mexico": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/1280px-Flag_of_Mexico.svg.png",
  "Cuba": "https://cdn.britannica.com/10/5110-004-38075E57/Flag-Cuba.jpg",

  "Australia": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Flag_of_Australia_%28converted%29.svg/800px-Flag_of_Australia_%28converted%29.svg.png",
  "New Zealand": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Flag_of_New_Zealand.svg/2560px-Flag_of_New_Zealand.svg.png",
  "Fiji": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Fiji.svg/2560px-Flag_of_Fiji.svg.png",
  "Papua New Guinea": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Flag_of_Papua_New_Guinea.svg/640px-Flag_of_Papua_New_Guinea.svg.png"
}



let currentRegion;
let correctAnswer;

window.onload = function () {
  // Retrieve and display current geography points from localStorage when the page loads
  const geographyPoints = localStorage.getItem('geographyPoints') || 0;
  document.getElementById('points').textContent = geographyPoints;
  clearOptions();
}

function selectRegion(region) {
  currentRegion = region;
  document.getElementById('game-area').style.display = 'block';
  document.getElementById('question').textContent = `Adivina el país desde la region: ${region}`;


  loadCountries();
}

function loadCountries() {
  clearOptions();
  const countries = regions[currentRegion];
  correctAnswer = countries[Math.floor(Math.random() * countries.length)];
  loadCountryOptions(correctAnswer);
}


function clearOptions() 
{
  document.getElementById('option1').textContent = '';
  document.getElementById('option2').textContent = '';
  document.getElementById('option3').textContent = '';
  document.getElementById('option4').textContent = '';

  document.getElementById('result').textContent = '';
  document.getElementById('curiosity').textContent = '';
  document.getElementById('curiosity').style.display = 'none';
  document.getElementById('continue').textContent = 'Select a region!';
  document.getElementById('country-flag').style.display = 'none';

  document.getElementById(`option${1}`).style.backgroundColor = '#008CBA';
  document.getElementById(`option${2}`).style.backgroundColor = '#008CBA';
  document.getElementById(`option${3}`).style.backgroundColor = '#008CBA';
  document.getElementById(`option${4}`).style.backgroundColor = '#008CBA';

  document.getElementById('map').style.opacity = '1';

  const geographyPoints = localStorage.getItem('geographyPoints') || 0;
  document.getElementById('points').textContent = geographyPoints;

  document.getElementById('gemini-chat-response').textContent = '';
  document.getElementById('gemini-chat-container').style.display = 'none';
  document.getElementById('chat-input').value = '';

  firstTry = true;
}




function loadCountryOptions(current_country) {
  clearOptions();

  // Take out current region from options
  const otherCountries = Object.keys(regions)
    .filter(region => region !== currentRegion)  // Exclude current region
    .flatMap(region => regions[region]);         // Get countries from other regions

  // Shuffle and select 3 random countries from other regions
  const shuffledOtherCountries = [...otherCountries].sort(() => 0.5 - Math.random()).slice(0, 3);

  // Combine the correct answer with other random countries
  const options = [current_country, ...shuffledOtherCountries].sort(() => 0.5 - Math.random());

  if (options.length === 4) {
    document.getElementById('option1').textContent = options[0];
    document.getElementById('option2').textContent = options[1];
    document.getElementById('option3').textContent = options[2];
    document.getElementById('option4').textContent = options[3];
  } else {
    console.log('Not enough options for this region.');
  }

}


async function fetchGeminiResponse(country) {
  //console.log(`Fetching Gemini response for ${country}`);
  const prompt = `Tell me something interesting or surprising about ${country}. In Spanish`;

  try {
    const response = await fetch('http://localhost:3000/api/gemini', { // Updated to the Gemini endpoint
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ prompt })  // Sending the prompt as before
    });

    const data = await response.json();
    //console.log(data);  // Log the data to inspect Gemini's response structure
    return data;  // Adapt this return based on the exact response from Gemini
  } catch (error) {
    console.error("Error fetching Gemini response:", error);
    return "Sorry, something went wrong!";
  }
}





function checkAnswer(optionNumber)
{
  const selectedCountry = document.getElementById(`option${optionNumber}`).textContent;

  if (selectedCountry === correctAnswer) {
    document.getElementById('result').textContent = 'Correcto!';

    const curiosity = curiosities[correctAnswer];
    document.getElementById('curiosity').style.display = 'flex';


    const flagImage = document.getElementById('country-flag');
    flagImage.src = country_flags[correctAnswer];
    // Show the flag image

    flagImage.style.display = 'block';

    document.getElementById('map').style.opacity = '0';

    document.getElementById(`option${optionNumber}`).style.backgroundColor = '#4CAF50';
    document.getElementById(`option${optionNumber}`).style.color = 'white';

    if (firstTry) {
      let geographyPoints = parseInt(localStorage.getItem('geographyPoints')) || 0;
      geographyPoints++;
      localStorage.setItem('geographyPoints', geographyPoints);
    }

    try {
      fetchGeminiResponse(correctAnswer).then((geminiResponse) => {
        // Access the text inside the first part of the content
        const generatedText = geminiResponse.candidates[0].content.parts[0].text;
        document.getElementById('curiosity').textContent = generatedText;
      });
    
      document.getElementById('gemini-chat-container').style.display = 'flex';

    }
    catch (error) {
      console.error("Error fetching Gemini response:", error);
      document.getElementById('curiosity').textContent = curiosity;
    }

  }
  else {
    document.getElementById('result').textContent = `Error! Respuesta correcta es ${correctAnswer}.`;
    document.getElementById('curiosity').textContent = '';
    document.getElementById('curiosity').style.display = 'none';
    document.getElementById('country-flag').style.display = 'none';

    document.getElementById(`option${optionNumber}`).style.backgroundColor = '#f44336';
    document.getElementById(`option${optionNumber}`).style.color = 'white';

    document.getElementById('map').style.opacity = '1';
    document.getElementById('gemini-chat-container').style.display = 'none';
    document.getElementById('gemini-chat-response').textContent = '';
    document.getElementById('chat-input').value = '';




    firstTry = false;
  }

  document.getElementById('continue').textContent = "Select a new region!";
}



async function sendChatMessage() {
  const userMessage = document.getElementById('chat-input').value;

  if (userMessage.trim() === "") {
      document.getElementById('gemini-chat-response').textContent = "Por favor, escribe una pregunta.";
      return;
  }

  document.getElementById('gemini-chat-response').textContent = "Cargando respuesta...";
  document.getElementById('gemini-chat-response').classList.add('visible'); // Show the response box

  try {
      const response = await fetchGeminiResponse(userMessage);  // Assumes you already have fetchGeminiResponse set up
      const geminiResponse = response.candidates[0].content.parts[0].text;
      
      // Display the response in the chat box
      document.getElementById('gemini-chat-response').textContent = geminiResponse;
      
  } catch (error) {
      document.getElementById('gemini-chat-response').textContent = "Lo siento, hubo un error al obtener la respuesta.";
      console.error("Error al obtener respuesta de Gemini:", error);
  }
}


