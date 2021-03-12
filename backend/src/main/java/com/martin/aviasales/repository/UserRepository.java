package com.martin.aviasales.repository;

import com.martin.aviasales.model.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Long> {
}
