@include('client.partials.start')

@include('client.partials.navbar')
@include('client.partials.sideBar')
<div class="container">
    @yield('container')
</div>

@include('client.partials.end')
