import { useState } from "react";

const ANIO_ACTUAL = new Date().getFullYear();

function calcularPrima(valor) {
    if (valor < 20000) return 0.03;
    if (valor <= 50000) return 0.04;
    return 0.05;
}


    const [solicitudes, setSolicitudes] = useState([]);
    const [seleccionada, setSeleccionada] = useState(null);
    const [error, setError] = useState("");

    const valor = Number(form.valorAsegurado);

    const prima = valor * porcentaje;



    const registrar = (e) => {

        //se llamaraia al endpoint de registrar las solicitudes
    }


    return (
        <main className="contenedor">
            <header>
                <h1>Solicitudes </h1>
            </header>

            <section className="tarjeta">
                <h2>Registrar solicitud</h2>

                <form onSubmit={registrar}>
                    <div className="grid">
                        <label>
                            Nombre del cliente
                            <input
                                name="nombre"
                                value={form.nombre}
                                placeholder="Ej. Juan Pérez"
                            />
                        </label>

                        <label>
                            Identificación
                            <input
                                name="identificacion"
                                value={form.identificacion}
                                onChange={actualizar}
                                required
                                maxLength={20}
                                placeholder="Cédula o identificación"
                            />
                        </label>

                        <label>
                            Placa
                            <input
                                name="placa"
                                value={form.placa}
                                onChange={actualizar}
                                required
                                maxLength={10}
                                placeholder="Ej. PBA1234"
                            />
                        </label>

                        <label>
                            Marca del vehículo
                            <input
                                name="marca"
                                value={form.marca}
                                onChange={actualizar}
                                required
                                maxLength={80}
                                placeholder="Ej. Toyota"
                            />
                        </label>

                        <label>
                            Año del vehículo
                            <input
                                name="anio"
                                type="number"
                                value={form.anio}
                                onChange={actualizar}
                                required
                                placeholder="Ej. 2020"
                            />
                        </label>

                        <label>
                            Valor asegurado
                            <input
                                name="valorAsegurado"
                                type="number"
                                min="0.01"
                                step="0.01"
                                value={form.valorAsegurado}
                                onChange={actualizar}
                                required
                                placeholder="Ej. 25000"
                            />
                        </label>
                    </div>




                    <button type="submit">Registrar solicitud</button>
                </form>
            </section>


                        <table>
                            <thead>
                            <tr>
                                <th>Cliente</th>
                                <th>Placa</th>
                                <th>Marca</th>
                                <th>Valor asegurado</th>
                                <th>Prima</th>
                                <th>Acción</th>
                            </tr>
                            </thead>
                            <tbody>
                            {solicitudes.map((s) => (
                                <tr key={s.id}>
                                    <td>{s.nombre}</td>
                                    <td>{s.placa}</td>
                                    <td>{s.marca}</td>
                                    <td>{dinero(s.valorAsegurado)}</td>
                                    <td>{dinero(s.prima)}</td>

                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </section>


        </main>
    );
}

export default SolicitudesZurich;
