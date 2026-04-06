<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CinestarController;

Route::get('/', [CinestarController::class, 'index'])->name('index');
Route::get('/peliculas/{idEstado}', [CinestarController::class, 'peliculas'])->name('peliculas');
Route::get('/pelicula/{id}', [CinestarController::class, 'pelicula'])->name('pelicula');
Route::get('/cines', [CinestarController::class, 'cines'])->name('cines');
Route::get('/cine/{id}', [CinestarController::class, 'cine'])->name('cine');
