
package com.development.mydemo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.development.mydemo.model.Course;

public interface CourseRepo extends JpaRepository<Course,Integer>{
    
}

