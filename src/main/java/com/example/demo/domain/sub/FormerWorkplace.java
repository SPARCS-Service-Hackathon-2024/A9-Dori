package com.example.demo.domain.sub;

import com.example.demo.domain.Researcher;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Entity
public class FormerWorkplace {

    @Id @GeneratedValue
    @Column(name = "former_workplace_id")
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "researcher_id")
    private Researcher researcher;
}
