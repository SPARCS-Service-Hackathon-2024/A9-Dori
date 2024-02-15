package com.example.demo.utils.dto;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class CompanyOfferDto {

    private String contactReason;
    private String requirement;

    private Long companyId;
    private Long researcherId;
}
