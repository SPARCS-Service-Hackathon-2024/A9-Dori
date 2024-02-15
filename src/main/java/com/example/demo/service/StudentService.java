package com.example.demo.service;

import com.example.demo.domain.member.Researcher;
import com.example.demo.domain.member.Student;
import com.example.demo.repository.ResearcherRepository;
import com.example.demo.repository.StudentRepository;
import com.example.demo.utils.dto.StudentJoinDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@RequiredArgsConstructor
@Service
public class StudentService {

    private StudentRepository studentRepository;
    private ResearcherRepository researcherRepository;

    @Transactional
    public Student join(StudentJoinDto dto) {
        return studentRepository.save(dto.toEntity());
    }

    @Transactional
    public void offer(Long studentId, Long researcherId) {
        Student student = studentRepository.findById(studentId).get();
        Researcher researcher = researcherRepository.findById(researcherId).get();

        student.offer(researcher);
    }
}
