package com.example.demo.domain.nonEntity;

import com.example.demo.utils.domain.BaseEntity;
import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter @Setter
public class Member extends BaseEntity {

    private String loginId;
    private String password;
    private String memberAuth;

    public void join(String loginId, String password) {
        setLoginId(loginId);
        setPassword(password);
    }
}
