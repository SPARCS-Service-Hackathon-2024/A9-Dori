package com.example.demo.domain.member;

import com.example.demo.domain.FormerWorkplace;
import com.example.demo.domain.nonEntity.*;
import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Getter
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
    @Enumerated(EnumType.STRING)
    private Strength strength;  // 강점
    private String name;        // 이름
    private String joinReason;  // 가입 이유
    private String capacity;    // 역량
    private String role;        // 직책
    private String introduce;   // 소개말
    private boolean isWorking;  // 재직 여부
    private Long matchNumber;   // 매칭 횟수
    private boolean isRewarded; // 유무상 여부
    private boolean forCompany; // 기업 대상
    private boolean forStudent; // 학생 대상
    private boolean isMania;    // 도리 매니아

    /* 연관 데이터 */
    @OneToMany(mappedBy = "researcher", cascade = CascadeType.ALL, orphanRemoval = true)
    @Builder.Default
    private List<FormerWorkplace> formerWorkplaces = new ArrayList<>();// 이전 직장

    @ManyToMany(mappedBy = "pendingResearchers")
    @Builder.Default
    private List<Student> students = new ArrayList<>();             // 학생

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "company_id")
    private Company company;                                        // 연구소


    /* 도메인 로직 */
    public void match(Company company, Student student) {
        if (company != null)
            this.company = company;

        if (student != null) {
            this.students.add(student);
            student.getDoneResearchers().add(this);
        }
    }
}
