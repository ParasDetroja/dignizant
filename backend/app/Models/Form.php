<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;

class Form extends Model
{
    use HasFactory;
    protected $table = "form";
    protected $fillable = [
        'id', 'form_json', "form_id"
    ];

    function store(Request $request){
        $form = new Form();
        $form['form_json'] = $request['form_json'];
        $data = $form->save();
        return $form->id;
    }
}
