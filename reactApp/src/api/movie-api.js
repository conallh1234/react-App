export const login = (username, password) => {
    return fetch('/api/users', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ username: username, password: password })
    }).then(res => res.json())
};

export const signup = (username, password) => {
    return fetch('/api/users?action=register', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ username: username, password: password })
    }
    ).then(res => res.json())
};


//add a favourite to a users favourites array
export const addFavourite = (username, id) => {
    return fetch(`/api/users/${username}/favourites`, {
        headers: {
            'Content-type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ id: id })
    }
    ).then(res => res.json());
};


//get favourites for a user
export const getFavourites = (username) => {
    return fetch(
        `/api/users/`+username+`/favourites`, {headers: {
        'Authorization': window.localStorage.getItem('token')
        }
    }
    )
    .then(res => res.json());
};

//remove a favourite from a users array of favourites
export const removeFromFavourites = (username, id) => {
    return fetch(
        `/api/users/${username}/favourites`, {
            headers: {
                'Content-type': 'application/json'
        },
        method: 'delete',
        body: JSON.stringify({ id : id })
    }
    )
};


//add a movie to a users watchlist array
export const addWatch = (username, id) => {
    return fetch(`/api/users/${username}/watchlist`, {
        headers: {
            'Content-type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ id: id })
    }
    ).then(res => res.json());
};


//get watchlist for a user
export const getWatchList = (username) => {
    return fetch(
        `/api/users/`+username+`/watchlist`, {headers: {
        'Authorization': window.localStorage.getItem('token')
        }
    }
    )
    .then(res => res.json());
};

//remove a favourite from a users array of favourites
export const removeFromWatchList = (username, id) => {
    return fetch(
        `/api/users/${username}/watchlist`, {
            headers: {
                'Content-type': 'application/json'
        },
        method: 'delete',
        body: JSON.stringify({ id : id })
    }
    )
};




export const getMovies = () => {
    return fetch(
       '/api/movies',{headers: {
         'Authorization': window.localStorage.getItem('token')
      }
    }
    )
    .then(res => res.json());
};

export const getMovie = id => {
    return fetch(
        `/api/movies/${id}`,{headers: {
            'Authorization': window.localStorage.getItem('token')
        }
    }
    )
    .then(res => res.json());
};

export const getUpcomingMovies = () => {
    return fetch(
        '/api/upcoming',{headers: {
            'Authorization': window.localStorage.getItem('token')
        }
    }
    )
    .then(res => res.json());
};


export const getTrendingMovies = () => {
    return fetch(
        `/api/trending`,{headers: {
            'Authorization': window.localStorage.getItem('token')
        }
    }
    )
    .then(res => res.json());
};

export const getMovieCredits = id => {
    return fetch(
        `/api/movies/${id}/credits`, {headers: {
            'Authorization' : window.localStorage.getItem('token')
        }
    }
    )
    .then(res => res.json());
}

export const getMovieCast = id => {
    return fetch(
        `/api/movies/${id}/cast`, {headers: {
            'Authorization' : window.localStorage.getItem('token')
        }
    }
    )
    .then(res => res.json());
};

export const getMovieReviews = id => {
    return fetch(
        `/api/movies/${id}/reviews`, {headers: {
            'Authorization': window.localStorage.getItem('token')
        }
    }
    )
    .then(res => res.json());
};

export const getGenres = () => {
    return fetch(
        '/api/genres',{headers: {
            'Authorization': window.localStorage.getItem('token')
        }}
    )
    .then(res => res.json());
};

export const getPeople = () => {
    return fetch(
        `/api/people`,{headers: {
            'Authorization': window.localStorage.getItem('token')
        }}
    )
    .then(res => res.json());
};

export const getPerson = (id) => {
    return fetch(
        `/api/people/${id}`,{headers: {
            'Authorization': window.localStorage.getItem('token')
        }}
    ).then(res => res.json());
};