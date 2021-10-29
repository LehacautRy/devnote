tab 1

<ion-header [translucent]="true">
  <ion-toolbar>
    <center>
    <ion-title>
      ESPACE
    </ion-title>
  </center>
  </ion-toolbar>
</ion-header>

<ion-content [fullscreen]="true">
  <ion-header collapse="condense">
    <ion-toolbar>
      <ion-title size="large">Tab 1</ion-title>
    </ion-toolbar>
  </ion-header>
  <img src="https://lh3.googleusercontent.com/proxy/u9yol-rZSuQ6QPgPI55F9DoRhYZxU92xhHFTo61O5xnWy9wPV6rciWlo-ymOEqnUsiuk-4Pz6P5sw5JAZZFrw7Fe7a1MOQ1yvKn5q8vTyKp7" width="60">
  <div class="vertical">


  <center>

  <ion-button class="prof">professeur</ion-button>

  </center>
  <center>
  <ion-button class="eleve">stagiaire</ion-button>
  </center>
</div>

<div class="devnoteweb">
  <center>
    <p>DEVNOTEWEB</p>
  </center>
</div>

<div class="connexion">
  <center>
    <p2>CLICK POUR TE CONNECTER</p2>
  </center>

</div>
</ion-content>




tab 2

<ion-content>
  
  <div class="padding">
<ion-item>
  <ion-label color="black">Email</ion-label>
  <ion-input color="black" placeholder="Adresse email" type="email"></ion-input>
</ion-item>

<ion-item>
  <ion-label color="black">Mot de passe</ion-label>
  <ion-input color="black" placeholder="Mot de passe" type="password"></ion-input>
</ion-item>
<ion-item lines = "none">
  <ion-button  color="black" fill="clear" slot="end">Mot de passe oublié ?</ion-button>
</ion-item>

<ion-button href="http://localhost:8101/tabs/tab3" fill="outline" shape="round" expand="block">Connexion</ion-button>
<br>


</div>

</ion-content>
  
  scss 
  
  ion-content{
    --ion-background-color : linear-gradient(#74ebd5,#ACB6E5);
}
ion-item{
    --ion-background-color:transparent!important;
}
.padding {
    padding: 5%;
}

tab 3

<ion-header [translucent]="true">
  <ion-toolbar>
    <ion-title>
    </ion-title>
  </ion-toolbar>
</ion-header>
<ion-content [fullscreen]="true">
  <ion-header collapse="condense">
    <ion-toolbar>
      <ion-title size="large">test2</ion-title>
    </ion-toolbar>
  </ion-header>
<ion-list>
  <ion-item>
    <ion-label> <a href="/graphique"><input type="button" value="SINI" /></a></ion-label>
  </ion-item>
  <ion-item>
    <ion-label onclick = "eleve2">MOMO</ion-label>
  </ion-item>
  <ion-item>
    <ion-label onclick = "eleve3">MUMU</ion-label>
  </ion-item>
</ion-list>
</ion-content>


TS 

import { Component,ViewChild} from '@angular/core';
import { Chart,registerables } from 'chart.js';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  @ViewChild('graph') graph;
  bars: any;
  colorArray: any;
  ionViewDidEnter() {
    this.createBarChart();
  }

  constructor() {Chart.register(...registerables);} createBarChart() {
    this.bars = new Chart(this.graph.nativeElement, {
      type: 'line',
      data: {
        labels: ['Control 1', 'Control 2', 'Control 3', 'control 4'],
        datasets: [{
          label: 'SINI',
          data: [10,15,18,20],
          backgroundColor: 'white', 
          borderColor: 'red',
          borderWidth: 1,
          },{
          label: 'moyenne classe',
          data: [8,11,19,15],
          backgroundColor: 'white', 
          borderColor: 'black',
          borderWidth: 1,
          }]
      },
          });
  }

Graphique page 


<ion-header [translucent]="true">
  <ion-toolbar>
    <ion-title>
      Note
    </ion-title>
  </ion-toolbar>
</ion-header>
<ion-content>
<ion-card>
  <ion-card-header>
    <ion-card-subtitle>Elèves</ion-card-subtitle>
    <table>
   <thead> <!-- En-tête du tableau -->
       <tr>
           <th>Nom :</th>
           <th>Note       :</th>
       </tr>
   </thead>
   <tfoot> <!-- Pied de tableau -->
       <tr>
           <th>Moyenne General :</th>
           <th>15.75</th>
       </tr>
   </tfoot>
   <tbody> <!-- Corps du tableau -->
       <tr>
           <td>SINI </td>
           <td class=notes>10 / 15 / 18 / 20 </td>
       </tr>
   </tbody>
</table>
  </ion-card-header>
</ion-card>
<ion-card>
      <ion-card-subtitle>Evolutions</ion-card-subtitle>
<img src = "https://media.discordapp.net/attachments/899724635422195712/903634203328012328/evltion.png?width=650&height=330">
</ion-card>
<ion-card>
</ion-card>
</ion-content>
<ion-buttons slot="start">
      <ion-button Href="http://localhost:8101/tabs/tab3">Retour</ion-button>
    </ion-buttons>

   
