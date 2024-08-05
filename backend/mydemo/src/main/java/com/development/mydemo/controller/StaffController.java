
package com.development.mydemo.controller;

import com.development.mydemo.model.Staff;
import com.development.mydemo.service.StaffService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/staff")
public class StaffController {

    @Autowired
    private StaffService staffService;

    // Get all staff
    @GetMapping
    public List<Staff> getAllStaff() {
        return staffService.getAllStaff();
    }

    // Get a staff by ID
    @GetMapping("/{id}")
    public ResponseEntity<Staff> getStaffById(@PathVariable int id) {
        Optional<Staff> staff = staffService.getStaffById(id);
        if (staff.isPresent()) {
            return ResponseEntity.ok(staff.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // Create a new staff
    @PostMapping
    public Staff createStaff(@RequestBody Staff staff) {
        return staffService.createStaff(staff);
    }

    // Update a staff
    @PutMapping("/{id}")
    public ResponseEntity<Staff> updateStaff(@PathVariable int id, @RequestBody Staff staffDetails) {
        Optional<Staff> updatedStaff = staffService.updateStaff(id, staffDetails);
        if (updatedStaff.isPresent()) {
            return ResponseEntity.ok(updatedStaff.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // Delete a staff
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteStaff(@PathVariable int id) {
        boolean isDeleted = staffService.deleteStaff(id);
        if (isDeleted) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
