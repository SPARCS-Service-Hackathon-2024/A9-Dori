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

    /* 연관 데이터 */
    @OneToMany(mappedBy = "company")
    private List<Researcher> researchers = new ArrayList<>();
}
