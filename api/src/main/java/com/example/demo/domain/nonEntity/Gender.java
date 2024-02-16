package com.example.demo.domain.nonEntity;

public enum Gender {
    WOMAN("여성"),
    MAN("남성");

    private String gender;

    Gender(String gender) {
        this.gender = gender;
    }

    public static Gender of(String gender) {
        for (Gender value : Gender.values()) {
            if (value.gender.equals(gender))
                return value;
        }

        return null;
    }
}
