package com.LearningJava.restservice.RestApp.Controller;

import com.LearningJava.restservice.RestApp.Repository.CardRepository;
import com.LearningJava.restservice.RestApp.Model.Card;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("/cards")
public class CardController {

    @Autowired
    private CardRepository cardRepository;

    /*@CrossOrigin
    @GetMapping("")
    public ResponseEntity<List<Card>> getAllCardsForList(@RequestParam("listID") String listID)
    {
        System.out.println("in getallcardsforlist");
        Optional<List<Card>> cardsOptional = cardRepository.findCardsByListId(listID);

        if(cardsOptional.isEmpty())
            return ResponseEntity.noContent().build();
        else
            return ResponseEntity.ok().body(cardsOptional.get());
    }*/


    @CrossOrigin
    @PostMapping("")
    public ResponseEntity<Card> createCard(@RequestBody Card newCardToAdd)
    {
        System.out.println("In createCard");
        cardRepository.save(newCardToAdd);
        return ResponseEntity.ok().body(newCardToAdd);
    }

    @CrossOrigin
    @PutMapping("/{cardId}")
    public ResponseEntity<Card> updateCard(@RequestBody Card cardToUpdate)
    {
        Optional<Card> optionalCard = cardRepository.findById(cardToUpdate.get_id());

        optionalCard.get().setName(cardToUpdate.name);
        optionalCard.get().setDesc(cardToUpdate.desc);
        optionalCard.get().setDue_in(cardToUpdate.due_in);
        optionalCard.get().setIdMembers(cardToUpdate.idMembers);
        optionalCard.get().setPos(cardToUpdate.pos);
        optionalCard.get().setIsClosed(cardToUpdate.isClosed);
        cardRepository.save(optionalCard.get());

        return ResponseEntity.ok().body(optionalCard.get());
    }

}
