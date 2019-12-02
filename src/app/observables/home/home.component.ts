import { Component, OnInit, OnDestroy } from "@angular/core";
import { interval, Subscription, Observable } from "rxjs";
import { map, filter } from "rxjs/operators";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class OHComponent implements OnInit, OnDestroy {
  private subscription: Subscription;

  constructor() {}

  ngOnInit() {
    // this.subscription = interval(1000).subscribe(count => {
    //   console.log(count);
    // });
    const customIntervalObservable = Observable.create(observer => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if (count === 2) observer.complete();
        if (count > 3) {
          observer.error(new Error("Count is now greater than 3!"));
        }
        count++;
      }, 1000);
    });

    this.subscription = customIntervalObservable
      .pipe(
        filter((data: number) => {
          return data > 0;
        }),
        map((data: number) => {
          return "Round: " + (data + 1);
        })
      )
      .subscribe(
        data => {
          console.log(data);
        },
        error => {
          alert(error.message);
        },
        () => {
          console.log("Completed");
        }
      );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
