function init(){

  Player.name = prompt("Name?");
  Player.stats = {HP:25,MP:5,STR:10,DEF:5,AGI:5,INT:5};
  Player.hp = Player.stats.HP;
  Player.mp = Player.stats.MP;

  UI.main();
}

init();
