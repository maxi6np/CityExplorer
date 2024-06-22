<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Resena extends Model
{
    use HasFactory;
    protected $table = 'resenas';
    protected $primaryKey = 'id_resena';
    protected $hidden = ['updated_at', 'created_at'];
    protected $fillable = [
        'id_resena',
        'fecha',
        'descripcion',
        'valoracion',
        'id_usuario',
        'id_lugar'
    ];

    public $timestamps = false;
    public $incrementing = false;

    public function lugar()
    {
        return $this->belongsTo(Lugar::class, 'id_lugar');
    }

    public function usuario()
    {
        return $this->belongsTo(User::class, 'id_usuario');
    }


}
