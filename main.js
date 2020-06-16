
document.getElementById("feed").style.display="none"


axios.get("https://hiit.ria.rocks/videos_api/cdn/com.rstream.crafts?versionCode=40&lurl=Canvas%20painting%20ideas")
    .then(data => {
        console.log("done")

        data.data.forEach(element => {
            like = localStorage.getItem(element["id"])
            if (like == null) {
                element["like"] = 'notliked'
            }
            else {
                element["like"] = 'liked'
            }
            element["readmore"] = 'false'
        });
        document.getElementById("loading").style.display="none"
        document.getElementById("feed").style.display="block"
        Feed(data.data)
    })

Feed = function (posts) {
    var app4 = new Vue({
        el: '#app-4',
        data: {
            posts: posts
        },
        methods: {
            like: function (index) {
                this.posts[index]['like'] = 'liked';
                localStorage.setItem(this.posts[index]['id'], 'liked')
            },
            dislike: function (index) {
                this.posts[index]['like'] = 'notliked';
                localStorage.removeItem(this.posts[index]['id'])
            },
            readmore: function (index) {
                this.posts[index]['readmore'] = 'true'
            },
            readless: function (index) {
                this.posts[index]['readmore'] = 'false'
            }
        }
    })
}

var app5 = new Vue({
    el: '#app-5',
    data: {
        comments: [{ "username": "James", "comments": "This looks sad" }, 
        { "username": "James", "comments": "not so cool" }, 
        { "username": "James", "comments": "awesome" }, 
        { "username": "James", "comments": "awesome" }, 
        { "username": "James", "comments": "awesome" }, 
        { "username": "James", "comments": "awesome" }, 
        { "username": "James", "comments": "not so cool" }, 
        { "username": "James", "comments": "awesome" }, 
        { "username": "James", "comments": "This looks sad" }, 
        { "username": "James", "comments": "awesome" }, 
        { "username": "James", "comments": "awesome" }, 
        { "username": "James", "comments": "not so cool" }]
    }
})