import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InputChatService {
  subject = new Subject();
  constructor() {}
  emit(val: any) {
    this.subject.next(val);
  }
  reciev(): Observable<any> {
    return this.subject.asObservable();
  }
}
