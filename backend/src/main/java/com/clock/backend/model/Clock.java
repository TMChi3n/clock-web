package com.clock.backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name="clock")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Clock {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String nameclock;
    private String trademark;
    private String image;
    private double size;
    private double price;
    private String shape;
    private String wireMaterial;
    private String glassMaterial;
    private String style;
    private String functions;
    private String faceColor;
    private String origin;

}
