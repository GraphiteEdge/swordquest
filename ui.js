const UI = {

  render(text,buttons=[]){
    document.getElementById("main").innerHTML =
      `<p>${text}</p>` +
      buttons.map(b=>`<button onclick="${b.action}">${b.label}</button>`).join("");
  },

  main(){
    this.render("Barrn Island",[
      {label:"Talk Elder", action:"startDialogue('elder')"},
      {label:"Fight Slime", action:"startBattle({name:'Slime',hp:20,atk:5})"}
    ]);
  }
};
