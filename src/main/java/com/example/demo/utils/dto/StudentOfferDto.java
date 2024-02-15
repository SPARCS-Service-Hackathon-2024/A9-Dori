package com.example.demo.utils.dto;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class StudentOfferDto {

    private String contactReason;
    private String requirement;
    private String money;
    private boolean isRewarded;

    private Long studentId;
    private Long researcherId;
}
