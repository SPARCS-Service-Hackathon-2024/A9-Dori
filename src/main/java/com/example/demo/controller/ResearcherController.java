package com.example.demo.controller;

import com.example.demo.domain.member.Researcher;
import com.example.demo.service.ResearcherService;
import com.example.demo.utils.dto.ResearcherJoinDto;
import com.example.demo.utils.dto.ResearcherListDto;
import com.example.demo.utils.dto.ResearcherProfileDto;
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
}
