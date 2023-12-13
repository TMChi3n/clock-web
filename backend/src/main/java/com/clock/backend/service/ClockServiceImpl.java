package com.clock.backend.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.clock.backend.model.Clock;
import com.clock.backend.repository.ClockRepository;

@Service
public class ClockServiceImpl implements ClockService{

    @Autowired
    private ClockRepository clockRepository;
    
    public ClockServiceImpl(ClockRepository clockRepository){
        this.clockRepository  = clockRepository;
    }

    @Override
    public List<Clock> getAllClock() {
        return clockRepository.findAll();
    }

    @Override
    public Optional<Clock> getClockById(int id) {
        return clockRepository.findById(id);
    }

    @Override
    public Clock addClock(Clock clock) {
        return clockRepository.save(clock);
    }

    @Override
    public Clock editClock(Clock product, int id) {
        Optional<Clock> optionalClock = clockRepository.findById(id);
        if (optionalClock.isPresent()) {
            Clock existingProduct = optionalClock.get();
            existingProduct.setNameclock(product.getNameclock());
            existingProduct.setNameclock(product.getNameclock());
            existingProduct.setTrademark(product.getTrademark());
            existingProduct.setImage(product.getImage());
            existingProduct.setSize(product.getSize());
            existingProduct.setPrice(product.getPrice());
            existingProduct.setShape(product.getShape());
            existingProduct.setWireMaterial(product.getWireMaterial());
            existingProduct.setGlassMaterial(product.getGlassMaterial());
            existingProduct.setStyle(product.getStyle());
            existingProduct.setFunctions(product.getFunctions());
            existingProduct.setOrigin(product.getOrigin());
            // Set other fields as needed
            return clockRepository.save(existingProduct);
        }
        return null;
    }

    @Override
    public void deleteClock(int id) {
        clockRepository.deleteById(id);
    }

    @Override
    public List<Clock> searchProducts(String query) {
        return clockRepository.findByQuery(query, query);
    }   
}
