import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent 
{

   public Name : string = "";
   public MarvellousEvent()
   {
     console.log("Marvellous button clicked");     
   }

   public InfosystemsEvent()
   {
     this.Name = "InfoSystems button gets clicked";
   }

   public AngularEvent(Value: any)
   {
     console.log(Value);
     
   }
}
