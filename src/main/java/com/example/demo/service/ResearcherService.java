package com.example.demo.service;

import com.example.demo.domain.CompanyMatchOffer;
import com.example.demo.domain.StudentMatchOffer;
import com.example.demo.domain.member.Company;
import com.example.demo.domain.member.Researcher;
import com.example.demo.domain.member.Student;
import com.example.demo.repository.*;
import com.example.demo.utils.dto.CompanyOfferDto;
import com.example.demo.utils.dto.ResearcherJoinDto;
import com.example.demo.utils.dto.ResearcherSearchDto;
import com.example.demo.utils.dto.StudentOfferDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@RequiredArgsConstructor
@Service
public class ResearcherService {

    private final ResearcherRepository researcherRepository;
    private final ResearcherQueryDslRepository researcherQueryDslRepository;
    private final CompanyRepository companyRepository;
    private final StudentRepository studentRepository;
    private final CompanyMatchOfferRepository companyOfferRepository;
    private final StudentMatchOfferRepository studentOfferRepository;

    @Transactional
    public Researcher join(ResearcherJoinDto dto) {
        return researcherRepository.save(dto.toEntity());
    }

    @Transactional
    public List<Researcher> search(ResearcherSearchDto dto) {
        return researcherQueryDslRepository.search(dto);
    }

    @Transactional
    public Researcher findBy(String id) {
        return researcherRepository.findById(id).get();
    }

    @Transactional
    public List<Researcher> findAll() {
        return researcherRepository.findAll();
    }

    @Transactional
    public CompanyMatchOffer offerToCompany(CompanyOfferDto dto) {
        Researcher researcher = researcherRepository.findById(dto.getResearcherId()).get();
        Company company = companyRepository.findById(dto.getCompanyId()).get();

        CompanyMatchOffer offer = CompanyMatchOffer.builder()
                .name(company.getName())
                .contactReason(dto.getContactReason())
                .requirement(dto.getRequirement())
                .money(dto.getMoney())
                .isRewarded(dto.isRewarded())
                .fromResearcher(true)
                .company(company)
                .researcher(researcher)
                .build();

        return companyOfferRepository.save(offer);
    }

    @Transactional
    public StudentMatchOffer offerToStudent(StudentOfferDto dto) {
        Student student = studentRepository.findById(dto.getStudentId()).get();
        Researcher researcher = researcherRepository.findById(dto.getResearcherId()).get();

        StudentMatchOffer offer = StudentMatchOffer.builder()
                .name(student.getName())
                .school(student.getSchool())
                .contactReason(dto.getContactReason())
                .requirement(dto.getRequirement())
                .money(dto.getMoney())
                .isRewarded(dto.isRewarded())
                .fromResearcher(true)
                .student(student)
                .researcher(researcher)
                .build();

        return studentOfferRepository.save(offer);
    }

    @Transactional
    public void matchCompany(String researcherId, String companyId) {
        Researcher researcher = researcherRepository.findById(researcherId).get();
        Company company = companyRepository.findById(companyId).get();

        researcher.match(company, null);
    }

    @Transactional
    public void matchStudent(String researcherId, String studentId) {
        Researcher researcher = researcherRepository.findById(researcherId).get();
        Student student = studentRepository.findById(studentId).get();

        researcher.match(null, student);
    }
}
