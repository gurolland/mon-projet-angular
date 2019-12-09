export class AppareilService{
  appareils = [
    {id: 1,
      name:'Machine à laver',
      status:'éteint'},
    {id: 2,
      name:'Television',
      status:'allumé'},
    {id: 3,
      name:'PC',
      status:'éteint'}
  ];

  switchOnAll(){
  for(let appareil of this.appareils){
    appareil.status = 'allumé'
    }
  }
  switchOffAll(){
    for(let appareil of this.appareils){
      appareil.status = 'éteint'
    }
  }

  switchOnOne(index: number){
    this.appareils[index].status = "allumé";
  }
  switchOffOne(index: number){
    this.appareils[index].status = "éteint";
  }
}
