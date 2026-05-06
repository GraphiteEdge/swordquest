function castSpell(i){
  let s = Player.spells[i];

  if(Player.mp < s.cost) return;

  Player.mp -= s.cost;
  Enemy.hp -= s.power;
}
