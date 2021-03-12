package com.martin.aviasales.controller;

import com.martin.aviasales.exception.ResourceNotFoundException;
import com.martin.aviasales.mapper.UserMapper;
import com.martin.aviasales.model.User;
import com.martin.aviasales.payload.request.UserUpdate;
import com.martin.aviasales.repository.UserRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/users")
public class UserController {

    private final UserRepository userRepository;

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @PostMapping
    public ResponseEntity<?> postUser(){
        User user = new User();
        user = userRepository.save(user);

        return ResponseEntity.status(HttpStatus.CREATED).body(user);
    }

    @PutMapping
    @Validated
    public ResponseEntity<?> updateUser(@RequestBody @Valid UserUpdate update){
        User user = userRepository.findById(update.getId()).orElseThrow(ResourceNotFoundException::new);

        new UserMapper().userUpdate(user, update);

        user = userRepository.save(user);

        return ResponseEntity.ok(user);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getUser(@PathVariable Long id){
        User user = userRepository.findById(id).orElseThrow(ResourceNotFoundException::new);
        return ResponseEntity.ok(user);
    }

}
