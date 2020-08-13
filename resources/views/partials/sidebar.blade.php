<div class="sidebar">
    <div class="user-profile">
        <div class="display-avatar animated-avatar">
            <img class="profile-img img-lg rounded-circle" src="{{ asset('plugin/images/profile/male/image_1.png') }}" alt="profile image">
        </div>
        <div class="info-wrapper">
            <p class="user-name">{{ Auth::User()->name}}</p>
            <p class="display-income">{{ Auth::User()->email}}</p>
        </div>
    </div>
    <ul class="navigation-menu">
        <li class="nav-category-divider">MAIN</li>
        <li>
        <a href="{{ url('/home') }}">
                <span class="link-title">Dashboard</span>
                <i class="mdi mdi-gauge link-icon"></i>
            </a>
        </li>
        <li>
            <a href="#sample-pages" data-toggle="collapse" aria-expanded="false">
                <span class="link-title">Posts</span>
                <i class="mdi mdi-flask link-icon"></i>
            </a>
            <ul class="collapse navigation-submenu" id="sample-pages">
                <li>
                    <a href="{{ route('post.index') }}">Posts</a>
                </li>
                <li>
                <a href="{{ route('post_type.index') }}">Post Types</a>
                </li>
            </ul>
        </li>
        <li>
            <a href="#ui-elements" data-toggle="collapse" aria-expanded="false">
                <span class="link-title">Securities</span>
                <i class="mdi mdi-bullseye link-icon"></i>
            </a>
            <ul class="collapse navigation-submenu" id="ui-elements">
                <li>
                    <a href="#">Users</a>
                </li>
                <li>
                    <a href="#">Activity Logs</a>
                </li>
            </ul>
        </li>
    </ul>
</div>