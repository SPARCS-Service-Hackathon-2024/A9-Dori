package com.example.demo.deprecated;

import com.example.demo.domain.member.Researcher;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
public class FormerWorkplace {

    @Id @GeneratedValue
    @Column(name = "former_workplace_id")
    private Long id;

    private String name;

    /* 연관 데이터 */
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "researcher_id")
    private Researcher researcher;

    public static List<FormerWorkplace> of(Set<String> formerWorkplaces) {
        return formerWorkplaces.stream()
                .map(workplace -> FormerWorkplace.builder()
                        .name(workplace)
                        .build())
                .collect(Collectors.toList());
    }
}
