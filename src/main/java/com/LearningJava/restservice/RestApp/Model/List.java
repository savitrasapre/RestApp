package com.LearningJava.restservice.RestApp.Model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "lists")
public class List {

    @Id
    String _id;
    String name;
    Boolean isClosed;
    String idBoard;
    Integer pos;
    Boolean sub;


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

    public Boolean getIsClosed() {
        return isClosed;
    }

    public void setIsClosed(Boolean closed) {
        this.isClosed = closed;
    }

    public String getIdBoard() {
        return idBoard;
    }

    public void setIdBoard(String idBoard) {
        this.idBoard = idBoard;
    }

    public Integer getPos() {
        return pos;
    }

    public void setPos(Integer pos) {
        this.pos = pos;
    }

    public Boolean getSub() {
        return sub;
    }

    public void setSub(Boolean sub) {
        this.sub = sub;
    }

    public List() {
    }

    public List(String _id, String name, Boolean isClosed, String idBoard, Integer pos, Boolean sub) {
        this._id = _id;
        this.name = name;
        this.isClosed = isClosed;
        this.idBoard = idBoard;
        this.pos = pos;
        this.sub = sub;
    }

}
