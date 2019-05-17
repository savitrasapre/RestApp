package com.LearningJava.restservice.RestApp.Controller;

import com.LearningJava.restservice.RestApp.Model.Team;
import com.LearningJava.restservice.RestApp.Repository.TeamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("/teams")
public class TeamController {

    @Autowired
    TeamRepository teamRepository;

    @CrossOrigin
    @GetMapping("")
    public ResponseEntity<Team[]> getAllTeamsForUser(@RequestParam("userId") String userID)
    {
        Optional<Team[]> optionalTeams = teamRepository.findTeamsByMemberId(userID);

        if(optionalTeams.isEmpty())
        {
            return ResponseEntity.notFound().build();
        }
        else
        {
            return ResponseEntity.ok().body(optionalTeams.get());
        }
    }
    @CrossOrigin
    @PostMapping("")
    public ResponseEntity<Team> createTeamForUser(@RequestBody Team teamToCreate)
    {
        Optional<Team> teamOptional = teamRepository.findByTeamName(teamToCreate.getName());
        System.out.println(teamToCreate.getName());

        if(teamOptional.isEmpty())
        {
            teamRepository.save(teamToCreate);
            return ResponseEntity.ok().body(teamToCreate);
        }
        else
        {
            return ResponseEntity.badRequest().body(null);
        }
    }

    @CrossOrigin
    @PutMapping("/{teamId}")
    public ResponseEntity<Team> addUserToTeam(@RequestBody Team teamToUpdate)
    {
        Optional<Team> teamOptional = teamRepository.findByTeamName(teamToUpdate.getName());

        if(teamOptional.isEmpty())
        {
            return ResponseEntity.notFound().build();
        }
        else
        {
            System.out.println("added user to team");
            teamRepository.save(teamToUpdate);
            return ResponseEntity.ok().body(teamToUpdate);
        }
    }

}
