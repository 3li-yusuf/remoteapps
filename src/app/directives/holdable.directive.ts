import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Output,
} from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Directive({
  selector: '[appLongPress]',
})
export class LongPressDirective {
  @Output() longPress: EventEmitter<any> = new EventEmitter();

  private destroy$: Subject<void> = new Subject();
  private pressTimer: any;

  constructor(private el: ElementRef) {}

  @HostListener('mousedown', ['$event'])
  @HostListener('touchstart', ['$event'])
  onMouseDown(event) {
    this.startPressTimer(event);
  }

  @HostListener('mouseup')
  @HostListener('touchend')
  onMouseUp() {
    this.stopPressTimer();
  }

  private startPressTimer(event) {
    this.pressTimer = setTimeout(() => {
      this.longPress.emit(event);
    }, 500);
  }

  private stopPressTimer() {
    clearTimeout(this.pressTimer);
    this.destroy$.next();
    this.destroy$.complete();
  }
}
