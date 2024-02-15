package com.example.demo.service;

import com.example.demo.domain.CompanyMatchOffer;
import com.example.demo.domain.StudentMatchOffer;
import com.example.demo.domain.member.Researcher;
import com.example.demo.repository.CompanyMatchOfferRepository;
import com.example.demo.repository.ResearcherRepository;
import com.example.demo.repository.StudentMatchOfferRepository;
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

    @Transactional
    public List<CompanyMatchOffer> findCompanyOffers(String researcherId) {
        Researcher researcher = researcherRepository.findById(researcherId).get();

        return companyMatchOfferRepository.findByResearcher(researcher);
    }

    @Transactional
    public List<StudentMatchOffer> findStudentOffers(String researcherId) {
        Researcher researcher = researcherRepository.findById(researcherId).get();

        return studentMatchOfferRepository.findByResearcher(researcher);
    }
}
