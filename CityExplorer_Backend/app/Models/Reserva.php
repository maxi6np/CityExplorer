<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reserva extends Model
{
    use HasFactory;
    protected $table = 'reservas';
    protected $primaryKey = 'id_reserva';
    protected $hidden = ['updated_at', 'created_at'];
    protected $fillable = [
        'id_reserva',
        'id_guia',
        'id_usuario',
        'fecha',
        'importe',
        'estado',
        'personas'
    ];

    public $timestamps = false;
    public $incrementing = false;

    public function guia()
    {
        return $this->belongsTo(Guia::class,'id_guia','id_guia');
    }

    public function usuario()
    {
        return $this->belongsTo(User::class,'id_usuario','id_usuario');
    }
}
