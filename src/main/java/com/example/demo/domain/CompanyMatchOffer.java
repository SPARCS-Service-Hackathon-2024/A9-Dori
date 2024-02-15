package com.example.demo.domain;

import com.example.demo.domain.member.Company;
import com.example.demo.domain.member.Researcher;
import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class CompanyMatchOffer {

    @Id @GeneratedValue
    @Column(name = "company_match_offer_id")
    private Long id;

    private String name;
    private String contactReason;
    private String requirement;

    @ManyToOne
    @JoinColumn(name = "company_id")
    private Company company;

    @ManyToOne
    @JoinColumn(name = "researcher_id")
    private Researcher researcher;
}
