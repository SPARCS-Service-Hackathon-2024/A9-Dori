package com.example.demo.service;

import com.example.demo.domain.member.Company;
import com.example.demo.domain.member.Researcher;
import com.example.demo.domain.member.Student;
import com.example.demo.domain.nonEntity.Strength;
import com.example.demo.repository.*;
import com.example.demo.utils.dto.ResearcherJoinDto;
import com.example.demo.utils.dto.ResearcherSearchDto;
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

    @Transactional
    public Researcher join(ResearcherJoinDto dto) {
        return researcherRepository.save(dto.toEntity());
    }

    @Transactional
    public List<Researcher> find(
            String query,
            Boolean isRewarded,
            Boolean forCompany,
            Boolean forStudent,
            Strength strength
    ) {
        ResearcherSearchDto dto = ResearcherSearchDto.builder()
                .query(query)
                .isRewarded(isRewarded)
                .forCompany(forCompany)
                .forStudent(forStudent)
                .strength(strength)
                .build();

        return researcherQueryDslRepository.search(dto);
    }

    @Transactional
    public List<Researcher> findAll() {
        return researcherRepository.findAll();
    }

    @Transactional
    public void matchCompany(Long researcherId, Long companyId) {
        Researcher researcher = researcherRepository.findById(researcherId).get();
        Company company = companyRepository.findById(companyId).get();

        researcher.match(company, null);
    }

    @Transactional
    public void matchStudent(Long researcherId, Long studentId) {
        Researcher researcher = researcherRepository.findById(researcherId).get();
        Student student = studentRepository.findById(studentId).get();

        researcher.match(null, student);
    }
}
