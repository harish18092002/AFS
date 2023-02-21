import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'db';
  constructor(private db: AngularFirestore) {

  }
  createcollection() {

    const tutorialsRef = this.db.collection('tutorials');
    const tutorial = { title: 'zkoder Tutorial', url: 'bezkoder.com/zkoder-tutorial' };
    tutorialsRef.add({ ...tutorial });
  }
}
