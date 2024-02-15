package com.example.demo.service;

import com.example.demo.domain.CompanyMatchOffer;
import com.example.demo.domain.member.Company;
import com.example.demo.domain.member.Researcher;
import com.example.demo.repository.CompanyMatchOfferRepository;
import com.example.demo.repository.CompanyRepository;
import com.example.demo.repository.ResearcherRepository;
import com.example.demo.utils.dto.CompanyJoinDto;
import com.example.demo.utils.dto.CompanyOfferDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@RequiredArgsConstructor
@Service
public class CompanyService {

    private final CompanyRepository companyRepository;
    private final ResearcherRepository researcherRepository;
    private final CompanyMatchOfferRepository offerRepository;

    @Transactional
    public Company join(CompanyJoinDto dto) {
        return companyRepository.save(dto.toEntity());
    }

    @Transactional
    public CompanyMatchOffer offer(CompanyOfferDto dto) {
        Company company = companyRepository.findById(dto.getCompanyId()).get();
        Researcher researcher = researcherRepository.findById(dto.getResearcherId()).get();

        CompanyMatchOffer offer = CompanyMatchOffer.builder()
                .name(company.getName())
                .contactReason(dto.getContactReason())
                .requirement(dto.getRequirement())
                .company(company)
                .researcher(researcher)
                .build();

        return offerRepository.save(offer);
    }

    @Transactional
    public List<Company> findAll() {
        return companyRepository.findAll();
    }
}
