import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';

@Component({
  selector: 'app-person',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './person.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersonComponent implements OnInit {

  ngOnInit(): void { }

}
