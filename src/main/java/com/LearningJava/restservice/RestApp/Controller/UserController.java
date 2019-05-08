package com.LearningJava.restservice.RestApp.Controller;

import com.LearningJava.restservice.RestApp.Repository.BoardRepository;
import com.LearningJava.restservice.RestApp.Model.User;
import com.LearningJava.restservice.RestApp.Repository.UsersRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UsersRepository userRep;

    @Autowired
    private BoardRepository boardRep;

    //(C)reate operation.
    @PostMapping("/")
    public ResponseEntity<User> createNewuser(@RequestBody User newUser)
    {
        Optional<User> userOptional = userRep.findByEmail(newUser.getEmail());

        if(userOptional.isEmpty())
        {
            userRep.save(newUser);
            System.out.println("added new user");
            return ResponseEntity
                    .ok()
                    .body(newUser);
        }
        else
        {
            System.out.println("User is already present");
            System.out.println(userOptional);
            return ResponseEntity
                    .notFound()
                    .build();
        }
    }

    //(R)ead operation.
    @GetMapping("/all")
    public @ResponseBody List<User> getAllUsers()
    {
         return userRep.findAll();
    }

    //(U)pdate operation
    @PutMapping("/{id}")
    public  ResponseEntity<User> updateUser(@RequestBody User userToUpdate, @PathVariable String id)
    {
       Optional<User> userOptional = userRep.findById(id);

        if(!userOptional.isPresent())
        {
            return  ResponseEntity
                    .noContent()
                    .build();
        }
        else
        {
            userToUpdate.set_id(id);
            userRep.save(userToUpdate);
            return ResponseEntity.ok().body(userToUpdate);
        }
    }

    //(D)elete operation.
    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable String id)
    {
        userRep.deleteById(id);
    }

    @GetMapping("/{id}")
    public @ResponseBody User getSpecificUser(@PathVariable String id)
    {
        return userRep.findById(id).orElseGet(User::new);
    }



}
