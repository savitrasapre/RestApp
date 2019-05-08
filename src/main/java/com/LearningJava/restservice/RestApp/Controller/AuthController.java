package com.LearningJava.restservice.RestApp.Controller;

import com.LearningJava.restservice.RestApp.Repository.AuthRepository;
import com.LearningJava.restservice.RestApp.Model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;


@CrossOrigin
@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private AuthRepository authRepo;

    @CrossOrigin
    @PostMapping("")
    public ResponseEntity<User> authenticateUser(@RequestBody User receivedUser)
    {
        Optional<User> optionalUser = authRepo.findByEmail(receivedUser.getEmail());

        if(optionalUser.isEmpty())
        {
            return ResponseEntity.notFound().build();
        }
        else
        {
            return ResponseEntity.ok().body(optionalUser.get());
        }
    }
}
