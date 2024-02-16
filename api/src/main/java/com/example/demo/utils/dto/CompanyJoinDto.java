package com.example.demo.utils.dto;

import com.example.demo.domain.member.Company;
import com.example.demo.domain.member.Company.Seek;
import lombok.AllArgsConstructor;

@AllArgsConstructor
public class CompanyJoinDto {

    private String id;
    private String loginId;
    private String password;

    private String name;        // 이름
    private String joinReason;  // 가입 이유
    private String introduce;   // 소개말
    private String seek;          // 검색 조건

    public Company toEntity() {
        Company company = Company.builder()
                .id(id)
                .name(name)
                .joinReason(joinReason)
                .introduce(introduce)
                .seek(Seek.of(seek))
                .build();
        company.join(loginId, password);

        return company;
    }
}
