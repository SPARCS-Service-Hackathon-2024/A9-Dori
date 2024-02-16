package com.example.demo.domain.nonEntity;

public enum Degree {
    MIDDLESCHOOL("중졸"),
    HIGHSCHOOL("고졸"),
    BACHELOR("학사"),
    MASTER("석사"),
    PHD("박사");

    private String degree;

    Degree(String degree) {
        this.degree = degree;
    }

    public static Degree of(String degree) {
        for (Degree value : Degree.values()) {
            if (value.degree.equals(degree))
                return value;
        }

        return null;
    }
}
