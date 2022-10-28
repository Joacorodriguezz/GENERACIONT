const words = [
    'californication',
    'plataforma5',
    'black',
    'summer',
    'flea',
    'aeroplane',
    'peppers',
    'unlimited',
    'arcadium',
    'love',
    'getaway',
    'stadium',
    'quixoticelixer',
    'quarter',
    'snow',
    'dylan',
    'zephyr',
    'funky',
    'chili',
    "ysya",
    "duki",
    "joaco",
    "marti",
    "valentin",
    "amor",
    "dinero",
    "salud"
  ];


  let palabraAleatoria
  let time= 10
  let score= 0

  function randomWords(){
    palabraAleatoria = words[Math.floor(Math.random() * words.length)];
    console.log(palabraAleatoria)
  }

  randomWords()

  function addToDOM(){
  let h1= document.querySelector("h1")
  h1
  h1.textContent= palabraAleatoria
}

 addToDOM()

 
  document.querySelector("input").addEventListener('keyup', function(e){
  document.getElementById("text")
  let palabraIngresada = document.getElementById("text").value;
  console.log (palabraIngresada);

  if (palabraIngresada===palabraAleatoria){
    updateScore();
    time +=3 
    timeSpan.textContent = time + "s";
    document.querySelector("input").value= "";
    randomWords();
    addToDOM();
   }

  })

  let interval = setInterval(actualizarTiempo, 1000);

  function actualizarTiempo() {
      time --  
      timeSpan.textContent = time + "s";

    if (time === 0){
      clearInterval(interval);
      gameOver();
     }
   }
actualizarTiempo();

  function updateScore (){
  score +=1 
  scoreSpan.textContent = score;
  }

   function gameOver(){
       let title = document.querySelector('#end-game-container')
       title
       title.textContent = "Te quedaste sin tiempo!"
    
       let p = document.createElement("p")
       p
       p.innerHTMNL = "Puntaje final: " + score 
  
      
  
   } 
   
 
  //  let button =document.createElement("button")
  //  button
  //  button.innerHTML(<button onclick="location.reload()">Volve a empezar </button>)