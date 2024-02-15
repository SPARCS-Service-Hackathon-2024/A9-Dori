package com.example.demo.utils.dto;

import com.example.demo.domain.CompanyMatchOffer;
import com.example.demo.domain.StudentMatchOffer;
import lombok.Builder;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Builder
@Data
public class OfferDto {

    private String contactReason;
    private String requirement;
    private boolean isRewarded;
    private String money;

    private Long clientId;
    private Long researcherId;

    private Type type;

    private enum Type {
        COMPANY,
        STUDENT
    }

    public static List<OfferDto> of(
            List<CompanyMatchOffer> companyOffers,
            List<StudentMatchOffer> studentOffers) {
        List<OfferDto> offers = new ArrayList<>();

        offers.addAll(
                companyOffers.stream()
                        .map(offer ->
                                OfferDto.builder()
                                        .contactReason(offer.getContactReason())
                                        .requirement(offer.getRequirement())
                                        .isRewarded(offer.isRewarded())
                                        .money(offer.getMoney())
                                        .clientId(offer.getCompany().getId())
                                        .researcherId(offer.getResearcher().getId())
                                        .type(Type.COMPANY)
                                        .build()).toList()
        );

        offers.addAll(
                studentOffers.stream()
                        .map(offer ->
                                OfferDto.builder()
                                        .contactReason(offer.getContactReason())
                                        .requirement(offer.getRequirement())
                                        .isRewarded(offer.isRewarded())
                                        .money(offer.getMoney())
                                        .clientId(offer.getStudent().getId())
                                        .researcherId(offer.getResearcher().getId())
                                        .type(Type.STUDENT)
                                        .build()).toList()
        );

        return offers;
    }
}
