package com.example.demo.utils.dto;

import com.example.demo.domain.CompanyMatchOffer;
import com.example.demo.domain.StudentMatchOffer;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

@Builder
@Data
public class OfferDto {

    private String contactReason;
    private String requirement;
    private boolean isRewarded;
    private String money;
    private LocalDateTime createdAt;

    private String clientId;
    private String researcherId;

    private Type type;

    private enum Type {
        COMPANY,
        STUDENT
    }

    public static List<OfferDto> ofCompany(List<CompanyMatchOffer> offers) {
        return offers.stream()
                .map(offer ->
                        OfferDto.builder()
                                .contactReason(offer.getContactReason())
                                .requirement(offer.getRequirement())
                                .isRewarded(offer.isRewarded())
                                .money(offer.getMoney())
                                .createdAt(offer.getCreatedAt())
                                .clientId(offer.getCompany().getId())
                                .researcherId(offer.getResearcher().getId())
                                .type(Type.COMPANY)
                                .build())
                .sorted(Comparator.comparing(OfferDto::getCreatedAt).reversed())
                .collect(Collectors.toList());
    }

    public static List<OfferDto> ofStudent(List<StudentMatchOffer> offers) {
        return offers.stream()
                .map(offer ->
                        OfferDto.builder()
                                .contactReason(offer.getContactReason())
                                .requirement(offer.getRequirement())
                                .isRewarded(offer.isRewarded())
                                .money(offer.getMoney())
                                .createdAt(offer.getCreatedAt())
                                .clientId(offer.getStudent().getId())
                                .researcherId(offer.getResearcher().getId())
                                .type(Type.STUDENT)
                                .build())
                .sorted(Comparator.comparing(OfferDto::getCreatedAt).reversed())
                .collect(Collectors.toList());
    }
}
