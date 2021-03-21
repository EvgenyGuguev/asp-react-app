import {makeObservable, observable} from "mobx";

export default class ActivityStore {
  title = 'Hello from mobx store!';
  
  constructor() {
    makeObservable(this, {
      title: observable
    })
  }
  
}