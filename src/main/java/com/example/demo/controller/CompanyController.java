package com.example.demo.controller;

import com.example.demo.service.CompanyService;
import com.example.demo.service.OfferService;
import com.example.demo.utils.dto.CompanyJoinDto;
import com.example.demo.utils.dto.CompanyOfferDto;
import com.example.demo.utils.dto.OfferDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RequiredArgsConstructor
@RequestMapping("/company")
@RestController
public class CompanyController {

    private final CompanyService companyService;
    private final OfferService offerService;


    @PostMapping("/join")
    public void join(@RequestBody CompanyJoinDto dto) {
        companyService.join(dto);
    }

    @PostMapping("/offer")
    public void offer(@RequestBody CompanyOfferDto dto) {
        companyService.offer(dto);
    }

    @GetMapping("/{id}/offers")
    public List<OfferDto> offers(@PathVariable("id") String id) {
        return offerService.findToCompanyOffers(id);
    }

    @PostMapping("/offer/{id}/accept")
    public void acceptOffer(@PathVariable("id") Long offerId) {
        companyService.acceptOffer(offerId);
    }
}
