package com.example.demo.service;

import com.example.demo.domain.Researcher;
import com.example.demo.repository.ResearcherRepository;
import com.example.demo.utils.dto.ResearcherJoinDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@RequiredArgsConstructor
@Service
public class ResearcherService {

    private final ResearcherRepository researcherRepository;

    @Transactional
    public Researcher join(ResearcherJoinDto dto) {
        return researcherRepository.save(dto.toEntity());
    }

    
}
