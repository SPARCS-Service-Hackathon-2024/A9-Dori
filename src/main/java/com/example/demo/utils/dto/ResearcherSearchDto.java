package com.example.demo.utils.dto;

import com.example.demo.domain.Strength;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Builder
@Getter @Setter
public class ResearcherSearchDto {

    String query;
    Strength strength;
    boolean isRewarded;
    boolean forCompany;
    boolean forStudent;
}
