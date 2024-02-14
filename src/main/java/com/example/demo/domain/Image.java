package com.example.demo.domain;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Image {

    @Id @GeneratedValue
    @Column(name = "image_id")
    private Long id;

    private String originalFileName;
    private String savedFileName;

    @ManyToMany
    private List<Researcher> researchers = new ArrayList<>();
}
