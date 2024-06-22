<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateCiudadRequest extends FormRequest
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
                'nombre' => 'required|string|min:3|max:255',
                'id_pais' => 'required|integer|exists:paises,id_pais'
            ];
        } else {
            return [
                'nombre' => 'sometimes|string|min:3|max:255',
                'id_pais' => 'sometimes|integer|exists:paises,id_pais'
            ];
        }
    }
}
