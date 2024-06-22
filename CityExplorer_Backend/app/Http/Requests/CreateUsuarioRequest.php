<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CreateUsuarioRequest extends FormRequest
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
            'nombre' => 'required|string|min:3|max:45',
            'apellidos' => 'required|string|min:10|max:100',
            'email' => 'required|email|unique:usuarios|max:45',
            'contrasena' => 'required|string|min:8',
            'verificado' => 'required|boolean',
            'admin' => 'required|boolean'
        ];

    }
}
