import { Observable } from 'rxjs/Observable';

function observable_run_unlimitted() {
  const obs = new Observable(observer => {
    setTimeout(() => {
      observer.next();
      observer.complete();
    }, 3000);
  });

  obs.subscribe(res => console.log('get it'));
  setTimeout(() => {
    obs.subscribe(res => console.log('get it twice'));
  }, 6000);
}

observable_run_unlimitted()