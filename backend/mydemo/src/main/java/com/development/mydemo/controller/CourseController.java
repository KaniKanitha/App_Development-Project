
package com.development.mydemo.controller;

import com.development.mydemo.model.Course;
import com.development.mydemo.repository.CourseRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/courses")
public class CourseController {

    @Autowired
    private CourseRepo courseRepo;

    // Get all courses
    @GetMapping
    public List<Course> getAllCourses() {
        return courseRepo.findAll();
    }

    // Get a course by ID
    @GetMapping("/{id}")
    public ResponseEntity<Course> getCourseById(@PathVariable int id) {
        Optional<Course> course = courseRepo.findById(id);
        if (course.isPresent()) {
            return ResponseEntity.ok(course.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // Create a new course
    @PostMapping
    public Course createCourse(@RequestBody Course course) {
        return courseRepo.save(course);
    }

    // Update a course
    @PutMapping("/{id}")
    public ResponseEntity<Course> updateCourse(@PathVariable int id, @RequestBody Course courseDetails) {
        Optional<Course> course = courseRepo.findById(id);
        if (course.isPresent()) {
            Course updatedCourse = course.get();
            updatedCourse.setPython(courseDetails.getPython());
            updatedCourse.setJava(courseDetails.getJava());
            updatedCourse.setBootstrap(courseDetails.getBootstrap());
            updatedCourse.setCybersecurity(courseDetails.getCybersecurity());
            courseRepo.save(updatedCourse);
            return ResponseEntity.ok(updatedCourse);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // Delete a course
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCourse(@PathVariable int id) {
        Optional<Course> course = courseRepo.findById(id);
        if (course.isPresent()) {
            courseRepo.delete(course.get());
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
