
package com.development.mydemo.service;

import com.development.mydemo.model.Course;
import com.development.mydemo.repository.CourseRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CourseService {

    @Autowired
    private CourseRepo courseRepo;

    public List<Course> getAllCourses() {
        return courseRepo.findAll();
    }

    public Optional<Course> getCourseById(int id) {
        return courseRepo.findById(id);
    }

    public Course createCourse(Course course) {
        return courseRepo.save(course);
    }

    public Optional<Course> updateCourse(int id, Course courseDetails) {
        return courseRepo.findById(id).map(course -> {
            course.setPython(courseDetails.getPython());
            course.setJava(courseDetails.getJava());
            course.setBootstrap(courseDetails.getBootstrap());
            course.setCybersecurity(courseDetails.getCybersecurity());
            return courseRepo.save(course);
        });
    }

    public boolean deleteCourse(int id) {
        return courseRepo.findById(id).map(course -> {
            courseRepo.delete(course);
            return true;
        }).orElse(false);
    }
}
