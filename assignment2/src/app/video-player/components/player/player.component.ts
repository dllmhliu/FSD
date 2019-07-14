import { Component, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent {
  @ViewChild('video', { static: true }) videoRef: ElementRef;
  @ViewChild('progressBar', {static: false}) progressBar: ElementRef;
  @Output() videoTimeUpdated = new EventEmitter();
  @Output() videoEnded = new EventEmitter();

  constructor() {}

  get video() {
    return this.videoRef.nativeElement;
  }

  handleTimeupdate(event) {
    this.videoTimeUpdated.emit(event);
  }

  handleVideoEnded() {
    this.videoEnded.emit();
  }
}
