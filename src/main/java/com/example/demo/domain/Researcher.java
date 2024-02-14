package com.example.demo.domain;

import com.example.demo.domain.sub.*;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Researcher extends Member {

    @Id @GeneratedValue
    @Column(name = "researcher_id")
    private Long id;

    /* 비연관 데이터 */
    @Enumerated(EnumType.STRING)
    private Gender gender;      // 성별
    @Enumerated(EnumType.STRING)
    private Degree degree;      // 학력
    private String capacity;    // 역량
    private boolean isWorking;  // 재직 여부
    private Long matchNumber;   // 매칭 횟수
    private String profile;     // 자기 소개

    /* 연관 데이터 */
    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(
            joinColumns = @JoinColumn(name = "strength_id"),
            inverseJoinColumns = @JoinColumn(name = "research_id")
    )
    private Set<Strength> strengths = new HashSet<>();              // 강점

    @OneToMany(mappedBy = "researcher", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<FormerWorkplace> formerWorkplaces = new HashSet<>();// 이전 직장

    @ManyToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinTable(
            joinColumns = @JoinColumn(name = "image_id"),
            inverseJoinColumns = @JoinColumn(name = "researcher_id")
    )
    private List<Image> images = new ArrayList<>();                 // 이미지

    @ManyToMany(mappedBy = "researchers")
    private List<Student> students = new ArrayList<>();             // 학생

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "company_id")
    private Company company;                                        // 연구소
}
