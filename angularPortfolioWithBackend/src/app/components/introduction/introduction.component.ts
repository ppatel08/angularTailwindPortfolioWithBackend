import { Component } from '@angular/core';
import * as personalDetail from "../../dummyData/dummy.json"

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css']
})
export class IntroductionComponent {
data = personalDetail
}
