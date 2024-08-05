package com.development.mydemo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.development.mydemo.model.Student;

public interface StudentRepo extends JpaRepository<Student,Integer>{
    
}

