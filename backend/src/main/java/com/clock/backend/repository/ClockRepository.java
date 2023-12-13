package com.clock.backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.clock.backend.model.Clock;

@Repository
public interface ClockRepository extends JpaRepository<Clock, Integer>{

    @Query("SELECT c FROM Clock c WHERE " +
        "c.nameclock LIKE CONCAT('%', :query, '%') OR " +
        "c.origin LIKE CONCAT('%', :origin, '%')")
    List<Clock> findByQuery(@Param("query") String query, @Param("origin") String origin);

}
