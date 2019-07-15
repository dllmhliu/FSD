import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Course } from '../models';

@Injectable()
export class CourseService {
  constructor(private http: HttpClient) {}
  getCourses() {
    return this.http.get<Course[]>('/courses?_sort=id&_order=desc');
  }

  saveCourse(course: Course) {
    course.status = 'added';
    course.approved = false;
    course.likes = 0;
    course.unlike = 0;
    course.currentStatus = 'stoped';
    course.exitplayprogress = 0;
    return this.http.post('/courses', course);
  }

  updateCourse(id: number, course: Course) {
    course.approved = false;
    course.status = 'edited';
    return this.http.put<any>(`/courses/${id}`, course);
  }
  updateCourselike(id: number, course: Course) {
      return this.http.patch(`/courses/${id}`, course);
  }
  approveCourse(id: number) {
    return this.http.patch(`/courses/${id}`, { approved: true });
  }

  deleteCourse(id: number) {
    return this.http.delete(`/courses/${id}`);
  }

  getApprovedCourses() {
    return this.http.get<Course[]>('/courses?approved=true');
  }
}
