import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './../../main-content/navbar/navbar.component';//./navbar/navbar.component

@Component({                        //das ist ein decorater, eine Funktion die wir drum rum setzen müssen, typecsript spezifisch, 
                                    //eine Funktion, die um die Funktion herum ausgeführt wird.
    selector: 'app-landingPage',    //damit man weiß, welche Component das is, damit wir es später im html aufrufen können.
    standalone: true,               //wichtig, dass es als standalone definiert wird, seit 2016
    imports: [CommonModule, NavbarComponent],        // es ist wichtig, dass es imports gibt, falls wir in dieser Geschichte etwas nutzen wollen,
                                    //zb wenn wir andere Components importieren wollen oder services. Diese kann man dann in 
                                    //imports dann reinschieben. CommonMules reinpacken, kann man aber auch leer lassen.
                                    //hier nun die beiden wichitgsten Components:
                                    //zum Verknüpfen von ... //man kann auch schräge Anführungszeichen nehmen, damit
                                    //man mehrzeilig schreiben kann.
    template:`                       
        <section>    
        <div><app-navbar></app-navbar></div>              
            <h1 class="fontRaleway">SAKURA RAMEN</h1> 
            <h2 class="fontRaleway">BEST RAMEN IN TOWN</h2> 
        </section>
          `, 


    styleUrls:['./../landing-page/landingPage.component.scss']  //denn wir wollen das Ganze ja auch designen, Styles sind ein Array, in die styles
                                    //kann man direkt auch was einfügen, dazu machen wir einen String draus ['','', ...]
                                    //nun haben wir die Component erstellt und jetzt wollen wir diese auch einbinden und
                                    //das machen wir mit den imports, in der app-component müssen wir nun importieren, wie
                                    //die class heisst
}) 
export class LandingPageComponent{  //hier könnte man js code reinschreiben, kann aber auch leer bleiben

}