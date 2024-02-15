package com.example.demo.controller;

import com.example.demo.domain.CompanyMatchOffer;
import com.example.demo.domain.StudentMatchOffer;
import com.example.demo.domain.member.Researcher;
import com.example.demo.service.OfferService;
import com.example.demo.service.ResearcherService;
import com.example.demo.utils.dto.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

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
    public ResearcherProfileDto profile(@PathVariable Long id) {
        Researcher researcher = researcherService.findBy(id);

        return ResearcherProfileDto.of(researcher);
    }

    @GetMapping("/list")
    public List<ResearcherListDto> researchers() {
        return researcherService.findAll().stream()
                .map(ResearcherListDto::of)
                .collect(Collectors.toList());
    }

    @GetMapping("/{id}/offers")
    public List<OfferDto> offers(@PathVariable Long id) {
        List<CompanyMatchOffer> companyOffers = offerService.findCompanyOffers(id);
        List<StudentMatchOffer> studentOffers = offerService.findStudentOffers(id);

        return OfferDto.of(companyOffers, studentOffers);
    }
}
