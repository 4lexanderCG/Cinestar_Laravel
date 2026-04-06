export const getPeliculas = async (tipo) => {
    const idEstado = tipo === 'cartelera' ? '1' : '2';
    const titulo = tipo === 'cartelera' ? 'Cartelera' : 'Próximos Estrenos';

    const response = await fetch(`https://alex-cinestar-api.azurewebsites.net/api/peliculas/${idEstado}`);
    const peliculas = await response.json();

    let html = `<br/><h1>${titulo}</h1><br/>`;
    peliculas.forEach(pelicula => {
        html += `
            <div class="contenido-pelicula">
                <div class="datos-pelicula">
                    <h2>${pelicula.Titulo}</h2><br/>
                    <p>${pelicula.Sinopsis}</p>
                    <br/>
                    <div class="boton-pelicula"> 
                        <a href="#pelicula/${pelicula.id}">
                            <img src="https://ocuszvwpcxnljglkfari.supabase.co/storage/v1/object/public/cinestar-img/varios/btn-mas-info.jpg" width="120" height="30" alt="Ver info"/>
                        </a>
                    </div>
                    <div class="boton-pelicula"> 
                        <a href="https://www.youtube.com/v/${pelicula.Link}" target=_blank onclick="return hs.htmlExpand(this, { objectType: 'iframe' } )" >
                            <img src="https://ocuszvwpcxnljglkfari.supabase.co/storage/v1/object/public/cinestar-img/varios/btn-trailer.jpg" width="120" height="30" alt="Ver trailer"/>
                        </a>
                    </div> 
                </div>
                <img src="https://ocuszvwpcxnljglkfari.supabase.co/storage/v1/object/public/cinestar-img/pelicula/${pelicula.id}.jpg" width="160" height="226"/><br/><br/>
            </div>
        `;
    });
    document.getElementById('contenido-interno').innerHTML = html;
};

export const getPelicula = async (id) => {
    const response = await fetch(`https://alex-cinestar-api.azurewebsites.net/api/pelicula/${id}`);
    const data = await response.json();
    if (!data || data.length === 0) return;

    const pelicula = data[0];
    const html = `
        <br/><h1>${pelicula.idEstado === '1' ? 'Cartelera' : 'Próximos Estrenos'}</h1><br/>
        <div class="contenido-pelicula">
            <div class="datos-pelicula">
                <h2>${pelicula.Titulo}</h2>
                <p>${pelicula.Sinopsis}</p>
                <br/>
                <div class="tabla">
                    <div class="fila">
                        <div class="celda-titulo">Título Original :</div>
                        <div class="celda">${pelicula.Titulo}</div>
                    </div>
                    <div class="fila">
                        <div class="celda-titulo">Estreno :</div>
                        <div class="celda">${pelicula.FechaEstrenoss}</div>
                    </div>
                    <div class="fila">
                        <div class="celda-titulo">Género :</div>
                        <div class="celda">${pelicula.Geneross}</div>
                    </div>
                    <div class="fila">
                        <div class="celda-titulo">Director :</div>
                        <div class="celda">${pelicula.Director}</div>
                    </div>
                    <div class="fila">
                        <div class="celda-titulo">Reparto :</div>
                        <div class="celda">${pelicula.Reparto}</div>
                    </div>
                </div>
            </div>
            <img src="https://ocuszvwpcxnljglkfari.supabase.co/storage/v1/object/public/cinestar-img/pelicula/${pelicula.id}.jpg" width="160" height="226"><br/><br/>
        </div>
        <div class="pelicula-video">
            <iframe src="https://www.youtube.com/embed/${pelicula.Link}" width="580" height="400"></iframe>
        </div>
    `;
    document.getElementById('contenido-interno').innerHTML = html;
};

export const getCines = async () => {
    const response = await fetch('https://alex-cinestar-api.azurewebsites.net/api/cines');
    const cines = await response.json();

    let html = '<br/><h1>Nuestros Cines</h1><br/>';
    cines.forEach(cine => {
        html += `
            <div class="contenido-cine">
                <img src="https://ocuszvwpcxnljglkfari.supabase.co/storage/v1/object/public/cinestar-img/cine/${cine.id}.1.jpg" width="227" height="170"/>
                <div class="datos-cine">
                    <h4>${cine.RazonSocial}</h4><br/>
                    <span>${cine.Direccion} - ${cine.Distrito}<br/><br/>Teléfono: ${cine.Telefonos}</span>
                </div>
                <br/>
                <a href="#cine/${cine.id}">
                    <img src="https://ocuszvwpcxnljglkfari.supabase.co/storage/v1/object/public/cinestar-img/varios/ico-info2.png" width="150" height="40"/>
                </a>
            </div>
        `;
    });
    document.getElementById('contenido-interno').innerHTML = html;
};

export const getCine = async (id) => {
    const response = await fetch(`https://alex-cinestar-api.azurewebsites.net/api/cine/${id}`);
    const data = await response.json();
    if (!data || data.length === 0) return;

    const cine = data[0];
    const html = `
        <h2>${cine.RazonSocial}</h2>
        <div class="cine-info">
            <div class="cine-info datos">
                <p>${cine.Direccion}</p>
                <p>Teléfono: ${cine.Telefonos}</p>
                <br/>
                <div class="tabla">
                    ${(cine.tarifas || []).map((tarifa, i) => `
                        <div class="fila${i % 2 !== 0 ? ' impar' : ''}">
                            <div class="celda-titulo">${tarifa.DiasSemana}</div>
                            <div class="celda">${tarifa.Precio}</div>
                        </div>
                    `).join('')}
                </div>
                <div class="aviso">
                    <p>A partir del 1ro de julio de 2016, Cinestar Multicines realizará el cobro de la comisión de S/. 1.00 adicional al tarifario vigente, a los usuarios que compren sus entradas por el aplicativo de Cine Papaya para Cine Star Comas, Excelsior, Las Américas, Benavides, Breña, San Juan, UNI, Aviación, Sur, Porteño, Tumbes y Tacna.</p>
                </div>
            </div>
            <img src="https://ocuszvwpcxnljglkfari.supabase.co/storage/v1/object/public/cinestar-img/cine/${cine.id}.2.jpg"/>
            <br/><br/><h4>Los horarios de cada función están sujetos a cambios sin previo aviso.</h4><br/>
            <div class="cine-info peliculas">
                <div class="tabla">
                    <div class="fila">
                        <div class="celda-cabecera">Películas</div>
                        <div class="celda-cabecera">Horarios</div>
                    </div>
                    ${(cine.peliculas || []).map((pelicula, i) => `
                        <div class="fila${i % 2 !== 0 ? ' impar' : ''}">
                            <div class="celda-titulo">${pelicula.Titulo}</div>
                            <div class="celda">${pelicula.Horarios}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
        <div>
            <img style="float:left;" src="https://ocuszvwpcxnljglkfari.supabase.co/storage/v1/object/public/cinestar-img/cine/${cine.id}.3.jpg" alt="Imagen del cine"/>
            <span class="tx_gris">Precios de los juegos: desde S/1.00 en todos los Cine Star.<br/>
                Horario de atención de juegos es de 12:00 m hasta las 10:30 pm. 
                <br/><br/>
                Visitános y diviértete con nosotros. 
                <br/><br/>
                <b>CINESTAR</b>, siempre pensando en tí. 
            </span>		
        </div>        
    `;
    document.getElementById('contenido-interno').innerHTML = html;
};
