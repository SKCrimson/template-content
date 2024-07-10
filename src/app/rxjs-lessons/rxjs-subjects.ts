import { Subject } from "rxjs";


const subject = new Subject<number>();

subject.next(1);
subject.next(2);

subject.subscribe(value => {
    console.log('First', value);
});

subject.next(3);

subject.subscribe(value => {
    console.log('Second', value);
})

subject.next(4);