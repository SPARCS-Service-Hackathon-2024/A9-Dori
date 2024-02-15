package com.example.demo.domain.member;

import com.example.demo.domain.nonEntity.Member;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Company extends Member {

    @Id @GeneratedValue
    @Column(name = "company_id")
    private Long id;

    /* 비연관 데이터 */
    private String name;        // 이름
    private String joinReason;  // 가입 이유
    private String introduce;   // 소개말
    private Seek seek;          // 검색 조건
    private boolean isMania;    // 도리 매니아 여부

    /* 연관 데이터 */
    @OneToMany(mappedBy = "company")
    private List<Researcher> researchers = new ArrayList<>();

    public enum Seek {
        CONSULTATION,
        RECRUIT,
        ETC
    }
}
