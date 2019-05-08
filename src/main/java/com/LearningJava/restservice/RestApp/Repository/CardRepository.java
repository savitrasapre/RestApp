package com.LearningJava.restservice.RestApp.Repository;

import com.LearningJava.restservice.RestApp.Model.Card;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CardRepository extends MongoRepository<Card,String> {

    @Query("{'idList' : ?0}")
    public Optional<List<Card>> findCardsByListId(String listID);

    @Query("{'idBoard' : ?0}")
    public Optional<List<Card>> findCardsByBoardId(String boardID);
}
