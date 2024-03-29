package com.example.demo.domain.member;

import com.example.demo.domain.nonEntity.Member;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Getter
@Entity
public class Company extends Member {

    @Id
    @Column(name = "company_id")
    private String id;

    /* 비연관 데이터 */
    private String name;        // 이름
    private String joinReason;  // 가입 이유
    private String introduce;   // 소개말
    private Seek seek;          // 검색 조건
    private boolean isMania;    // 도리 매니아 여부

    /* 연관 데이터 */
    @ManyToMany
    @JoinTable(
            joinColumns = @JoinColumn(name = "researcher_id"),
            inverseJoinColumns = @JoinColumn(name = "company_id")
    )
    @Builder.Default
    private List<Researcher> researchers = new ArrayList<>();

    public enum Seek {
        CONSULTATION("자문"),
        RECRUIT("채용"),
        ETC("기타");

        private final String type;

        Seek(String type) {
            this.type = type;
        }

        public static Seek of(String type) {
            for (Seek seek : Seek.values())
                if (seek.type.equals(type))
                    return seek;

            return null;
        }
    }
}
