package com.LearningJava.restservice.RestApp.Model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "teams")
public class Team {

    public String get_id() {
        return _id;
    }

    public void set_id(String _id) {
        this._id = _id;
    }

    public Integer getMemberCount() {
        return memberCount;
    }

    public void setMemberCount(Integer memberCount) {
        this.memberCount = memberCount;
    }

    public String getDesc() {
        return desc;
    }

    public void setDesc(String desc) {
        this.desc = desc;
    }

    public String[] getIdBoards() {
        return idBoards;
    }

    public void setIdBoards(String[] idBoards) {
        this.idBoards = idBoards;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String[] getIdMembers() {
        return idMembers;
    }

    public void setIdMembers(String[] idMembers) {
        this.idMembers = idMembers;
    }

    public Team(String _id, Integer memberCount, String desc, String[] idBoards, String name, String[] idMembers) {
        this._id = _id;
        this.memberCount = memberCount;
        this.desc = desc;
        this.idBoards = idBoards;
        this.name = name;
        this.idMembers = idMembers;
    }

    public Team() {
    }

    @Id
    private String _id;
    private Integer memberCount;
    private String desc;
    private String[] idBoards;
    private String name;
    private String[] idMembers;


}
