package com.development.mydemo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.development.mydemo.model.UserDetails;

public interface UserDetailsRepo extends JpaRepository<UserDetails,Integer>{
    
}

