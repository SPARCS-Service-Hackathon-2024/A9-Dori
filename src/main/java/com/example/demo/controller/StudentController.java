package com.example.demo.controller;

import com.example.demo.service.StudentService;
import com.example.demo.utils.dto.StudentJoinDto;
import com.example.demo.utils.dto.StudentOfferDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RequiredArgsConstructor
@RequestMapping("/student")
@RestController
public class StudentController {

    private final StudentService studentService;


    @PostMapping("/join")
    public void join(@RequestBody StudentJoinDto dto) {
        studentService.join(dto);
    }

    @PostMapping("/offer")
    public void offer(@RequestBody StudentOfferDto dto) {
        studentService.offer(dto);
    }
}
