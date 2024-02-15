package com.example.demo.controller;

import com.example.demo.domain.member.Researcher;
import com.example.demo.service.ResearcherService;
import com.example.demo.utils.dto.ResearcherSearchDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Slf4j
@RequiredArgsConstructor
@RequestMapping("/search")
@RestController
public class SearchController {

    private final ResearcherService researcherService;


    @GetMapping
    public List<Researcher> search(@RequestBody ResearcherSearchDto dto) {
        return researcherService.search(dto);
    }
}
