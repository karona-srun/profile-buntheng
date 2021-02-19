<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\MailDemo;

class MailController extends Controller
{
    public function sendEmail(Request $request)
    {
        # code...
        $details = [
            'firstname' => $request->firstname,
            'lastname' => $request->lastname,
            'email' => $request->email,
            'phone' => $request->phone,
            'company' => $request->company,
            'purpose' => $request->purpose,
            'message' => $request->message
        ];

        \Mail::to("bunthengdesign@gmail.com")->send(new MailDemo($details));

        return back()->with('success',__('app.flast_message'));
    }
}
