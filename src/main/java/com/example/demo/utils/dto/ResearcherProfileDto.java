package com.example.demo.utils.dto;

import com.example.demo.domain.member.Company;
import com.example.demo.domain.member.Researcher;
import com.example.demo.domain.member.Student;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.util.List;
import java.util.stream.Collectors;

@Builder
@Getter
public class ResearcherProfileDto {

    private String name;
    private String workplace;
    private String role;
    private String capacity;
    private String introduce;
    private boolean isRewarded;
    private boolean forCompany;
    private boolean forStudent;
    private boolean isMania;
    private List<ResearcherMatchLogDto> matchLogs;


    @Builder
    @Getter
    public static class ResearcherMatchLogDto {

        private String name;
        private Type type;
        private boolean isRewarded;
        private Company.Seek seek;

        private enum Type {
            COMPANY,
            STUDENT
        }

        public static List<ResearcherMatchLogDto> of(List<Company> companies) {
            return companies.stream()
                    .map(company ->
                            ResearcherMatchLogDto.builder()
                                    .name(company.getName())
                                    .type(Type.COMPANY)
                                    .isRewarded(true)
                                    .seek(company.getSeek())
                                    .build())
                    .collect(Collectors.toList());
        }
    }


    public static ResearcherProfileDto of(Researcher researcher) {
        List<Company> companies = researcher.getCompanies();

        return ResearcherProfileDto.builder()
                .name(researcher.getName())
                .workplace(researcher.getWorkplace())
                .role(researcher.getRole())
                .capacity(researcher.getCapacity())
                .introduce(researcher.getIntroduce())
                .isRewarded(researcher.isRewarded())
                .forCompany(researcher.isForCompany())
                .forStudent(researcher.isForStudent())
                .isMania(researcher.isMania())
                .matchLogs(ResearcherMatchLogDto.of(companies))
                .build();
    }
}
