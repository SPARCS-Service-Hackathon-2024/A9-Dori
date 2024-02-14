package com.example.demo.service;

import com.example.demo.domain.Researcher;
import com.example.demo.domain.Strength;
import com.example.demo.utils.dto.ResearcherJoinDto;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.fail;

@Transactional
@ExtendWith(SpringExtension.class)
@SpringBootTest
class ResearcherServiceTest {

    @Autowired
    ResearcherService researcherService;

    private List<ResearcherJoinDto> dtos = new ArrayList<>();

    @BeforeEach
    void init() {
        generateDto();
    }

    @Test
    public void join() throws Exception {
        // given

        // when
        Researcher researcher = researcherService.join(dtos.get(0));

        // then
        assertThat(researcher.getName()).isEqualTo("konu");
        assertThat(researcher.getStrength()).isEqualTo(Strength.SKILL);
    }

    @Test
    public void find() throws Exception {
        // given

        // when
        List<Researcher> researchers = researcherService.find("jinkonu", false, false, false, Strength.SKILL);

        // then
        System.out.println("researchers = " + researchers);
    }

    private void generateDto() {
        for (int i = 0; i < 10; i++) {
            dtos.add(new ResearcherJoinDto(
                    "jinkonu",
                    "1234",
                    "konu",
                    "지인 소개",
                    "여성",
                    "고졸",
                    "백엔드 전문",
                    "다 잘함",
                    false,
                    "안녕하세요",
                    "스킬",
                    Set.of("1", "2")
            ));
        }
    }
}