<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateResenaRequest extends FormRequest
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
                'valoracion' => 'required|numeric',
                'descripcion' => 'required|string',
            ];
        } else {
            return [
                'valoracion' => 'sometimes|numeric',
                'descripcion' => 'sometimes|string',
            ];
        }
    }
}
