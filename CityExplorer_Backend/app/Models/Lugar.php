<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Lugar extends Model
{
    use HasFactory;
    protected $table = 'lugares';
    protected $primaryKey = 'id_lugar';
    protected $hidden = ['updated_at', 'created_at','ciudad_id'];
    protected $fillable = [
        'nombre',
        'imagen',
        'descripcion',
        'tipo_lugar',
        'hora_apertura',
        'hora_cierre',
        'precio',
        'id_ciudad',
        'latitud',
        'longitud'
    ];

    public $timestamps = false;

    public function ciudad()
    {
        return $this->belongsTo(Ciudad::class,'id_ciudad');
    }

    public function resenas(){
        return $this->hasMany(Resena::class,'id_lugar');
    }
}
