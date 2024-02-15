package com.example.demo.domain.member;

import com.example.demo.domain.nonEntity.Gender;
import com.example.demo.domain.nonEntity.Member;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Getter
@Entity
public class Student extends Member {

    @Id @GeneratedValue
    @Column(name = "student_id")
    private Long id;

    private String name;        // 이름
    private String joinReason;  // 가입 이유
    @Enumerated(EnumType.STRING)
    private Gender gender;      // 성별
    private String school;      // 학교
    private String introduce;   // 소개말

    /* 연관 데이터 */
    @ManyToMany
    @JoinTable(
            joinColumns = @JoinColumn(name = "researcher_id"),
            inverseJoinColumns = @JoinColumn(name = "student_id")
    )
    @Builder.Default
    private List<Researcher> researchers = new ArrayList<>();    // 오퍼만 넣은 연구자
}
