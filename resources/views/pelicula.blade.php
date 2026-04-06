@extends('layouts.app')

@section('content')
    <br/><h1>{{ $pelicula['idEstado'] == '1' ? 'Cartelera' : 'Próximos Estrenos' }}</h1><br/>
    <div class="contenido-pelicula">
        <div class="datos-pelicula">
            <h2>{{ $pelicula['Titulo'] }}</h2>
            <p>{{ $pelicula['Sinopsis'] }}</p>
            <br/>
            <div class="tabla">
                <div class="fila">
                    <div class="celda-titulo">Título Original :</div>
                    <div class="celda">{{ $pelicula['Titulo'] }}</div>
                </div>
                <div class="fila">
                    <div class="celda-titulo">Estreno :</div>
                    <div class="celda">{{ $pelicula['FechaEstrenoss'] ?? '' }}</div>
                </div>
                <div class="fila">
                    <div class="celda-titulo">Género :</div>
                    <div class="celda">{{ $pelicula['Geneross'] ?? '' }}</div>
                </div>
                <div class="fila">
                    <div class="celda-titulo">Director :</div>
                    <div class="celda">{{ $pelicula['Director'] }}</div>
                </div>
                <div class="fila">
                    <div class="celda-titulo">Reparto :</div>
                    <div class="celda">{{ $pelicula['Reparto'] }}</div>
                </div>
            </div>
        </div>
        <img src="https://ocuszvwpcxnljglkfari.supabase.co/storage/v1/object/public/cinestar-img/pelicula/{{ $pelicula['id'] }}.jpg" width="160" height="226"><br/><br/>
    </div>
    <div class="pelicula-video">
        <iframe src="https://www.youtube.com/embed/{{ $pelicula['Link'] }}" width="580" height="400"></iframe>
    </div>
@endsection
