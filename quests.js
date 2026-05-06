const Quests = {
  active:{},
  completed:{}
};

const QuestDB = {
  forest:{
    id:"forest",
    name:"Barrn Forest Crisis",
    steps:["talk","dungeon","boss","return"],
    step:0
  }
};

function startQuest(id){
  Quests.active[id] = QuestDB[id];
}

function advanceQuest(id){
  let q = Quests.active[id];
  q.step++;

  if(q.step >= q.steps.length){
    Quests.completed[id] = q;
    delete Quests.active[id];
  }
}
