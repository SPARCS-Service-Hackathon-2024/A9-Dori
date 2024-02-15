package com.example.demo.utils.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Builder
@Getter @Setter
public class ResearcherSearchDto {

    String query;
    String strength;
    Boolean isRewarded;
    Boolean forCompany;
    Boolean forStudent;
    Boolean isMania;
}
