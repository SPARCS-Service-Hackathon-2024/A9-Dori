package com.example.demo.repository;

import com.example.demo.domain.Strength;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StrengthRepository extends JpaRepository<Strength, Long> {
}
