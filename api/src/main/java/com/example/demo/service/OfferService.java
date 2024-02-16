package com.example.demo.service;

import com.example.demo.domain.member.Company;
import com.example.demo.domain.member.Researcher;
import com.example.demo.domain.member.Student;
import com.example.demo.repository.*;
import com.example.demo.utils.dto.OfferDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@RequiredArgsConstructor
@Service
public class OfferService {

    private final CompanyMatchOfferRepository companyMatchOfferRepository;
    private final StudentMatchOfferRepository studentMatchOfferRepository;
    private final ResearcherRepository researcherRepository;
    private final CompanyRepository companyRepository;
    private final StudentRepository studentRepository;

    @Transactional
    public List<OfferDto> findFromCompanyOffers(String researcherId) {
        Researcher researcher = researcherRepository.findById(researcherId).get();

        return OfferDto.ofCompany(companyMatchOfferRepository.findByResearcherAndFromResearcherFalse(researcher));
    }

    @Transactional
    public List<OfferDto> findFromStudentOffers(String researcherId) {
        Researcher researcher = researcherRepository.findById(researcherId).get();

        return OfferDto.ofStudent(studentMatchOfferRepository.findByResearcherAndFromResearcherFalse(researcher));
    }

    @Transactional
    public List<OfferDto> findToCompanyOffers(String companyId) {
        Company company = companyRepository.findById(companyId).get();

        return OfferDto.ofCompany(companyMatchOfferRepository.findByCompanyAndFromResearcherTrue(company));
    }

    @Transactional
    public List<OfferDto> findToStudentOffers(String studentId) {
        Student student = studentRepository.findById(studentId).get();

        return OfferDto.ofStudent(studentMatchOfferRepository.findByStudentAndFromResearcherTrue(student));
    }
}
