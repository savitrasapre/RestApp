package com.LearningJava.restservice.RestApp.Repository;

import com.LearningJava.restservice.RestApp.Model.Team;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface TeamRepository extends MongoRepository<Team,String> {

    @Query("{'name' : ?0}")
    public Optional<Team> findByTeamName(String teamName);

    @Query("{'idMembers' : ?0}")
    public Optional<Team[]> findTeamsByMemberId(String memberId);
}
