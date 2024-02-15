package com.example.demo.controller;

import com.example.demo.domain.member.Researcher;
import com.example.demo.service.OfferService;
import com.example.demo.service.ResearcherService;
import com.example.demo.utils.dto.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

@Slf4j
@RequiredArgsConstructor
@RequestMapping("/researcher")
@RestController
public class ResearcherController {

    private final ResearcherService researcherService;
    private final OfferService offerService;


    @PostMapping("/join")
    public void join(@RequestBody ResearcherJoinDto dto) {
        researcherService.join(dto);
    }

    @GetMapping("/{id}")
    public ResearcherProfileDto profile(@PathVariable String id) {
        Researcher researcher = researcherService.findBy(id);

        return ResearcherProfileDto.of(researcher);
    }

    @GetMapping("/list")
    public List<ResearcherListDto> researchers() {
        return researcherService.findAll().stream()
                .map(ResearcherListDto::of)
                .sorted(Comparator.comparing(ResearcherListDto::getCreatedAt).reversed())
                .collect(Collectors.toList());
    }

    @GetMapping("/{id}/offers/company")
    public List<OfferDto> offersFromCompany(@PathVariable String id) {
        return offerService.findFromCompanyOffers(id);
    }

    @GetMapping("/{id}/offers/student")
    public List<OfferDto> offersFromStudent(@PathVariable String id) {
        return offerService.findFromStudentOffers(id);
    }

    @PostMapping("/offer/company")
    public void offer(@RequestBody CompanyOfferDto dto) {
        researcherService.offerToCompany(dto);
    }

    @PostMapping("/offer/student")
    public void offer(@RequestBody StudentOfferDto dto) {
        researcherService.offerToStudent(dto);
    }

    @PostMapping("/offer/company/{id}/accept")
    public void acceptOfferFromCompany(@PathVariable("id") Long offerId) {
        researcherService.acceptOfferFromCompany(offerId);
    }

    @PostMapping("/offer/student/{id}/accept")
    public void acceptOfferFromStudent(@PathVariable("id") Long offerId) {
        researcherService.acceptOfferFromStudent(offerId);
    }
}
