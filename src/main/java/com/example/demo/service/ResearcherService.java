package com.example.demo.service;

import com.example.demo.domain.Researcher;
import com.example.demo.domain.Strength;
import com.example.demo.repository.ResearcherQueryDslRepository;
import com.example.demo.repository.ResearcherRepository;
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

    @Transactional
    public Researcher join(ResearcherJoinDto dto) {
        return researcherRepository.save(dto.toEntity());
    }

    @Transactional
    public List<Researcher> find(
            String query,
            boolean isRewarded,
            boolean forCompany,
            boolean forStudent,
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
}
