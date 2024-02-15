package com.example.demo.repository;

import com.example.demo.domain.StudentMatchOffer;
import com.example.demo.domain.member.Researcher;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface StudentMatchOfferRepository extends JpaRepository<StudentMatchOffer, Long> {
    public List<StudentMatchOffer> findByResearcher(Researcher researcher);
}
