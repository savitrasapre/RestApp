package com.LearningJava.restservice.RestApp.Controller;

import com.LearningJava.restservice.RestApp.Repository.CardRepository;
import com.LearningJava.restservice.RestApp.Repository.ListRepository;
import com.LearningJava.restservice.RestApp.Model.Card;
import com.LearningJava.restservice.RestApp.Model.List;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;


@CrossOrigin
@RestController
@RequestMapping("/lists")
public class ListController {

    @Autowired
    private ListRepository _listRepository;

    @Autowired
    private CardRepository _cardRepository;


    @GetMapping("/{listID}/cards")
    public ResponseEntity<java.util.List<Card>> getAllCards(@PathVariable String listID)
    {
        Optional<java.util.List<Card>> optionalCards = _cardRepository.findCardsByListId(listID);

        if(optionalCards.isEmpty())
        {
            return ResponseEntity.noContent().build();
        }
        else
        {
            return ResponseEntity.ok().body(optionalCards.get());
        }
    }

    @CrossOrigin
    @PostMapping("")
    public ResponseEntity<List> createList(@RequestBody List listToCreate)
    {
        System.out.println("In createList function!");

        //isClosed is null but right before I fire the request isClosed is false (???)
        //trying to manually set and checking if written to db
        listToCreate.setIsClosed(false);
        _listRepository.save(listToCreate);
        return ResponseEntity.ok().body(listToCreate);
    }

    @CrossOrigin
    @PutMapping("/{listID}/closed")
    public ResponseEntity<List> toggleArchiveList(@PathVariable String listID, @RequestParam("isClosed") String isClosed)
    {
        Optional<List> optionalList = _listRepository.findByListId(new ObjectId(listID));

        System.out.println("In archiveList" + optionalList.isPresent());

        if(optionalList.isEmpty())
        {
            return ResponseEntity.notFound().build();
        }
        else
        {
            optionalList.get().setIsClosed(Boolean.parseBoolean(isClosed));
            _listRepository.save(optionalList.get());
            return ResponseEntity.ok().body(optionalList.get());
        }

    }

}
