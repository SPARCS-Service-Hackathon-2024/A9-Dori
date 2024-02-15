package com.example.demo.utils.dto;

import com.example.demo.domain.FormerWorkplace;
import com.example.demo.domain.Researcher;
import com.example.demo.domain.sub.Strength;
import com.example.demo.domain.sub.Degree;
import com.example.demo.domain.sub.Gender;
import lombok.AllArgsConstructor;

import java.util.Set;

@AllArgsConstructor
public class ResearcherJoinDto {

    private String loginId;
    private String password;
    private String name;
    private String joinReason;

    private String gender;
    private String degree;
    private String strength;
    private String capacity;
    private Boolean isWorking;
    private String role;
    private Boolean isRewarded;
    private Boolean forCompany;
    private Boolean forStudent;
    private Set<String> formerWorkplaces;

    public Researcher toEntity() {
        Researcher researcher = Researcher.builder()
                .name(name)
                .joinReason(joinReason)
                .gender(Gender.of(gender))
                .degree(Degree.of(degree))
                .strength(Strength.of(strength))
                .capacity(capacity)
                .isWorking(isWorking)
                .role(role)
                .isRewarded(isRewarded)
                .forCompany(forCompany)
                .forStudent(forStudent)
                .formerWorkplaces(FormerWorkplace.of(formerWorkplaces))
                .build();
        researcher.join(loginId, password);

        return researcher;
    }
}
