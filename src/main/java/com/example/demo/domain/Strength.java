package com.example.demo.domain;

public enum Strength {
    SKILL("스킬"),
    IDEA("아이디어"),
    CAREER("커리어");

    private final String type;

    Strength(String type) {
        this.type = type;
    }

    public static Strength of(String type) {
        for (Strength value : Strength.values()) {
            if (value.type.equals(type))
                return value;
        }

        return null;
    }
}
