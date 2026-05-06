const DialogueDB = {
  elder:{
    start:{
      text:"The forest is dangerous. Will you help?",
      choices:[
        {text:"Yes", next:"accept"},
        {text:"Tell me more", next:"lore"}
      ]
    },

    accept:{
      text:"Go to the forest.",
      action:()=>startQuest("forest"),
      choices:[]
    },

    lore:{
      text:"A dungeon lies beneath the forest.",
      choices:[
        {text:"I will go", next:"accept"}
      ]
    }
  }
};

function startDialogue(npc){
  Dialogue.open(npc,"start");
}

const Dialogue = {
  open(npc,node){
    let d = DialogueDB[npc][node];

    UI.render(d.text,
      d.choices.map(c=>({
        label:c.text,
        action:`Dialogue.next('${npc}','${c.next}')`
      }))
    );

    if(d.action) d.action();
  },

  next(npc,node){
    this.open(npc,node);
  }
};
