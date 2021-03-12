package com.martin.aviasales.mapper;

import com.martin.aviasales.model.User;
import com.martin.aviasales.payload.request.UserUpdate;

public class UserMapper {

    public void userUpdate(User user, UserUpdate update){
        if (update.getShared() != null)
            user.setShared(update.getShared());

        if (update.getEmail() != null)
            user.setEmail(update.getEmail());
    }

}
