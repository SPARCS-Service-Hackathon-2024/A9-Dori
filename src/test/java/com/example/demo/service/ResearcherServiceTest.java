package com.example.demo.service;

import com.example.demo.domain.Researcher;
import com.example.demo.domain.Strength;
import com.example.demo.repository.StrengthRepository;
import com.example.demo.utils.dto.ResearcherJoinDto;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.transaction.annotation.Transactional;

import java.util.Set;

import static org.assertj.core.api.Assertions.assertThat;

@Transactional
@ExtendWith(SpringExtension.class)
@SpringBootTest
class ResearcherServiceTest {

    @Autowired
    ResearcherService researcherService;

    @Autowired
    StrengthRepository strengthRepository;

    @Test
    public void join() throws Exception {
        // given
        ResearcherJoinDto dto = new ResearcherJoinDto(
                "jinkonu",
                "1234",
                "konu",
                "지인 소개",
                "여성",
                "고졸",
                "백엔드 전문",
                false,
                "안녕하세요",
                Set.of("1", "2"),
                Set.of("스킬", "아이디어")
        );

        // when
        Researcher researcher = researcherService.join(dto);

        // then
        assertThat(researcher.getName()).isEqualTo("konu");
        assertThat(strengthRepository.findAll()).isNotEmpty();
    }
}