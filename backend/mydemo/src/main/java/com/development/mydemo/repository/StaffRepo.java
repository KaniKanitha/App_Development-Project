

package com.development.mydemo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.development.mydemo.model.Staff;

public interface StaffRepo extends JpaRepository<Staff,Integer>{
    
}

