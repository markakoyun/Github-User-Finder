$(document).ready(function () {
    $('#user').on('keyup', searchUser);

    function searchUser(e) {
        var username = e.target.value;

        $.ajax({
            url: 'https://api.github.com/users/' + username,
            data: {
                client_id: 'c6ca7cdb0f65588d542e',
                client_secret: '2bdd8d53ca07804693209dcb635526b96938ae96'
            }
        }).done(function (user) {
            var name = user.name;
            var login = user.login;
            var url = user.url;
            var avatarUrl = user.avatar_url;
            var profile = user.html_url;
            var followers = user.followers;
            var following = user.following;
            var prepos = user.public_repos;
            var pgits = user.public_gists;
            var company = user.company;
            var blog = user.blog;
            var email = user.email;
            var location = user.location;

            $('#profile').html('<div class="col s12 m5"><div class="card"><div class="card-image"> <img src="' + avatarUrl + '"><span class="card-title">' + name + '</span> </div> <div class="card-content"> <ul class="links right"> <li><span class="new badge green" data-badge-caption="' + followers + '">Followers</span></li><li><span class="new badge teal" data-badge-caption="' + following + '">Following</span></li> <li><span class="new badge red" data-badge-caption="' + prepos + '">Public Repositories</span></li><li><span class="new badge blue" data-badge-caption="' + pgits + '">Public Gists</span></li></ul> <ul> <li>Company : ' + company + ' </li>  <li>Blog : ' + blog + '</li> <li>Email : ' + email + '</li> <li>Location : ' + location + '</li></ul></div> <div class="card-action center-align"><a href="' + profile + '" target="_blank" class="waves-effect waves-light btn">View Profile</a></div> </div> </div>')
        });
    }
});
