package com.example.demo.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;

import java.util.Set;
import java.util.stream.Collectors;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
public class Strength {

    @Id @GeneratedValue
    private Long id;

    private Type type;

    public enum Type {
        SKILL("스킬"),
        IDEA("아이디어"),
        CAREER("커리어");

        private String type;

        Type(String type) {
            this.type = type;
        }

        public static Type of(String type) {
            for (Type value : Type.values()) {
                if (value.type.equals(type))
                    return value;
            }

            return null;
        }
    }

    public static Set<Strength> of(Set<String> types) {
        return types.stream()
                .map(Type::of)
                .map(type -> Strength.builder()
                        .type(type)
                        .build())
                .collect(Collectors.toSet());
    }
}
