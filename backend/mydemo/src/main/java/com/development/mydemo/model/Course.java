package com.development.mydemo.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;


@Entity
public class Course {
    @Id
    @Column(unique = true, nullable = false)
    private int Courseid;
private String Python;
private String Java;
private String Bootstrap;
private String Cybersecurity;
public Course(int courseid, String python, String java, String bootstrap, String cybersecurity) {
    Courseid = courseid;
    Python = python;
    Java = java;
    Bootstrap = bootstrap;
    Cybersecurity = cybersecurity;
}
public int getCourseid() {
    return Courseid;
}
public void setCourseid(int courseid) {
    Courseid = courseid;
}
public String getPython() {
    return Python;
}
public void setPython(String python) {
    Python = python;
}
public String getJava() {
    return Java;
}
public void setJava(String java) {
    Java = java;
}
public String getBootstrap() {
    return Bootstrap;
}
public void setBootstrap(String bootstrap) {
    Bootstrap = bootstrap;
}
public String getCybersecurity() {
    return Cybersecurity;
}
public void setCybersecurity(String cybersecurity) {
    Cybersecurity = cybersecurity;
}
}
