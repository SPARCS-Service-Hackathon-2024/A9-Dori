package com.example.demo.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Strength {

    @Id @GeneratedValue
    private Long id;

    private Type type;
    private String description;

    public enum Type {
        SKILL,
        IDEA,
        CAREER
    }
}
