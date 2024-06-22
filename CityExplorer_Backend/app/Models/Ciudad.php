<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ciudad extends Model
{
    use HasFactory;
    protected $table = 'ciudades';
    protected $primaryKey = 'id_ciudad';
    protected $hidden = ['updated_at', 'created_at'];
    protected $fillable = [
        'nombre',
        'id_pais',
        'ciudad',
        'latitud',
        'longitud'
    ];

    public $timestamps = false;

    public function lugares()
    {
        return $this->hasMany(Lugar::class,'id_ciudad');
    }

    public function guias()
    {
        return $this->hasMany(Guia::class,'id_ciudad');
    }
    
    public function pais()
    {
        return $this->belongsTo(Pais::class,'id_pais');
    }
}
