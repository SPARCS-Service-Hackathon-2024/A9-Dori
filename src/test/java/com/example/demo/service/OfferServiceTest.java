package com.example.demo.service;

import com.example.demo.domain.CompanyMatchOffer;
import com.example.demo.domain.member.Company;
import com.example.demo.domain.member.Researcher;
import com.example.demo.utils.dto.CompanyJoinDto;
import com.example.demo.utils.dto.CompanyOfferDto;
import com.example.demo.utils.dto.ResearcherJoinDto;
import com.example.demo.utils.dto.StudentJoinDto;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

@Transactional
@ExtendWith(SpringExtension.class)
@SpringBootTest
class OfferServiceTest {

    @Autowired
    OfferService offerService;

    @Autowired
    ResearcherService researcherService;

    @Autowired
    CompanyService companyService;

    @Autowired
    StudentService studentService;

    private List<ResearcherJoinDto> researcherDtos = new ArrayList<>();
    private List<CompanyJoinDto> companyDtos = new ArrayList<>();
    private List<StudentJoinDto> studentDtos = new ArrayList<>();

    @BeforeEach
    void init() {
        generateDomains();
    }

    @Test
    public void findCompanyOffers() throws Exception {
        // given
        List<Company> companies = companyService.findAll();
        List<Researcher> researchers = researcherService.findAll();

        // when
        for (int i = 0; i < 10; i++)
            companyService.offer(CompanyOfferDto.builder()
                    .contactReason("기술력")
                    .requirement("없어요")
                    .companyId(companies.get(i).getId())
                    .researcherId(researchers.get(i).getId())
                    .build());

        // then
        for (int i = 0; i < 10; i++) {
            List<CompanyMatchOffer> offers = offerService.findFromCompanyOffers(researchers.get(i).getId());
            assertThat(offers.size()).isEqualTo(1);
        }
    }

    private void generateDomains() {
        for (int i = 0; i < 10; i++) {
            researcherService.join(new ResearcherJoinDto(
                    "a"+i,
                    "jinkonu",
                    "1234",
                    "konu",
                    "지인 소개",
                    "여성",
                    "고졸",
                    "스킬",
                    "다 잘함",
                    "hi",
                    "안녕하세요",
                    true,
                    true,
                    true,
                    false
            ));

            companyService.join(new CompanyJoinDto(
                    "a"+i,
                    "jinkonu",
                    "1234",
                    "konu",
                    "지인 소개",
                    "여성",
                    "자문"
            ));

            studentService.join(new StudentJoinDto(
                    "a"+i,
                    "jinkonu",
                    "1234",
                    "konu",
                    "지인 소개",
                    "여성",
                    "자문",
                    "hi"
            ));
        }
    }
}