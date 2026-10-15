package com.audiometria.audiometria.api.repository.entities;


import jakarta.persistence.*;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
@Table(name = "solicitud_seguro")
public class Solicitud {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_solicitud;
    private String id_cliente;
    private String id_vehiculo;
    private BigDecimal valor_asegurado;
    private BigDecimal valor_prima;

    private LocalDateTime fecha_solicitud;

}

