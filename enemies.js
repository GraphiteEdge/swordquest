const EnemyAI = {
  aggressive(e,p){ return "attack"; },
  defensive(e,p){ return e.hp<10 ? "defend":"attack"; },
  tactical(e,p){ return p.hp<10 ? "special":"attack"; }
};
