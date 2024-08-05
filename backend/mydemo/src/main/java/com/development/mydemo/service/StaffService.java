
package com.development.mydemo.service;

import com.development.mydemo.model.Staff;
import com.development.mydemo.repository.StaffRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StaffService {

    @Autowired
    private StaffRepo staffRepo;

    public List<Staff> getAllStaff() {
        return staffRepo.findAll();
    }

    public Optional<Staff> getStaffById(int id) {
        return staffRepo.findById(id);
    }

    public Staff createStaff(Staff staff) {
        return staffRepo.save(staff);
    }

    public Optional<Staff> updateStaff(int id, Staff staffDetails) {
        return staffRepo.findById(id).map(staff -> {
            staff.setStaffName(staffDetails.getStaffName());
            staff.setQualification(staffDetails.getQualification());
            staff.setSkillset(staffDetails.getSkillset());
            staff.setExperience(staffDetails.getExperience());
            return staffRepo.save(staff);
        });
    }

    public boolean deleteStaff(int id) {
        return staffRepo.findById(id).map(staff -> {
            staffRepo.delete(staff);
            return true;
        }).orElse(false);
    }
}
