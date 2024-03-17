import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent 
{
  // Event listener for button
  public Value: any;
  public AcceptData(value : any)
  {
    console.log("Entered amount is: " +value);
    this.Value = value;
  }
}
