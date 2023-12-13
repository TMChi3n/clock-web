package com.clock.backend.service;

import java.util.Optional;

import org.springframework.stereotype.Service;

import com.clock.backend.model.User;

@Service
public interface UserService {

    User register(User user);
    Optional<User> login(String email);

} 

