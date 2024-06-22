<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CreateLugarRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'nombre' => 'required|string|min:3|max:255',
            'imagen' => 'required|url|max:255',
            'descripcion' => 'required|string',
            'tipo_lugar' => 'required|string',
            'hora_apertura' => 'required|date_format:H:i:s',
            'hora_cierre' => 'required|date_format:H:i:s',
            'precio' => 'nullable|numeric',
            'id_ciudad' => 'required|integer|exists:ciudades'
        ];
    }
}
