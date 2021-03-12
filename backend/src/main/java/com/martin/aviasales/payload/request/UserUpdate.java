package com.martin.aviasales.payload.request;

import lombok.Data;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;

@Data
public class UserUpdate {
    @NotNull
    private Long id;

    private Boolean shared;
    @Email
    private String email;
}
