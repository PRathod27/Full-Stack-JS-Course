const songs = [
  { title: "Song 1", singer: "Singer 1", duration: 3.45 },
  { title: "Song 2", singer: "Singer 2", duration: 4.2 },
  { title: "Song 3", singer: "Singer 3", duration: 2.5 },
  { title: "Song 4", singer: "Singer 4", duration: 3.3 },
  { title: "Song 5", singer: "Singer 5", duration: 4.0 },
];

console.log(songs.filter((song) => song.duration > 3 && song.duration < 4));
