package com.LearningJava.restservice.RestApp.Controller;

import com.LearningJava.restservice.RestApp.Repository.BoardRepository;
import com.LearningJava.restservice.RestApp.Repository.CardRepository;
import com.LearningJava.restservice.RestApp.Repository.ListRepository;
import com.LearningJava.restservice.RestApp.Model.Board;
import com.LearningJava.restservice.RestApp.Model.Card;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.List;
import java.util.Optional;


@CrossOrigin
@RestController
@RequestMapping("/boards")
public class BoardController {

    @Autowired
    private BoardRepository boardRepo;

    @Autowired
    private ListRepository listRepository;

    @Autowired
    private CardRepository cardRepository;

    @GetMapping("")
    public ResponseEntity<List<Board>> getAllBoardNames(@RequestParam("userId") String userID)
    {

        List<Board> boardlistFromQuery = boardRepo.findBoardsByUserID(new ObjectId(userID));

        //List<String> boardNames = boardlistFromQuery.stream().map(board -> board.getName()).collect(Collectors.toList());

        if(boardlistFromQuery.isEmpty())
        {
            return ResponseEntity.noContent().build();
        }
        else
        {
            return ResponseEntity.ok().body(boardlistFromQuery);
        }
    }

    @PostMapping("")
    public ResponseEntity<Board> createBoard(@RequestBody Board newBoard)
    {
        System.out.println("new board name" + newBoard.getName());

        Optional<Board> boardOptional = boardRepo.findBoardByName(newBoard.getName());

        System.out.println("In createBoard " + boardOptional);

        if(boardOptional.isEmpty())
        {
            boardRepo.save(newBoard);
            System.out.println("saved new board");
            return ResponseEntity.ok().body(newBoard);
        }
        else
        {
            System.out.println("Board present already");
            return ResponseEntity.ok().body(boardOptional.get());
        }
    }

    @GetMapping("/{boardID}")
    public  ResponseEntity<Board> getBoardInfo(@PathVariable String boardID)
    {
        Optional<Board> boardlistFromQuery = boardRepo.findBoardById(new ObjectId(boardID));

        if(boardlistFromQuery.isEmpty())
        {
            return ResponseEntity.noContent().build();
        }
        else
        {
            return ResponseEntity.ok().body(boardlistFromQuery.get());
        }
    }

    @GetMapping("/{boardID}/lists")
    public  ResponseEntity<List<com.LearningJava.restservice.RestApp.Model.List>> getAllListsInBoard(@PathVariable String boardID)
    {
        Optional<List<com.LearningJava.restservice.RestApp.Model.List>> optionalLists = listRepository.findByBoardId(boardID);

        if(optionalLists.isEmpty())
        {
            return ResponseEntity.noContent().build();
        }
        else
        {
            return ResponseEntity.ok().body(optionalLists.get());
        }
    }

    @GetMapping("/{boardID}/cards")
    public ResponseEntity<List<Card>> getAllCardsInBoard(@PathVariable String boardID)
    {
        Optional<List<Card>> optionalCards = cardRepository.findCardsByBoardId(boardID);

        if(optionalCards.isEmpty())
        {
            return ResponseEntity.noContent().build();
        }
        else
        {
            return ResponseEntity.ok().body(optionalCards.get());
        }
    }


}
