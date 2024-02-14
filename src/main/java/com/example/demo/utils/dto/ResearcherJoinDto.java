package com.example.demo.utils.dto;

import com.example.demo.domain.FormerWorkplace;
import com.example.demo.domain.Researcher;
import com.example.demo.domain.Strength;
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
    private String capacity;
    private boolean isWorking;
    private String profile;
    private Set<String> formerWorkplaces;
    private Set<String> strengths;

    public Researcher toEntity() {
        Researcher researcher = Researcher.builder()
                .gender(Gender.of(gender))
                .degree(Degree.of(degree))
                .capacity(capacity)
                .isWorking(isWorking)
                .profile(profile)
                .formerWorkplaces(FormerWorkplace.of(formerWorkplaces))
                .strengths(Strength.of(strengths))
                .build();
        researcher.join(loginId, password, name, joinReason);

        return researcher;
    }
}
