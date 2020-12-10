
<div class="card-body">
    @if ($message = Session::get('info'))
    <div class="alert alert-primary alert-dismissible fade show" role="alert">
        {{ $message }}.
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>
    @endif
    @if ($message = Session::get('success'))
    <div class="alert alert-success alert-dismissible show fade">
        {{ $message }}.
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>
    @endif
    @if ($message = Session::get('error'))
    <div class="alert alert-danger alert-dismissible show fade">
        {{ $message }}.
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>
    @endif
    @if ($message = Session::get('warning'))
    <div class="alert alert-warning alert-dismissible show fade">
        {{ $message }}.
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>
    @endif
    @if ($message = Session::get('info'))
    <div class="alert alert-info alert-dismissible show fade">
        {{ $message }}.
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>
    @endif
</div>
