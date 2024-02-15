package com.example.demo.service;

import com.example.demo.domain.member.Student;
import com.example.demo.repository.StudentRepository;
import com.example.demo.utils.dto.StudentJoinDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@RequiredArgsConstructor
@Service
public class StudentService {

    private StudentRepository studentRepository;

    @Transactional
    public Student join(StudentJoinDto dto) {
        return studentRepository.save(dto.toEntity());
    }


}
