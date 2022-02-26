<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;
use DB;

class UserResponse extends Model
{
    use HasFactory;
    protected $table = "userResponse";
    protected $fillable = [
        'id', 'form_json'
    ];

    function store(Request $request){
        $userResponse = new UserResponse();
        $userResponse['form_json'] = $request['form_json'];
        $userResponse['form_id'] = $request['form_id'];
        $userResponse->save();
        return $userResponse->id;
    }

    function getUserResponse(Request $request){
        $id = $request['id'];
        $data = DB::select('SELECT * FROM userresponse WHERE form_id = '.$id);
        return $data;
    }
}
