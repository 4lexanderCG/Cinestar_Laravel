@extends('layouts.app')

@section('content')
    <h2>{{ $cine['RazonSocial'] }}</h2>
    <div class="cine-info">
        <div class="cine-info datos">
            <p>{{ $cine['Direccion'] }}</p>
            <p>Teléfono: {{ $cine['Telefonos'] }}</p>
            <br/>
            <div class="tabla">
                @foreach($cine['tarifas'] ?? [] as $i => $tarifa)
                    <div class="fila {{ $i % 2 !== 0 ? 'impar' : '' }}">
                        <div class="celda-titulo">{{ $tarifa['DiasSemana'] }}</div>
                        <div class="celda">{{ $tarifa['Precio'] }}</div>
                    </div>
                @endforeach
            </div>
            <div class="aviso">
                <p>A partir del 1ro de julio de 2016, Cinestar Multicines realizará el cobro de la comisión de S/. 1.00 adicional al tarifario vigente.</p>
            </div>
        </div>
        <img src="https://ocuszvwpcxnljglkfari.supabase.co/storage/v1/object/public/cinestar-img/cine/{{ $cine['id'] }}.2.jpg"/>
        <br/><br/><h4>Los horarios de cada función están sujetos a cambios sin previo aviso.</h4><br/>
        <div class="cine-info peliculas">
            <div class="tabla">
                <div class="fila">
                    <div class="celda-cabecera">Películas</div>
                    <div class="celda-cabecera">Horarios</div>
                </div>
                @foreach($cine['peliculas'] ?? [] as $i => $pelicula)
                    <div class="fila {{ $i % 2 !== 0 ? 'impar' : '' }}">
                        <div class="celda-titulo">{{ $pelicula['Titulo'] }}</div>
                        <div class="celda">{{ $pelicula['Horarios'] }}</div>
                    </div>
                @endforeach
            </div>
        </div>
    </div>
    <div>
        <img style="float:left;" src="https://ocuszvwpcxnljglkfari.supabase.co/storage/v1/object/public/cinestar-img/cine/{{ $cine['id'] }}.3.jpg" alt="Imagen del cine"/>
        <span class="tx_gris">Precios de los juegos: desde S/1.00 en todos los Cine Star.<br/>
            Horario de atención de juegos es de 12:00 m hasta las 10:30 pm. 
            <br/><br/>
            Visitános y diviértete con nosotros. 
            <br/><br/>
            <b>CINESTAR</b>, siempre pensando en tí. 
        </span>		
    </div> 
@endsection
