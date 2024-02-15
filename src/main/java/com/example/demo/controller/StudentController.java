package com.example.demo.controller;

import com.example.demo.service.OfferService;
import com.example.demo.service.StudentService;
import com.example.demo.utils.dto.OfferDto;
import com.example.demo.utils.dto.StudentJoinDto;
import com.example.demo.utils.dto.StudentOfferDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RequiredArgsConstructor
@RequestMapping("/student")
@RestController
public class StudentController {

    private final StudentService studentService;
    private final OfferService offerService;


    @PostMapping("/join")
    public void join(@RequestBody StudentJoinDto dto) {
        studentService.join(dto);
    }

    @PostMapping("/offer")
    public void offer(@RequestBody StudentOfferDto dto) {
        studentService.offer(dto);
    }

    @GetMapping("/{id}/offers")
    public List<OfferDto> offers(@PathVariable("id") String id) {
        return offerService.findToStudentOffers(id);
    }

    @PostMapping("/offer/{id}/accept")
    public void acceptOffer(@PathVariable("id") Long offerId) {
        studentService.acceptOffer(offerId);
    }
}
