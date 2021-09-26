<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ config('app.name', 'Laravel') }}</title>
    <link rel="stylesheet" href="{{ asset('vendor_be/css/bootstrap.css') }}">
    <link rel="stylesheet" href="{{ asset('vendor_be/css/app.css') }}">
    <link rel="shortcut icon" href="{{ asset('logo.jpg') }}" type="image/x-icon">
</head>
<body>
    <div id="error">
        
<div class="container text-center pt-32">
    <h1 class='error-title'>500</h1>
    <p>Error system. Please contact administrator.</p>
    <a href="{{ url()->previous() }}" class='btn btn-primary'>Go Home</a>
</div>

        <div class="footer pt-32">
            <p class="text-center">Copyright &copy; {{ config('app.name', 'Laravel') }} 2020</p>
        </div>
    </div>
</body>
</html>
