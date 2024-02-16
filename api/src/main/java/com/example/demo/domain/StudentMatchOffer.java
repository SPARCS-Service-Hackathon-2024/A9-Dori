package com.example.demo.domain;

import com.example.demo.domain.member.Researcher;
import com.example.demo.domain.member.Student;
import com.example.demo.utils.domain.BaseEntity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
@Entity
public class StudentMatchOffer extends BaseEntity {

    @Id @GeneratedValue
    @Column(name = "student_match_offer_id")
    private Long id;

    private String name;
    private String school;
    private String contactReason;
    private String requirement;
    private String money;
    private boolean isRewarded;
    private boolean fromResearcher;

    @ManyToOne
    @JoinColumn(name = "student_id")
    private Student student;

    @ManyToOne
    @JoinColumn(name = "researcher_id")
    private Researcher researcher;


    /* 도메인 로직 */
}
