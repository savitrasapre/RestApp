package com.LearningJava.restservice.RestApp.Repository;

import com.LearningJava.restservice.RestApp.Model.Board;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface BoardRepository extends MongoRepository<Board,String> {

    @Query("{'user_id' : ?0}")
    public List<Board> findBoardsByUserID(ObjectId userID);

    @Query("{'_id' : ?0}")
    public Optional<Board> findBoardById(ObjectId boardID);

    @Query("{'name' : ?0}")
    public Optional<Board> findBoardByName(String boardName);
}
