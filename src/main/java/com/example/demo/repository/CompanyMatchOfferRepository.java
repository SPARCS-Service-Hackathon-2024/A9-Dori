package com.example.demo.repository;

import com.example.demo.domain.CompanyMatchOffer;
import com.example.demo.domain.member.Researcher;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CompanyMatchOfferRepository extends JpaRepository<CompanyMatchOffer, Long> {
    public List<CompanyMatchOffer> findByResearcher(Researcher researcher);
}
