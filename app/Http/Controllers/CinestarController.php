<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class CinestarController extends Controller
{
    private $apiUrl = 'https://alex-cinestar-api.azurewebsites.net/api';

    public function index()
    {
        return view('index');
    }

    public function peliculas($idEstado)
    {
        $response = Http::get($this->apiUrl . '/peliculas/' . $idEstado);
        $peliculas = $response->json() ?? [];
        
        $titulo = $idEstado == 1 ? 'Cartelera' : 'Próximos Estrenos';
        
        return view('peliculas', compact('peliculas', 'titulo'));
    }

    public function pelicula($id)
    {
        $response = Http::get($this->apiUrl . '/pelicula/' . $id);
        $data = $response->json();
        $pelicula = !empty($data) ? $data[0] : null;

        if (!$pelicula) {
            abort(404);
        }

        return view('pelicula', compact('pelicula'));
    }

    public function cines()
    {
        $response = Http::get($this->apiUrl . '/cines');
        $cines = $response->json() ?? [];

        return view('cines', compact('cines'));
    }

    public function cine($id)
    {
        $response = Http::get($this->apiUrl . '/cine/' . $id);
        $data = $response->json();
        $cine = !empty($data) ? $data[0] : null;

        if (!$cine) {
            abort(404);
        }

        return view('cine', compact('cine'));
    }
}
