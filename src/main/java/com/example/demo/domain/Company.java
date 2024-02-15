package com.example.demo.domain;

import com.example.demo.domain.sub.Member;
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
    private String name;
    private String joinReason;
    private Seek seek;
    private boolean isMania;

    /* 연관 데이터 */
    @OneToMany(mappedBy = "company")
    private List<Researcher> researchers = new ArrayList<>();

    public enum Seek {
        CONSULTATION,
        RECRUIT,
        ETC
    }
}
