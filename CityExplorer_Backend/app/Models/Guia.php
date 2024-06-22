<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Guia extends Model
{
    use HasFactory;
    protected $table = 'guias';
    protected $primaryKey = 'id_guia';
    protected $hidden = ['updated_at', 'created_at'];
    protected $fillable = [
        'id_guia',
        'id_ciudad',
        'nombre',
        'precio',
        'capacidad'
    ];

    public $timestamps = false;

    public function ciudad()
    {
        return $this->belongsTo(Ciudad::class,'id_ciudad');
    }

    public function reservas()
    {
        return $this->belongsTo(Reserva::class,'id_guia');
    }

    public function usuarios(){
        return $this->belongsToMany(User::class, 'reservas', 'id_guia', 'id_usuario');
    }
}
