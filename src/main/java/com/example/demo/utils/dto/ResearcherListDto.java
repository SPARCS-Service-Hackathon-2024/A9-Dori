package com.example.demo.utils.dto;

import com.example.demo.domain.member.Researcher;
import lombok.Builder;
import lombok.Getter;

@Builder
@Getter
public class ResearcherListDto {

    private String name;
    private String workplace;
    private String role;
    private String capacity;
    private boolean isRewarded;
    private boolean forCompany;
    private boolean forStudent;
    private boolean isWorking;
    private boolean isMania;

    public static ResearcherListDto of(Researcher researcher) {
        return ResearcherListDto.builder()
                .name(researcher.getName())
                .workplace(researcher.getWorkplace())
                .role(researcher.getRole())
                .capacity(researcher.getCapacity())
                .isRewarded(researcher.isRewarded())
                .forCompany(researcher.isForCompany())
                .forStudent(researcher.isForStudent())
                .isMania(researcher.isMania())
                .build();
    }
}
