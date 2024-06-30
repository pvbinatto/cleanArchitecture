import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import Person, { PersonType } from '../../../domain/models/Person';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-person-list',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './person-list.component.html'
})
export class PersonListComponent implements OnInit {

  private person = new Person();

  persons: PersonType[] = [];
  form = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl(''),
    phone: new FormControl(''),
  })

  ngOnInit(): void {
    this.listPersons();
  }

  createPerson(){
    if(this.form.valid){
      const person = this.form.value as PersonType;
      this.person.create(person).subscribe((person) => {
        this.listPersons();
        this.form.reset();
      });
    }
  }

  listPersons(){
    this.person.list().subscribe((persons) => {
      this.persons = persons;
    });
  }
}
