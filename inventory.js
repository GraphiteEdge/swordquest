function useItem(i){
  let item = Player.inventory[i];

  if(item.effect==="heal"){
    Player.hp += item.value;
  }
}
