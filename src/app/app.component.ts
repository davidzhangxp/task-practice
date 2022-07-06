import { Component, OnInit } from '@angular/core';
import { filter, map, Observable, of } from 'rxjs';
import { data } from './data';
import { Person } from './interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  people?: Observable<Person[]>;

  ngOnInit(): void {
    this.people = of(data);
  }
  deletePerson(id: string) {
    console.log(id);
    this.people = this.people?.pipe(
      map((p) => p.filter((item) => item.id !== id))
    );
  }
}
