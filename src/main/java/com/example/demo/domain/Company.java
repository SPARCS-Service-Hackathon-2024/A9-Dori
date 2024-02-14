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

    @ManyToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinTable(
            joinColumns = @JoinColumn(name = "image_id"),
            inverseJoinColumns = @JoinColumn(name = "researcher_id")
    )
    private List<Image> images = new ArrayList<>();                 // 이미지
}
