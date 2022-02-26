<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Form;
use App\Models\UserResponse;

class FormController extends Controller
{
    function store(Request $request){
        $obj = new Form();
        $result = $obj->store($request);
        return $result;
    }

    function getForm(Request $request) {
        $id = $request['id'];
        $data = Form::find($id);
        return $data;
    }   

    function userResponse(Request $request){
        $obj = new UserResponse();
        $result = $obj->store($request);
        return $result;
    }

    function getUserResponse(Request $request){
        $obj = new UserResponse();
        $result = $obj->getUserResponse($request);
        return $result;
    }
}
