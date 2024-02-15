package com.example.demo.utils.dto;

import com.example.demo.domain.member.Student;
import com.example.demo.domain.nonEntity.Gender;
import lombok.AllArgsConstructor;

@AllArgsConstructor
public class StudentJoinDto {

    private String loginId;
    private String password;

    private String name;
    private String joinReason;
    private String gender;
    private String school;
    private String introduce;

    public Student toEntity() {
        Student student = Student.builder()
                .name(name)
                .joinReason(joinReason)
                .gender(Gender.of(gender))
                .school(school)
                .introduce(introduce)
                .build();
        student.join(loginId, password);

        return student;
    }
}
