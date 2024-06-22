<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateUsuarioRequest extends FormRequest
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
        $metodo = $this->method();
        if ($metodo == 'PUT') {
            return [
                'nombre' => 'required|string|min:3|max:45',
                'apellidos' => 'required|string|min:10|max:100',
                'email' => 'required|email|max:45',
                'contrasena' => 'required|string',
                'verificado' => 'required|boolean',
                'admin' => 'required|boolean'
            ];
        } else {
            return [
                'nombre' => 'sometimes|string|min:3|max:45',
                'apellidos' => 'sometimes|string|min:10|max:100',
                'email' => 'sometimes|email|max:45',
                'contrasena' => 'sometimes|string',
                'verificado' => 'sometimes|boolean',
                'admin' => 'sometimes|boolean'
            ];
        }
    }
}
