import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skill-button',
  templateUrl: './skill-button.component.html',
  styleUrls: ['./skill-button.component.css']
})
export class SkillButtonComponent {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() imagePath!: string;
  @Input() technology!: string;

}
