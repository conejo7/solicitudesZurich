package com.audiometria.audiometria.api.controllers.zurich;

import com.audiometria.audiometria.api.repository.entities.Policy;
import com.audiometria.audiometria.api.service.zurich.SolicitudService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/policies")
@CrossOrigin(origins = "http://localhost:5173")
public class SolicitudesController {

    private final SolicitudService service;

    public SolicitudesController(SolicitudService service) {
        this.service = service;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Solicitud create(@Valid @RequestBody SolicitudRequest request) {
        return service.create(request); }

    @GetMapping
    public List<Solicitud> findAll() {
        return service.findAll(); }

    @GetMapping("/{id}")
    public Solicitud findById(@PathVariable Long id) {
        return service.findById(id); }


}
