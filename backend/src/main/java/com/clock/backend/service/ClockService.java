package com.clock.backend.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.clock.backend.model.Clock;

@Service
public interface ClockService {

    List<Clock> getAllClock();
    Optional<Clock> getClockById(int id);
    Clock addClock(Clock clock);
    Clock editClock(Clock clock, int id);
    void deleteClock(int id);
    List<Clock> searchClock(String query);

}
