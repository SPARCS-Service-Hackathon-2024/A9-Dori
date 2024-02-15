package com.example.demo.utils.dto;

import com.example.demo.utils.deprecated.FormerWorkplace;
import com.example.demo.domain.member.Researcher;
import com.example.demo.domain.nonEntity.Strength;
import com.example.demo.domain.nonEntity.Degree;
import com.example.demo.domain.nonEntity.Gender;
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
    private String role;
    private String workplace;
    private Boolean isWorking;
    private Boolean isRewarded;
    private Boolean forCompany;
    private Boolean forStudent;

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
                .workplace(workplace)
                .build();
        researcher.join(loginId, password);

        return researcher;
    }
}
