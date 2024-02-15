package com.example.demo.utils.dto;

import com.example.demo.domain.nonEntity.Strength;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Builder
@Getter @Setter
public class ResearcherSearchDto {

    String query;
    Strength strength;
    Boolean isRewarded;
    Boolean forCompany;
    Boolean forStudent;
    Boolean isMania;
}
