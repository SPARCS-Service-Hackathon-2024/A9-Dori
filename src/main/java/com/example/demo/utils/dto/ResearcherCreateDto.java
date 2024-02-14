package com.example.demo.utils.dto;

import com.example.demo.domain.Strength;

import java.util.Set;

public class ResearcherCreateDto {

    private String name;
    private String gender;
    private String degree;
    private String capacity;
    private boolean isWorking;
    private String profile;
    private Set<String> formerWorkplaces;
    private Set<Strength.Type> strengths;
    private String image;
}
