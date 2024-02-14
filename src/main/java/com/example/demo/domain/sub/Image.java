package com.example.demo.domain.sub;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Image {

    @Id @GeneratedValue
    @Column(name = "image_id")
    private Long id;

    private String originalFileName;
    private String savedFileName;
}
