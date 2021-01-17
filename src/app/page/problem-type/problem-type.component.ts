import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-problem-type',
  templateUrl: './problem-type.component.html',
  styleUrls: ['./problem-type.component.scss']
})
export class ProblemTypeComponent implements OnInit {

  problems = [
    {text: 'Not cooling'},
    {text: 'Ice maker not working'},
    {text: 'Leaking'},
    {text: 'Noisy'},
    {text: 'Other'},
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
