import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PlayerComponent } from './components/player';
import { ControlsComponent } from './components/controls';
import { CourseService } from 'src/app/core/services';
import { Course } from 'src/app/core/models';
import { CourseComponent } from 'src/app/course';

const VOTE_UP = 'up';
const VOTE_DOWN = 'down';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css'],
})
export class VideoPlayerComponent implements OnInit {
  @ViewChild(PlayerComponent, { static: true })
  playerComponent: PlayerComponent;
  @ViewChild(ControlsComponent, { static: true })
  controlsComponent: ControlsComponent;

  currentCourse: Course;
  courses: Course[] = [];

  likes = 0;
  unlikes = 0;
  ratio = 0;

  constructor(private courseService: CourseService) {}

  ngOnInit() {
    this.courseService.getApprovedCourses().subscribe(courses => {
      this.courses = courses;
    });
  }

  get video() {
    return this.playerComponent.videoRef.nativeElement;
  }

  // player's events
  handleTimeUpdate() {
    // update progress bar
    const video = this.video;
    if(video.pause){
      //this.video.currentTime = this.currentCourse.exitplayprogress === 0 ? 0.1 : this.currentCourse.exitplayprogress/100 * this.video.duration + this.video.currentTime;
    }
    
    // Work out how much of the media has played via the duration and currentTime parameters
    const percentage = Math.floor((100 / this.video.duration) * this.video.currentTime);
		//this.currentCourse.exitplayprogress = percentage;
    this.playerComponent.progressBar.nativeElement.style.width = percentage + '%';
    this.playerComponent.progressBar.nativeElement.innerHTML = percentage + '% played';
  }
  handleVideoEnded() {
    this.controlsComponent.stop();
  }
  // control's events
  play() {
    if (this.currentCourse) {
      this.video.play();
    }
  }

  pause() {
    this.video.pause();
  }

  stop() {
    this.video.pause();
    this.video.currentTime = 0;
  }

  volume(amount: number) {
    const current = +this.video.volume;
    let expected = current + amount;

    if (expected > 1) {
      expected = 1;
    } else if (expected < 0) {
      expected = 0;
    }

    this.video.volume = expected;
  }

  toggleMute() {
    const muted = this.video.muted;
    this.video.muted = !muted;
  }

  updateLike(cid, course) {
    this.courseService.updateCourselike(cid, course).subscribe(
      res => {
        const idx = this.courses.findIndex(c => c.id === cid);
        const course1 = this.courses[idx];
        this.courses.splice(idx, 1, { ...course1,  id:cid});
      },
      error => {
        console.error(error);
      }
    );
  }
  // get value from localStorage
  // _getItem(key, defaultValue) {
  //   return +localStorage.getItem(key) || defaultValue;
  // }

  _displayVoteInfo() {
    let key = `${VOTE_UP}@${this.currentCourse.id}`;
    this.likes = this.currentCourse.likes;

    key = `${VOTE_DOWN}@${this.currentCourse.id}`;
    this.unlikes = this.currentCourse.unlike;
  }

  vote(type: string) {
    if (this.currentCourse) {
      // let key = type === 'up' ? VOTE_UP : VOTE_DOWN;
      // key = `${key}@${this.currentCourse.id}`;
      this.likes = this.currentCourse.likes;
      this.unlikes = this.currentCourse.unlike;
      if ( type === 'up' ) {
        this.likes = this.currentCourse.likes + 1;
      } else {
        this.unlikes = this.currentCourse.unlike + 1;
      }
      this.currentCourse.likes = this.likes;
      this.currentCourse.unlike = this.unlikes;
      this.updateLike(this.currentCourse.id,this.currentCourse);
    }
  }

  // playlist's events
  handleCourseSelected(course: Course) {
    this.currentCourse = course;
    this.video.src = this.currentCourse.url;
    //this.controlsComponent.play();
    this.controlsComponent.pause();
    this._displayVoteInfo();
    }}
