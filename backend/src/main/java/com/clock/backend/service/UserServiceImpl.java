package com.clock.backend.service;


import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.clock.backend.model.User;
import com.clock.backend.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService{

    @Autowired
    private UserRepository userRepository;

    @Override
    public User register(User user) {
        return userRepository.save(user);
    }

    @Override
    public Optional<User> login(String email) {
        return userRepository.findByEmail(email);
    }

    
    
}
