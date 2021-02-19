<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">
    <title>{{ config('app.name', 'Buntheng') }}</title>
    <meta content="" name="descriptison">
    <meta content="" name="keywords">
    <link href="{{ asset('logo.jpg') }}" rel="icon">
</head>
<body> 
    <p>First Name: {{ $details['firstname'] }}</p>
    <p>Last Name: {{ $details['lastname'] }}</p>
    <p>Email Address: {{ $details['email'] }}</p>
    <p>Phone Number: {{ $details['phone'] }}</p>
    <p>Company Name: {{ $details['company'] }}</p>
    <p>Purpose of Contact: {{ $details['purpose'] }}</p>
    <p>Message: {{ $details['message'] }}</p>
    <p>Thank you</p>
</body>
</html>