

var songs = [];

var musicInfo = document.getElementById("songInfo");

songs[songs.length] = "Just Dance - by Lady Gaga on the album The Fame";
songs[songs.length] = "Legs - by ZZTop on the album Eliminator";
songs[songs.length] = "The Logical Song - by Supertramp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall - by Pink Floyd on the album The Wall";
songs[songs.length] = "Welcome to the Jungle - by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironic - by Alanis Morisette on the album Jagged Little Pill";
songs[songs.length] = "Hotline Bling - by Drake on the album Views";


for (var i = 0; i < songs.length; i++) {
	musicInfo.innerHTML += "<div>" + songs[i] + "</div><br>";
}







