<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CreateReservaRequest extends FormRequest
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
            'id_guia' => 'required|numeric',
            'id_usuario' => 'required|numeric',
            'fecha' => 'required|date_format:d-m-Y',
            'personas' => 'required|numeric',
            'importe' => 'required|numeric'
        ];
    }
}
