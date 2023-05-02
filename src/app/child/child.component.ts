
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() public parentData="";
  @Output() public MyEvent=new EventEmitter();
  public sndmsg()
  {
    this.MyEvent.emit("Hello parent component");
  }
}
