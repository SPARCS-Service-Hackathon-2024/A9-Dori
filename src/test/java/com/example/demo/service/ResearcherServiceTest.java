package com.example.demo.service;

import com.example.demo.domain.Researcher;
import com.example.demo.domain.sub.Strength;
import com.example.demo.utils.dto.ResearcherJoinDto;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Rollback;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import static org.assertj.core.api.Assertions.assertThat;

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

    @Rollback(value = false)
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
        for (int i = 0; i < 10; i++)
            researcherService.join(dtos.get(i));

        // when
        List<Researcher> researchers = researcherService.find("konu", true, true, true, Strength.SKILL);

        // then
        assertThat(researchers.size()).isEqualTo(10);
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
                    "스킬",
                    "다 잘함",
                    false,
                    "안녕하세요",
                    true,
                    true,
                    true,
                    Set.of("1", "2")
            ));
        }
    }
}