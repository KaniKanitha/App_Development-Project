package com.development.mydemo.controller;

import com.development.mydemo.model.Student;
import com.development.mydemo.service.StudentService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/students")
public class StudentController {

    @Autowired
    private StudentService studentService;

    // Get all students
    @GetMapping
    public List<Student> getAllStudents() {
        return studentService.getAllStudents();
    }

    // Get a student by ID
    @GetMapping("/{id}")
    public ResponseEntity<Student> getStudentById(@PathVariable int id) {
        Optional<Student> student = studentService.getStudentById(id);
        if (student.isPresent()) {
            return ResponseEntity.ok(student.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // Create a new student
    @PostMapping("/createStudent")
    public Student createStudent(@RequestBody Student student) {
        return studentService.createStudent(student);
    }

    // Update a student
    @PutMapping("/{id}")
    public ResponseEntity<Student> updateStudent(@PathVariable int id, @RequestBody Student studentDetails) {
        Optional<Student> updatedStudent = studentService.updateStudent(id, studentDetails);
        if (updatedStudent.isPresent()) {
            return ResponseEntity.ok(updatedStudent.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // Delete a student
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteStudent(@PathVariable int id) {
        boolean isDeleted = studentService.deleteStudent(id);
        if (isDeleted) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
