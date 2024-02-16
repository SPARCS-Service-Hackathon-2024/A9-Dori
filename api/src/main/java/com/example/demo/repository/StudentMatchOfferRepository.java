package com.example.demo.repository;

import com.example.demo.domain.StudentMatchOffer;
import com.example.demo.domain.member.Researcher;
import com.example.demo.domain.member.Student;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface StudentMatchOfferRepository extends JpaRepository<StudentMatchOffer, Long> {

    public List<StudentMatchOffer> findByStudentAndFromResearcherTrue(Student student);
    public List<StudentMatchOffer> findByResearcherAndFromResearcherFalse(Researcher researcher);
}
