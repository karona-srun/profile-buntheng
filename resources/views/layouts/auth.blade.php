<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>{{ config('app.name', 'Laravel') }}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimal-ui">
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <link rel="stylesheet" href="vendor_be/css/bootstrap.css">

    <link rel="shortcut icon" href="vendor_be/images/favicon.svg" type="image/x-icon">
    <link rel="stylesheet" href="vendor_be/css/app.css">
</head>

<body>
    <div id="auth">
        @yield('content')
    </div>
    <script src="vendor_be/js/feather-icons/feather.min.js"></script>
    <script src="vendor_be/js/app.js"></script>
    <script src="vendor_be/js/main.js"></script>
</body>

</html>
