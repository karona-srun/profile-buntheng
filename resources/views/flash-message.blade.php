<div class="alert-wrapper" style="display: none">
    @if ($message = Session::get('info'))
    <div class="alert alert-primary dismissible-alert" role="alert"><b>Info:</b> {{ $message }}
        <i class="alert-close mdi mdi-close"></i>
    </div>
    @endif
    @if ($message = Session::get('success'))
    <div class="alert alert-success dismissible-alert" role="alert"><b>Info:</b> {{ $message }}
        <i class="alert-close mdi mdi-close"></i>
    </div>
    @endif
    @if ($message = Session::get('error'))
    <div class="alert alert-warning dismissible-alert" role="alert"><b>Warning:</b> {{ $message }}!
        <i class="alert-close mdi mdi-close"></i>
    </div>
    @endif
    @if ($errors->any())
    <div class="alert alert-warning dismissible-alert" role="alert"><b>Warning:</b> {{ $message }}!
        <i class="alert-close mdi mdi-close"></i>
    </div>
    @endif
</div>
