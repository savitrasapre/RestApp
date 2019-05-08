package com.LearningJava.restservice.RestApp.Model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "cards")
public class Card {
    @Id
    public String _id;
    public String name;
    public String desc;
    public Integer due_in;
    public Boolean isClosed;
    public String idList;
    public String idBoard;
    public String[] idMembers;
    public Integer pos;


    public Card(String _id, String name, String desc, Integer due_in, Boolean isClosed, String idList, String idBoard, String[] idMembers, Integer pos) {
        this._id = _id;
        this.name = name;
        this.desc = desc;
        this.due_in = due_in;
        this.isClosed = isClosed;
        this.idList = idList;
        this.idBoard = idBoard;
        this.idMembers = idMembers;
        this.pos = pos;
    }

    public Card() {
    }

    public String get_id() {
        return _id;
    }

    public void set_id(String _id) {
        this._id = _id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDesc() {
        return desc;
    }

    public void setDesc(String desc) {
        this.desc = desc;
    }

    public Integer getDue_in() {
        return due_in;
    }

    public void setDue_in(Integer due_in) {
        this.due_in = due_in;
    }

    public Boolean getIsClosed() {
        return isClosed;
    }

    public void setIsClosed(Boolean closed) {
        isClosed = closed;
    }

    public String getIdList() {
        return idList;
    }

    public void setIdList(String idList) {
        this.idList = idList;
    }

    public String getIdBoard() {
        return idBoard;
    }

    public void setIdBoard(String idBoard) {
        this.idBoard = idBoard;
    }

    public String[] getIdMembers() {
        return idMembers;
    }

    public void setIdMembers(String[] idMembers) {
        this.idMembers = idMembers;
    }

    public Integer getPos() {
        return pos;
    }

    public void setPos(Integer pos) {
        this.pos = pos;
    }



}
