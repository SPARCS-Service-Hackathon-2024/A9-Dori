package com.example.demo.service;

import com.example.demo.domain.member.Company;
import com.example.demo.domain.member.Researcher;
import com.example.demo.domain.member.Student;
import com.example.demo.domain.nonEntity.Strength;
import com.example.demo.utils.dto.CompanyJoinDto;
import com.example.demo.utils.dto.ResearcherJoinDto;
import com.example.demo.utils.dto.ResearcherSearchDto;
import com.example.demo.utils.dto.StudentJoinDto;
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

import static org.assertj.core.api.Assertions.assertThat;

@Transactional
@ExtendWith(SpringExtension.class)
@SpringBootTest
class ResearcherServiceTest {

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
        generateDto();
    }

    @Rollback(value = false)
    @Test
    public void join() throws Exception {
        // given

        // when
        Researcher researcher = researcherService.join(researcherDtos.get(0));

        // then
        assertThat(researcher.getName()).isEqualTo("konu");
        assertThat(researcher.getStrength()).isEqualTo(Strength.SKILL);
    }

    @Test
    public void find() throws Exception {
        // given
        for (int i = 0; i < 10; i++)
            researcherService.join(researcherDtos.get(i));

        // when
        List<Researcher> researchers = researcherService.search(
                ResearcherSearchDto.builder()
                        .query("konu")
                        .isRewarded(true)
                        .forCompany(true)
                        .build()
        );

        // then
        assertThat(researchers.size()).isEqualTo(10);
    }

    @Test
    public void matchCompany() throws Exception {
        // given
        Researcher researcher = researcherService.join(researcherDtos.get(0));
        for (CompanyJoinDto dto : companyDtos)
            companyService.join(dto);

        // when

        // then
        assertThat(researcher.getCompanies().size()).isEqualTo(10);
    }

    @Test
    public void matchStudent() throws Exception {
        // given
        Researcher researcher = researcherService.join(researcherDtos.get(0));
        for (StudentJoinDto dto : studentDtos)
            studentService.join(dto);

        // when
//        List<Student> students = studentService.findAll();
//        students.forEach(student ->
//                researcherService.acceptOfferFromStudent(researcher.getId(), student.getId()));

        // then
        assertThat(researcher.getStudents().size()).isEqualTo(10);
    }


    private void generateDto() {
        for (int i = 0; i < 10; i++) {
            researcherDtos.add(new ResearcherJoinDto(
                    "a"+i,
                    "jinkonu",
                    "1234",
                    "konu",
                    "지인 소개",
                    "여성",
                    "고졸",
                    "스킬",
                    "다 잘함",
                    "국장",
                    "안녕하세요",
                    true,
                    true,
                    true,
                    true
            ));

            companyDtos.add(new CompanyJoinDto(
                    "a"+i,
                    "jinkonu",
                    "1234",
                    "konu",
                    "지인 소개",
                    "여성",
                    "자문"
            ));

            studentDtos.add(new StudentJoinDto(
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