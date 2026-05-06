let Enemy=null;

function startBattle(e){
  Enemy = e;
  turn();
}

function turn(){
  Player.hp -= Enemy.atk;

  UI.render(
    `${Enemy.name} HP:${Enemy.hp}`,
    [
      {label:"Attack", action:"attack()"},
      {label:"Back", action:"UI.main()"}
    ]
  );
}

function attack(){
  Enemy.hp -= Player.stats.STR;

  if(Enemy.hp<=0){
    UI.main();
    return;
  }

  turn();
}
