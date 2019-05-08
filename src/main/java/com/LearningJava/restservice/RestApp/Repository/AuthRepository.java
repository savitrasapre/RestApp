package com.LearningJava.restservice.RestApp.Repository;

import com.LearningJava.restservice.RestApp.Model.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;


@Repository
public interface AuthRepository extends MongoRepository<User,String> {

    @Query("{'email' : ?0}")
    public Optional<User> findByEmail(String email);
}
