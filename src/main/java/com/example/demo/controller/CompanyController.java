package com.example.demo.controller;

import com.example.demo.service.CompanyService;
import com.example.demo.utils.dto.CompanyJoinDto;
import com.example.demo.utils.dto.CompanyOfferDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RequiredArgsConstructor
@RequestMapping("/student")
@RestController
public class CompanyController {

    private final CompanyService companyService;


    @PostMapping("/join")
    public void join(@RequestBody CompanyJoinDto dto) {
        companyService.join(dto);
    }

    @PostMapping("/offer")
    public void offer(@RequestBody CompanyOfferDto dto) {
        companyService.offer(dto);
    }
}
