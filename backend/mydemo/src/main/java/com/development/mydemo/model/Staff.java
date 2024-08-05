
package com.development.mydemo.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;



@Entity
public class Staff {
    @Id
    @Column(unique = true, nullable = false)
private int Staffid;
private String StaffName;
private String Qualification;
private String Skillset;
private int Experience;
public Staff(int staffid, String staffName, String qualification, String skillset, int experience) {
    Staffid = staffid;
    StaffName = staffName;
    Qualification = qualification;
    Skillset = skillset;
    Experience = experience;
}
public int getStaffid() {
    return Staffid;
}
public void setStaffid(int staffid) {
    Staffid = staffid;
}
public String getStaffName() {
    return StaffName;
}
public void setStaffName(String staffName) {
    StaffName = staffName;
}
public String getQualification() {
    return Qualification;
}
public void setQualification(String qualification) {
    Qualification = qualification;
}
public String getSkillset() {
    return Skillset;
}
public void setSkillset(String skillset) {
    Skillset = skillset;
}
public int getExperience() {
    return Experience;
}
public void setExperience(int experience) {
    Experience = experience;
}
}