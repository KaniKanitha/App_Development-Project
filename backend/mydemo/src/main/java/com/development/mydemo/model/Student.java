package com.development.mydemo.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;



@Entity
public class Student {
    @Id
    @Column(unique = true, nullable = false)
private int Studentid;
private String Studentname;
private int age;
private String gender;
private String email;
private String Qualification;
private String username;
private String password;
private String courseselected;
public Student(int studentid, String studentname, int age, String gender, String email, String qualification,
        String username, String password, String courseselected) {
    Studentid = studentid;
    Studentname = studentname;
    this.age = age;
    this.gender = gender;
    this.email = email;
    Qualification = qualification;
    this.username = username;
    this.password = password;
    this.courseselected = courseselected;
}
public int getStudentid() {
    return Studentid;
}
public void setStudentid(int studentid) {
    Studentid = studentid;
}
public String getStudentname() {
    return Studentname;
}
public void setStudentname(String studentname) {
    Studentname = studentname;
}
public int getAge() {
    return age;
}
public void setAge(int age) {
    this.age = age;
}
public String getGender() {
    return gender;
}
public void setGender(String gender) {
    this.gender = gender;
}
public String getEmail() {
    return email;
}
public void setEmail(String email) {
    this.email = email;
}
public String getQualification() {
    return Qualification;
}
public void setQualification(String qualification) {
    Qualification = qualification;
}
public String getUsername() {
    return username;
}
public void setUsername(String username) {
    this.username = username;
}
public String getPassword() {
    return password;
}
public void setPassword(String password) {
    this.password = password;
}
public String getCourseselected() {
    return courseselected;
}
public void setCourseselected(String courseselected) {
    this.courseselected = courseselected;
}
}
