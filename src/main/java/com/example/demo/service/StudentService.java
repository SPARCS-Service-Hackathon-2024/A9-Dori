package com.example.demo.service;

import com.example.demo.domain.StudentMatchOffer;
import com.example.demo.domain.member.Researcher;
import com.example.demo.domain.member.Student;
import com.example.demo.repository.ResearcherRepository;
import com.example.demo.repository.StudentMatchOfferRepository;
import com.example.demo.repository.StudentRepository;
import com.example.demo.utils.dto.StudentJoinDto;
import com.example.demo.utils.dto.StudentOfferDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@RequiredArgsConstructor
@Service
public class StudentService {

    private final StudentRepository studentRepository;
    private final ResearcherRepository researcherRepository;
    private final StudentMatchOfferRepository offerRepository;

    @Transactional
    public Student join(StudentJoinDto dto) {
        return studentRepository.save(dto.toEntity());
    }

    @Transactional
    public StudentMatchOffer offer(StudentOfferDto dto) {
        Student student = studentRepository.findById(dto.getStudentId()).get();
        Researcher researcher = researcherRepository.findById(dto.getResearcherId()).get();

        StudentMatchOffer offer = StudentMatchOffer.builder()
                .name(student.getName())
                .school(student.getSchool())
                .contactReason(dto.getContactReason())
                .requirement(dto.getRequirement())
                .student(student)
                .researcher(researcher)
                .build();

        return offerRepository.save(offer);
    }

    @Transactional
    public List<Student> findAll() {
        return studentRepository.findAll();
    }
}
