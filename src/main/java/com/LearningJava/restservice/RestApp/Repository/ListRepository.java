package com.LearningJava.restservice.RestApp.Repository;

import com.LearningJava.restservice.RestApp.Model.List;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ListRepository extends MongoRepository<List,String> {

    @Query("{'idBoard' : ?0}")
    public Optional<java.util.List<List>> findByBoardId(String boardID);

    @Query("{'_id' : ?0}")
    public Optional<List> findByListId(ObjectId listID);


}
