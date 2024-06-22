<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pais extends Model
{
    use HasFactory;
    protected $table = 'paises';
    protected $primaryKey = 'id_pais';
    protected $hidden = ['updated_at', 'created_at'];
    protected $fillable = [
        'nombre'
    ];

    public $timestamps = false;

    public function ciudades()
    {
        return $this->hasMany(Ciudad::class,'id_pais');
    }
}
