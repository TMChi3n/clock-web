package com.clock.backend.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.clock.backend.model.User;
import com.clock.backend.service.UserService;


@RestController
@RequestMapping("/account")
@CrossOrigin(origins = "http://localhost:3000")
public class LoginAndRegisterController {
    
    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public ResponseEntity<String> registerUser(
            @RequestParam("email") String email,
            @RequestParam("username") String username,
            @RequestParam("password") String password
    ) {
        // Create a new user entity
        User newUser = new User();
        newUser.setEmail(email);
        newUser.setUsername(username);
        newUser.setPassword(password);

        // Register the user using the UserService
        userService.register(newUser);

        return ResponseEntity.ok("User registered successfully");
    }


    @GetMapping("/login")
    public String login(@RequestParam("email") String email, @RequestParam("password") String password){
        Optional<User> optionalUser = userService.login(email);
        if (optionalUser.isPresent()) {
            User user = optionalUser.get();
            if (user.getPassword().equals(password)) {
                return "Login successful";
            } else {
                return "Invalid password";
            }
        } else {
            return "User not found";
        }
    }


}
