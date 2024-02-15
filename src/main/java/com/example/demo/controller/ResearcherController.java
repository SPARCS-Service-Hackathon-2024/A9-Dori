package com.example.demo.controller;

import com.example.demo.domain.member.Researcher;
import com.example.demo.service.ResearcherService;
import com.example.demo.utils.dto.ResearcherJoinDto;
import com.example.demo.utils.dto.ResearcherProfileDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RequiredArgsConstructor
@RequestMapping("/researcher")
@RestController
public class ResearcherController {

    private final ResearcherService researcherService;


    @GetMapping("/{id}")
    public ResearcherProfileDto profile(@PathVariable Long id) {
        Researcher researcher = researcherService.findBy(id);

        return ResearcherProfileDto.of(researcher);
    }

    @PostMapping("/join")
    public void join(@RequestBody ResearcherJoinDto dto) {
        researcherService.join(dto);
    }
}
