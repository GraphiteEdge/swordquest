const World = {
  location:"Barrn Island",
  visited:[]
};

function travel(loc){
  World.location = loc;
  if(!World.visited.includes(loc)) World.visited.push(loc);
  UI.main();
}
