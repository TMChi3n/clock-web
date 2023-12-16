package com.clock.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

import com.clock.backend.model.Clock;
import com.clock.backend.service.ClockService;

@RestController
@RequestMapping("/products")
@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:3006"})

public class ClockController {
    
    @Autowired
    private ClockService clockService;

    @PostMapping("/add")
    public Clock addProduct( @RequestBody Clock clock) {
        return clockService.addClock(clock);
    }

    @GetMapping("/getAll")
    public List<Clock> getAllClock() {
        return clockService.getAllClock();
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<Clock> getClockById(@PathVariable("id") int id) {
        Optional<Clock> clock = clockService.getClockById(id);
        return clock.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PutMapping("/edit/{id}")
    public ResponseEntity<Clock> editClock(@RequestBody Clock product, @PathVariable("id") int id){
        Clock updatedProduct = clockService.editClock(product, id);
        return updatedProduct != null ? ResponseEntity.ok(updatedProduct) : ResponseEntity.notFound().build();
    }

    @DeleteMapping("/delete/{id}")
    public String deleteClock(@PathVariable("id") int id) {
        clockService.deleteClock(id);
        return "Deleted Successfully";
    }

    @GetMapping("/search")
    public ResponseEntity<List<Clock>> searchClock(@RequestParam String query) {
        List<Clock> clocks = clockService.searchClock(query);
        return new ResponseEntity<>(clocks, HttpStatus.OK);
    }


}
