package com.development.mydemo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.development.mydemo.model.Feedback;

public interface FeedbackRepo extends JpaRepository<Feedback,Integer>{
    
}
