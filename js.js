let audiofile = document.getElementById("audioapp");
let inputfile = document.getElementById("file");
let songlist = document.getElementById("songlist");
let songs;
let currentsong;


//  ["outside", "middle child", "float"] .forEach((songname) => {
//  songlist .innerHTML += <li>${ song.name}</li>;
//  });


inputfile.addEventListener("change", (event) => {
  console.log(event);
  console.log(event.target);
  console.log(event.target.files);
  songs = event.target.files

  for (let song = 0; song < songs.length; song++) {
    const element = songs[song];


    songlist.innerHTML += "<li>" + element.name + "</li>";

  }

});

songlist.addEventListener('click', (event) => {
  console.log(event.target)
  console.log(event.target.textContent)

  let music = event.target.textContent

  for (let song = 0; song < songs.length; song++) {
    const element = songs[song];

    if (music == element.name) {
      console.log(element)
      URL.createObjectURL(element)
      audiofile.src = URL.createObjectURL(element)
      
      audiofile.play()
    }

  }
});



