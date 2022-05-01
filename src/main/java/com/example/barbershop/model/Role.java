package com.example.barbershop.model;

import lombok.Data;

import javax.persistence.*;
import java.util.Collection;

@Entity
@Table(name="roles")
@Data
public class Role {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;


}
