package com.example.demo.domain;

import com.example.demo.domain.sub.Gender;
import com.example.demo.domain.sub.Member;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Student extends Member {

    @Id @GeneratedValue
    @Column(name = "student_id")
    private Long id;

    @Enumerated(EnumType.STRING)
    private Gender gender;
    private String school;

    /* 연관 데이터 */
    @ManyToMany
    @JoinTable(
            joinColumns = @JoinColumn(name = "researcher_id"),
            inverseJoinColumns = @JoinColumn(name = "student_id")
    )
    private List<Researcher> researchers = new ArrayList<>();

    @ManyToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinTable(
            joinColumns = @JoinColumn(name = "image_id"),
            inverseJoinColumns = @JoinColumn(name = "researcher_id")
    )
    private List<Image> images = new ArrayList<>();
}
