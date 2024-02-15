package com.example.demo.domain.sub;

import com.example.demo.utils.domain.BaseEntity;
import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter @Setter
public class Member extends BaseEntity {

    private String loginId;
    private String password;
}
